import { ReactNode } from "react";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function PublicLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
