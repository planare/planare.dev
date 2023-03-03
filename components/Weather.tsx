import useSWR from "swr";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());
export default function useWeather({
  latitute,
  longitude,
}: {
  latitute: number;
  longitude: number;
}): {
  results: {
    description: string;
    emoji: string;
    fetched: string;
    temp: number;
    wind: number;
  };
} {
  const { data } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&units=imperial&appid=${process.env.NEXT_PUBLIC_OW_API}`,
    fetcher
  );

  const selectEmoji = (icon: string): string => {
    switch (icon) {
      case "01d":
        return "☀️";
      case "01n":
        return "🌙";
      case "02d":
        return "🌤";
      case "02n":
        return "🌤";
      case "03d":
        return "🌥";
      case "03n":
        return "🌥";
      case "04d":
        return "☁️";
      case "04n":
        return "☁️";
      case "09d":
        return "🌧";
      case "09n":
        return "🌧";
      case "10d":
        return "🌦";
      case "10n":
        return "🌦";
      case "11d":
        return "⛈";
      case "11n":
        return "⛈";
      case "13d":
        return "❄️";
      case "13n":
        return "❄️";
      case "50d":
        return "🌫";
      case "50n":
        return "🌫";
      default:
        return "";
    }
  };

  const results = {
    temp: data?.main?.temp?.toFixed(0) || 0,
    description: data?.weather?.[0]?.description || "",
    wind: data?.wind?.speed?.toFixed(0) || 0,
    emoji: selectEmoji(data?.weather?.[0]?.icon || ""),

    fetched: new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/New_York",
    }),
  };

  return {
    results,
  };
}
