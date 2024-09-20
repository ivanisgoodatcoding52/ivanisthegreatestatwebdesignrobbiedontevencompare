// app/layout.tsx

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Minecraft-like Page",
  description: "A webpage inspired by the old Minecraft homepage",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
