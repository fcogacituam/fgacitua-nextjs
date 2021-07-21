import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layouts/main";
export default function Home() {
  return (
    <MainLayout>
      <div>
        <Head>
          <title>Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header></header>

        <main>
          <Image
            src="/images/goku.jpg"
            height={100}
            width={150}
            alt="goku"
          ></Image>
          <h1>Francisco Gacitúa</h1>
          <Image
            src="/images/goku.jpg"
            height={100}
            width={150}
            alt="goku"
          ></Image>
          <h1>Francisco Gacitúa</h1>
          <Image
            src="/images/goku.jpg"
            height={100}
            width={150}
            alt="goku"
          ></Image>
          <h1>Francisco Gacitúa</h1>
          <Image
            src="/images/goku.jpg"
            height={500}
            width={150}
            alt="goku"
          ></Image>
          <h1>Francisco Gacitúa</h1>
        </main>
      </div>
    </MainLayout>
  );
}