import { Lexend } from "next/font/google";
import "@/styles/globals.css";
import { StoreProvider } from "@/stores/StoreProvider";
import ToastProvider from "@/lib/ToastProvider";

const inter = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Task Management App",
  description: "An application for managing tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-100 ${inter.className}`}>
        <ToastProvider />
        <StoreProvider>
          <main className="container">{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
