import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title='Next.js'
        description='next-seo test'
        openGraph={{
          type: 'website',
          locale: 'en_US',
          title: 'Next.js',
          description: 'next-seo test',
          site_name: 'Next.js',
          images: [
            {
              url: '/images/lulu.jpg',
              type: 'image/jpeg',
              alt: 'next-seo test',
              width: 1200,
              height: 630,
            },
          ],
        }}
        twitter={{
          handle: '@neko_chan_0122',
          site: '@neko_chan_0122',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
