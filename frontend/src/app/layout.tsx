import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnEntree",
  description: "Desafio Fullstack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imageUrl =
    "https://s3-alpha-sig.figma.com/img/7297/64ce/e901f8451e388ae8fef6642b3fc5bbc8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfszocfeintEqwPq-fSz3NdRixVR7y5bFqzMqMdCYcqR3ppkgIbBuR1L35AlloqyIpfKpVnc9Evi5po3zj90zMF8pWKfFSwvoINrP0QBzr1iZe73GTxCXz34mX8d~2I6vJ8Rnt1z5irwhmHsC2j4-SElpvhR5fIinJE50zJaTzEIl7GXDr7qq3mUZJDjK2A51Un~AYoIg6aBluupPerML~4SAr8f06e8hFEtiFtpIQ58O-Dm37cdsVNdI6pyAM4LPg0ZcDsYEzcQPdS~y-~vLV2BkkE9EvXY~pYOhpzXntFS0QC-4tPhK7U1CYDcvFRGqAt6JtlBgSC9njwazRaWDQ__"; // Replace with your actual image path

  const styles = {
    backgroundImage: `url(${imageUrl})`,
  };
  return (
    <html lang="en">
      <body style={styles} className={font.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
