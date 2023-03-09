export const coordinates = [
  {
    name: "Espoo",
    lat: 60.25,
    lon: 24.6667,
  },
  {
    name: "Jyväskylä",
    lat: 62.2415,
    lon: 25.7209,
  },
  {
    name: "Kuopio",
    lat: 62.8924,
    lon: 27.677,
  },
  {
    name: "Tampere",
    lat: 61.4991,
    lon: 23.7871,
  },
];

type cities = typeof coordinates[number]["name"];
export type PickerOptions = "All cities" | cities;
