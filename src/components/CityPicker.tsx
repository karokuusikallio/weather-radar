import { coordinates, PickerOptions } from "../../data/coordinates";

interface CityPickerProps {
  chosenCity: PickerOptions;
  handleChange: (city: string) => void;
}

export default function CityPicker(props: CityPickerProps) {
  return (
    <div className="dropdown">
      <select
        value={props.chosenCity}
        onChange={({ target }) => props.handleChange(target.value)}
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
