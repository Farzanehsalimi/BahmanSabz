import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"], // Regular و SemiBold
  variable: "--font-inter",
  display: "swap",
});

// export const metadata = {
//   title: "Dashboard",
//   description: "Chakra dashboard",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
