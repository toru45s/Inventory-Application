import { create } from "zustand";

type DialogProductState = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

// Hook to manage the state of the product dialog
export const useDialogProduct = create<DialogProductState>((set) => ({
  open: false,
  onOpenChange: (open: boolean) => set({ open }),
}));
