import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CatState {
  cats: number;
  increase: (by: number) => void;
}

export const useCatStore = create<CatState>()(
  devtools((set) => ({
    cats: 0,
    increase: (by) => set((state) => ({ cats: state.cats + by })),
  })),
);
