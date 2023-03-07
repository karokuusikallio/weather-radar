export default function ForecastCard() {
  return (
    <div className="forecastCard">
      <div className="infoOnWhite">
        <p>15:00</p>
        <i>Icon</i>
        <p>
          <span>0</span>°C
        </p>
      </div>
      <div className="infoOnBlue smallInfo">
        <p>21m/s</p>
        <p>5%</p>
        <p>1mm</p>
      </div>
    </div>
  );
}
