import { create } from "zustand";

import { immer } from "zustand/middleware/immer";
import { ICity } from "../types/types";

interface AppState {
  ciudadBuscada: ICity | null;
}

interface AppActions {}

export const useAppStore = create(
  immer<AppState & AppActions>((set) => ({
    ciudadBuscada: null,
  })),
);
