import { coordinates } from "../../data/coordinates";

export default function CityPicker() {
  return (
    <div className="dropdown">
      <select>
        <option>All cities</option>
        {coordinates.map((city, index) => {
          return <option key={index}>{Object.keys(city)}</option>;
        })}
      </select>
    </div>
  );
}
