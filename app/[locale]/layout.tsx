
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { JSONLD, ROOTKEYWORDS } from "@/lib/seo";
import Providers from '../context/Providers'
import { Toaster } from "@/components/ui/toaster";
import { BASE_URL, GOOGLE_SC_VERIFICATION, LOCALES } from '@/lib/variables'
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import {
  alexBrush,
  dancingScript,
  greatVibes,
  outfit,
  parisienne,
} from "@/lib/fonts";

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Business Essentials | Business Optimization App",
    description:
        "Industry standard business optimization app",
    icons: [{ rel: "icon", url: '/vercel.svg' }],
keywords: ROOTKEYWORDS  ,
    viewport: "width=device-width, initial-scale=1",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: BASE_URL,
    },
    authors: {
        name: "blackevn, Ali Abbasov",
        url: "/",
    },
    verification: {
        google: GOOGLE_SC_VERIFICATION,
    },
};

export function generateStaticParams() {
  const locales = LOCALES.map((locale) => locale.code);
  return locales;
}

export default async function RootLayout({
  children,
  params: { locale },
    }: {
  children: React.ReactNode;
  params: { locale: string };
    }) {

      let messages;
      try {
          messages = (await import(`@/i18n/locales/${locale}.json`)).default;
      } catch (error) {
          console.log("Error message");
          ;
      }

  return (
    <html lang="en">
    <head>
      <script
          type="application/ld+json"
          id="json-ld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />
    </head>
    <body
      className={`${inter.className} antialiased bg-slate-100 dark:bg-slate-800`}
      >
      <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
            {children}
            </Providers>
            <Toaster />
          <Analytics />
      </NextIntlClientProvider>    
      </body>
    </html>
  )
}
