import React from "react";

const WeatherForecsat = (props) => {
  var { min, max, desc,date } = props;
  

  // const d = new Date();
  // let text = d.toString();
  // var date = text.slice(0, 10);

  return (
    <div>
      <tbody>
        <tr>
          <td>{date}</td>
          <td>
            {max}°C/{min}°C
          </td>
          <td>{desc}</td>
        </tr>
      </tbody>
    </div>
  );
};

export default WeatherForecsat;
