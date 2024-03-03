import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '@/components/Header/Header'
import type { AppProps } from 'next/app'
import "../styles/globals.css" 
import Footer from "@/components/Footer/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return ( <>
        <Header />
        <Component {...pageProps} />
        <Footer />
        </>
    )
}