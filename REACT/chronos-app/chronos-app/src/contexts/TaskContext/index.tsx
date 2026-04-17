import { createContext, use, useContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";

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

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>({initialContextValue});

const initialContextValue: TaskContextProps = {
  state: initialState,
  setState: () => {},
};

export function TaskContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <TaskContext.Provider value={{ initialContextValue }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
    useContext(TaskContext);
}