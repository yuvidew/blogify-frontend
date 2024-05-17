import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Provider/ThemeProvider";
import { ViewTransitions } from "next-view-transitions";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogify",
  description: "The connected workspace where better faster work happens",
  icons : {
    icon : [
      {
        media : "(prefers-color-scheme : light)",
        url : "/logo.png",
        href : "/logo.png"
      },
      {
        media : "(prefers-color-scheme : dark)",
        url : "/logo-dark.png",
        href : "/logo-dark.png"
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={`${inter.className} dark:bg-[#171717]`}>
      <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider 
          attribute = "class"
          defaultTheme = "system"
          enableSystem
          disableTransitionOnChange
          storageKey = "jotion-theme-2"
      >
        {children}
      </ThemeProvider>
      </Suspense>
      </body>
    </html>
    </ViewTransitions>
  );
}
