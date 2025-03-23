import { TySpinner } from "@/components/ui/ty-spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <TySpinner size="xl" />
    </div>
  );
}
