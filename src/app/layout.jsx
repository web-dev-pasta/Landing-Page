import "./globals.css";
import localFont from "next/font/local";
import Providers from "./providers";
export const metadata = {
  title: "Tower Landing Page",
  description:
    "Tower Real Estate offers premium residential and commercial properties with modern design and prime locations. Explore your next investment today.",
  icons: {
    icon: "/assets/images/logo-discover.svg",
  },
};

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
  preload: true,
});

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${helvetica.variable} ${montserrat.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
