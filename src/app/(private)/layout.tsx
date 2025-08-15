import { SidebarProvider } from "@/components/sidebar-context";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <SidebarProvider>
            <div className="flex">
              <Sidebar />
              <main className="flex-1 p-4">{children}</main>
            </div>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
