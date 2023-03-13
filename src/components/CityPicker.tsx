import { coordinates, PickerOptions } from "../../data/coordinates";
import { ChangeEvent } from "react";

interface CityPickerProps {
  chosenCity: PickerOptions;
  onSelectionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function CityPicker(props: CityPickerProps) {
  return (
    <div className="dropdown">
      <select
        value={props.chosenCity}
        onChange={props.onSelectionChange}
        id="cityPicker"
      >
        <option value={"All cities"}>All cities</option>
        {coordinates.map((city, index) => {
          return (
            <option key={index} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
