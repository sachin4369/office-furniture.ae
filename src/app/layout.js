import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Regent Seating Collection",
  description:
    "Design & developed by Sachin Kumar. Technologies used: Nextjs, Tailwindcss, Javascript, HTML5, API, Responsive, code spliting:lazy loading, multiple layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <main className="max-w-screen-xl mx-auto px-4 py-2"> */}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
