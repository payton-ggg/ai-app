import { create } from "zustand";

export const useModel = create((set) => ({
  models: [],
  setModels: (models: string[]) => set({ models }),
}));
