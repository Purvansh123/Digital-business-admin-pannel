import {create} from 'zustand'
import {
    groupNumber,
    INITIAL_EVENTS,
    userData,
    boardData,
  } from "../Data/Data";

  const useCalender = create((set)=>({
    currentEvents: INITIAL_EVENTS,
    setCurrentEvents: (events) => set({ currentEvents: events }),
  }))

  export default useCalender;   