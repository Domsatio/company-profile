'use client'
import localFont from 'next/font/local'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './globals.css'
import '../styles/mdx.css'
// import "../styles/carbon.css";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

const queryClient = new QueryClient();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="AWTm0wvjVFeCqW4_ENanKLp7Thn4oSEIBAbrtkUQc50" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <QueryClientProvider client={queryClient}>
            <Layout>{children}</Layout>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
