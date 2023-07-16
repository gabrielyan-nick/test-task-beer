import { create } from "zustand";

interface IStore {
  beers: IBeer[];
  page: number;
  isLoading: boolean;
  isError: boolean;
  cache: Record<number, IBeer[]>;
  visibleStart: number;
  visibleEnd: number;
  delCount: number;
  setVisibleStart: (num: number) => void;
  setVisibleEnd: (num: number) => void;
  fetchBeers: (page: number) => Promise<void>;
  setPage: (newPage: number) => void;
  setDelCount: (num: number) => void;
  deleteBeer: (ids: number[]) => void;
}

export const useStore = create<IStore>()((set, get) => ({
  beers: [],
  isLoading: false,
  isError: false,
  page: 1,
  cache: {},
  visibleStart: 0,
  visibleEnd: 15,
  delCount: 0,
  setPage: (newPage) => set({ page: newPage }),
  setVisibleStart: (num) =>
    set((s) => ({ visibleStart: s.visibleStart + num })),
  setVisibleEnd: (num) => set((s) => ({ visibleEnd: s.visibleEnd + num })),
  fetchBeers: async (page) => {
    const { cache } = get();
    const cachedData = cache[page];
    if (cachedData) {
      return;
    } else {
      set(() => ({ isLoading: true }));
      try {
        const res = await fetch(
          `https://api.punkapi.com/v2/beers?page=${page}`
        );
        const data = await res.json();
        cache[page] = data;
        set((s) => ({ beers: [...s.beers, ...data], isLoading: false }));
      } catch (e) {
        set(() => ({ isError: true, isLoading: false }));
      }
    }
  },
  deleteBeer: (ids) => {
    set((s) => ({
      beers: s.beers.filter((beer) => !ids.includes(beer.id)),
    }));
  },
  setDelCount: (num) => set((s) => ({ delCount: s.delCount + num })),
}));
