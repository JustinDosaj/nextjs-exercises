import "@/styles/globals.css";
import "@/styles/switch.css";
import "@/styles/typewriter.css";
import "@/styles/loader.css"
import { LoadingProvider } from "@/context/LoadingContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />;
    </LoadingProvider>
  )
}
