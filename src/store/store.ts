import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavsStore {
  favs: string[];
  addToFavs: (username: string) => void;
  removeFromFavs: (username: string) => void;
}

export const useStore = create<FavsStore>()(
  persist((set) => ({
    favs: [],
    addToFavs: (username: string) => 
      set((state) => ({ favs: [...state.favs, username] })), 
    removeFromFavs: (username: string) => 
      set((state) => ({
        favs: state.favs.filter((fav) => fav !== username),
      })),
    }),
    ({
    name: "favourites",
    getStorage: () => localStorage,
  })
))
