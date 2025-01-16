import React from "react";

const WeatherForecsat = (props) => {
  var { min, max, desc, date } = props;

  return (
    <div>
      <tbody>
        <tr>
          <div className="tdfor">
          <td>{date}</td>
          <td>
            {max}°C/{min}°C
          </td>
          <td>{desc}</td>
          </div>
        </tr>
      </tbody>
    </div>
  );
};

export default WeatherForecsat;
