import Header from "@/components/header/Header";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brewtiful Recipes",
  description: "Brewtiful Recipes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-slate-800">
        <div className="w-[90%] md:w-[700px] px-2 pb-10 m-auto bg-slate-500 rounded-b-3xl">
          <div className="bg-amber-900 rounded-b-3xl ">
            <Header />
            {children}
          </div>
        </div>
        <footer className="w-full h-[20px] m-auto bg-slate-900"></footer>
      </body>
    </html>
  );
}
