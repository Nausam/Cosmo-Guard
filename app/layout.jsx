import "./globals.css";
import { Rubik } from "next/font/google";
import Providers from "./providers";

const inter = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Cosmo Guard",
  description: "World's best VPN service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
