import './styles/global.css';
import './styles/theme.css';

import { Home } from './Pages/Home';
import { useState } from 'react';
import type{ TaskStateModel } from './Models/TaskStateModel';
import { TaskContextProvider } from './contexts/TaskContext';


const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    work: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  }
}

export function App() {
  const [state, setState] = useState(initialState);


  return (
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
  );
}
