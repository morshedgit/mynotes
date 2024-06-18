import type { Metadata } from "next";
import "./globals.css";
import NoteList from "@/components/notes/list";
import Link from "next/link";
import AddButton from "@/components/add-button/AddButton";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen grid grid-rows-[auto_1fr]">
        <header className="w-full h-fit border-b-2 p-4 flex justify-between">
          <h1 className="text-3xl">My Notes</h1>
          <AddButton />
        </header>
        <div className="min-h-0 grid grid-cols-[auto_1fr]">
          <aside className="w-12 sm:w-48 h-full grid grid-rows-[auto_1fr] min-h-0">
            <h2 className="p-2">Notes</h2>
            <nav className="h-full min-h-0 min-w-0">
              <NoteList />
            </nav>
          </aside>
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
