import Head from "next/head";
import CityCard from "@/components/CityCard";
import CityPicker from "@/components/CityPicker";
import { coordinates, PickerOptions } from "../../data/coordinates";
import { useState } from "react";

export default function Home() {
  const [chosenCity, setChosenCity] = useState<PickerOptions>("All cities");

  if (chosenCity === "All cities") {
    return (
      <>
        <Head>
          <title>Etteplan Weather Radar</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>
          <h1>Etteplan Weather Radar</h1>
        </header>
        <main>
          <CityPicker handleChange={setChosenCity} chosenCity={chosenCity} />
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

  const cityToView = coordinates.find((city) => city.name === chosenCity);

  if (cityToView) {
    return (
      <>
        <Head>
          <title>Etteplan Weather Radar</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <header>
          <h1>Etteplan Weather Radar</h1>
        </header>
        <main>
          <CityPicker handleChange={setChosenCity} chosenCity={chosenCity} />
          <div className="cityCardView">
            <CityCard
              city={cityToView.name}
              lat={cityToView.lat}
              lon={cityToView.lon}
            />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Etteplan Weather Radar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <h1>Etteplan Weather Radar</h1>
      </header>
      <main>
        <p>No data found.</p>
      </main>
    </>
  );
}
