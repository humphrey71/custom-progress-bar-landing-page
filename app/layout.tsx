import BaiDuAnalytics from "@/app/BaiDuAnalytics"
import GoogleAnalytics from "@/app/GoogleAnalytics"
import { TailwindIndicator } from "@/components/TailwindIndicator"
import { ThemeProvider } from "@/components/ThemeProvider"
import { siteConfig } from "@/config/site"
import { defaultLocale } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import "@/styles/loading.css"
import { Analytics } from "@vercel/analytics/react"
import { Viewport } from "next"
import { Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Custom Progress Bar",
  description: "Custom Progress Bar is a browser extension that lets you personalize the look of YouTube's video progress bar. Make your viewing experience truly yours!",
};
export const viewport: Viewport = {
  themeColor: siteConfig.themeColors,
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string | undefined };
}) {
  return (
    <html lang={lang || defaultLocale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.nextThemeColor}
          enableSystem
        >
          <main className="flex flex-col items-center">{children}</main>
          <Analytics />
          <TailwindIndicator />
        </ThemeProvider>
        {process.env.NODE_ENV === "development" ? (
          <></>
        ) : (
          <>
            <GoogleAnalytics />
            <BaiDuAnalytics />
          </>
        )}
      </body>
    </html>
  );
}
