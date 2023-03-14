import CityCard from "@/components/CityCard";
import CityPicker from "@/components/CityPicker";
import { coordinates, PickerOptions } from "../data/coordinates";
import { useState, ChangeEvent } from "react";
import { LoadingStates } from "../types/types";

export default function Home() {
  const [chosenCity, setChosenCity] = useState<PickerOptions>("All cities");
  const [loading, setLoading] = useState<LoadingStates>(LoadingStates.idle);

  const onSelectionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setChosenCity(event.target.value);
  };

  if (loading === LoadingStates.loading) {
    return <p>Loading...</p>;
  }

  if (chosenCity === "All cities") {
    return (
      <>
        <main>
          <CityPicker
            onSelectionChange={onSelectionChange}
            chosenCity={chosenCity}
          />
          <div className="cityCardView">
            {coordinates.map((city, index) => (
              <CityCard
                city={city.name}
                lat={city.lat}
                lon={city.lon}
                key={index}
                handleLoading={setLoading}
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
        <main>
          <CityPicker
            onSelectionChange={onSelectionChange}
            chosenCity={chosenCity}
          />
          <div className="cityCardView">
            <CityCard
              city={cityToView.name}
              lat={cityToView.lat}
              lon={cityToView.lon}
              handleLoading={setLoading}
            />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <p>No data found.</p>
      </main>
    </>
  );
}
