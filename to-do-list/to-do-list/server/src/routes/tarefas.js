import { Router } from 'express';
import db, { runWithRetry, serializeDbError } from '../../utis.js';
import { TaskModel } from '../models/TaskModel.js';

const router = Router();

router.get('/', async (_req, res) => {
	const { data, error } = await runWithRetry(() =>
		db.from('tarefas').select('*').order('id', { ascending: true })
	);

	if (error) {
		return res.status(500).json({ error: serializeDbError(error) });
	}

	return res.json(data);
});	

router.post('/', async (req, res) => {
	const { titulo, descricao, concluido = false, prioridade = 'media', usuario_id } = req.body;

	let task;

	try {
		task = new TaskModel({ titulo, descricao, concluido, prioridade, usuario_id });
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}

	const { data, error } = await runWithRetry(() =>
		db
			.from('tarefas')
			.insert(task.toDatabase())
			.select('*')
			.single()
	);

	if (error) {
		return res.status(500).json({ error: serializeDbError(error) });
	}

	return res.status(201).json(data);
});

router.patch('/:id/toggle-concluido', async (req, res) => {
	const id = Number(req.params.id);

	if (!Number.isInteger(id) || id <= 0) {
		return res.status(400).json({ error: 'ID de tarefa invalido.' });
	}

	const { data: currentTask, error: currentTaskError } = await runWithRetry(() =>
		db.from('tarefas').select('id, concluido').eq('id', id).single()
	);

	if (currentTaskError) {
		return res.status(500).json({ error: serializeDbError(currentTaskError) });
	}

	if (!currentTask) {
		return res.status(404).json({ error: 'Tarefa nao encontrada.' });
	}

	const { data, error } = await runWithRetry(() =>
		db
			.from('tarefas')
			.update({ concluido: !currentTask.concluido })
			.eq('id', id)
			.select('*')
			.single()
	);

	if (error) {
		return res.status(500).json({ error: serializeDbError(error) });
	}

	return res.json(data);
});

router.patch('/:id/prioridade', async (req, res) => {
	const id = Number(req.params.id);
	const { prioridade } = req.body;

	if (!Number.isInteger(id) || id <= 0) {
		return res.status(400).json({ error: 'ID de tarefa invalido.' });
	}

	let normalizedPriority;

	try {
		normalizedPriority = TaskModel.normalizePriority(prioridade);
	} catch (error) {
		return res.status(400).json({ error: error.message });
	}

	const { data, error } = await runWithRetry(() =>
		db
			.from('tarefas')
			.update({ prioridade: normalizedPriority })
			.eq('id', id)
			.select('*')
			.single()
	);

	if (error) {
		return res.status(500).json({ error: serializeDbError(error) });
	}

	if (!data) {
		return res.status(404).json({ error: 'Tarefa nao encontrada.' });
	}

	return res.json(data);
});

export default router;