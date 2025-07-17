"use client"

// src/hooks/use-toast.ts
// Este archivo es un placeholder. En un proyecto real, importarías `useToast` de `@/components/ui/use-toast`.
// Si ya tienes el archivo `components/ui/use-toast.ts` de shadcn/ui, no necesitas este.
// Si no lo tienes, puedes crearlo con el contenido de shadcn/ui o simplemente dejar este placeholder
// si no estás usando la funcionalidad de toasts activamente todavía.

export function useToast() {
  // Placeholder para la función useToast
  // En un proyecto real, esto sería algo como:
  // const { toast } = useShadcnToast();
  // return { toast };
  return {
    toast: ({
      title,
      description,
      variant,
    }: { title: string; description?: string; variant?: "default" | "destructive" }) => {
      console.log("Toast:", title, description, variant)
    },
  }
}
