import { create } from "zustand";
type DialogProductState = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const useDialogProduct = create<DialogProductState>((set) => ({
  open: false,
  onOpenChange: (open: boolean) => set({ open }),
}));
