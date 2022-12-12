import useSWR from 'swr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());
export default function Weather(
  latitute: number,
  longitude: number,
  units: string,
  apiKey: string
): JSX.Element {
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&units=${units}&appid=${apiKey}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Weather</h1>
      <p>
        Current weather in {data.name} is {data.weather[0].description}.
      </p>
      <p>
        Current temperature is {data.main.temp}°{units === 'metric' ? 'C' : 'F'}.
      </p>
    </div>
  );
}
