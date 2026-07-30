import { BarraNavegacao } from "./BarraNavegação";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed
        sm:bg-scroll
        cor-fundo
        flex
        flex-col
      "
    >
      <BarraNavegacao />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
