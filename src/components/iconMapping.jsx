import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
  WiCloud,
  WiDayCloudy,
  WiNightClear,
  WiNightCloudy,
} from "react-icons/wi";
import { FaSmog, FaCloudShowersHeavy } from "react-icons/fa";

export const getWeatherIcon = (iconCode, size = "1.8em") => {
  const iconMap = {
    // Clear
    "01d": <WiDaySunny size={size} color="#FFC300" />,
    "01n": <WiNightClear size={size} color="#C7D0DA" />,

    // Few Clouds
    "02d": <WiDayCloudy size={size} color="#D9E1EA" />,
    "02n": <WiNightCloudy size={size} color="#C7D0DA" />,

    // Scattered Clouds
    "03d": <WiCloud size={size} color="#D0D7E0" />,
    "03n": <WiCloud size={size} color="#C7CED6" />,

    // Broken Clouds
    "04d": <WiCloudy size={size} color="#B8C2CC" />,
    "04n": <WiCloudy size={size} color="#AEB6BF" />,

    // Shower Rain
    "09d": <WiRain size={size} color="#5DADEC" />,
    "09n": <WiRain size={size} color="#74B9FF" />,

    // Rain
    "10d": <WiRain size={size} color="#4FA3E3" />,
    "10n": <WiRain size={size} color="#6FB1FF" />,

    // Thunderstorm
    "11d": <WiThunderstorm size={size} color="#F4C542" />,
    "11n": <WiThunderstorm size={size} color="#F7D86A" />,

    // Snow
    "13d": <WiSnow size={size} color="#FFFFFF" />,
    "13n": <WiSnow size={size} color="#E8EFF7" />,

    // Fog / Mist / Haze
    "50d": <WiFog size={size} color="#C4CCD4" />,
    "50n": <WiFog size={size} color="#D0D6DD" />,

    default: <WiCloud size={size} color="#BCC5CF" />,
  };

  return iconMap[iconCode] || iconMap["default"];
};

export const getConditionText = (conditionMain) => {
  switch (conditionMain) {
    case "Clear":
      return "Sunny";
    case "Clouds":
      return "Cloudy";
    case "Rain":
      return "Rainy";
    case "Drizzle":
      return "Light Rain";
    case "Thunderstorm":
      return "Storm";
    case "Snow":
      return "Snowy";
    case "Mist":
    case "Fog":
    case "Haze":
    case "Smoke":
    case "Dust":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      return "Hazy";
    default:
      return conditionMain;
  }
};
