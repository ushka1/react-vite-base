import { create } from 'zustand';

interface CatState {
  cats: number;
  increase: (by: number) => void;
}

export const useCatStore = create<CatState>()((set) => ({
  cats: 0,
  increase: (by) => set((state) => ({ cats: state.cats + by })),
}));
