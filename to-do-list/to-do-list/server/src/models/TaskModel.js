    const ALLOWED_PRIORITIES = ['baixa', 'media', 'alta'];

    export class TaskModel {
        constructor({ id = null, titulo, descricao = '', concluido = false, prioridade = 'media', usuario_id }) {
            if (!titulo || typeof titulo !== 'string') {
                throw new Error('Titulo da tarefa e obrigatorio.');
            }

            this.id = id;
            this.titulo = titulo.trim();
            this.descricao = typeof descricao === 'string' ? descricao.trim() : '';
            this.concluido = Boolean(concluido);
            this.prioridade = TaskModel.normalizePriority(prioridade);
            this.usuario_id = usuario_id;
        }

        static normalizePriority(prioridade) {
            if (!prioridade || typeof prioridade !== 'string') {
                return 'media';
            }

            const normalizedPriority = prioridade.toLowerCase().trim();

            if (!ALLOWED_PRIORITIES.includes(normalizedPriority)) {
                throw new Error("Prioridade invalida. Use 'baixa', 'media' ou 'alta'.");
            }

            return normalizedPriority;
        }

        toggleConcluido() {
            this.concluido = !this.concluido;
            return this.concluido;
        }

        setPrioridade(prioridade) {
            this.prioridade = TaskModel.normalizePriority(prioridade);
            return this.prioridade;
        }

        toDatabase() {
            return {
                titulo: this.titulo,
                descricao: this.descricao,
                concluido: this.concluido,
                prioridade: this.prioridade,
                usuario_id: this.usuario_id,
            };
        }
    }