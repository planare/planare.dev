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
    fetched: string;
    temp: number;
    wind: number;
  };
} {
  const { data } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&units=imperial&appid=${process.env.NEXT_PUBLIC_OW_API}`,
    fetcher
  );

  const results = {
    temp: data?.main?.temp?.toFixed(0) || 0,
    description: data?.weather?.[0]?.description || "",
    wind: data?.wind?.speed?.toFixed(0) || 0,

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
