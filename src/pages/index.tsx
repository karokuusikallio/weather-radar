import Head from "next/head";
import CityCard from "@/components/CityCard";
import CityPicker from "@/components/CityPicker";
import { coordinates } from "../../data/coordinates";

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
        <div className="cityCardView">
          {coordinates.map((city, index) => (
            <CityCard
              city={city.name}
              lat={city.lat}
              lon={city.lon}
              key={index}
            />
          ))}
        </div>
      </main>
    </>
  );
}
