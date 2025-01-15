import React from "react";

const HourlyForecast = (props) => {
  let { time, temp, wind } = props;
  return (
    <tbody>
      <tr>
        <td>{time}</td>
        <td>{temp}</td>
        <td>{wind}</td>
      </tr>
    </tbody>
  );
};

export default HourlyForecast;
