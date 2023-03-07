import Head from "next/head";
import CityCard from "@/components/CityCard";
import CityPicker from "@/components/CityPicker";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather Radar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <h1>Weather Radar</h1>
      </header>
      <main>
        <CityPicker />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </main>
    </>
  );
}
