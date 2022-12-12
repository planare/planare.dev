import useSWR from 'swr';
import { Icon } from './icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());
export default function Weather({
  latitute,
  longitude,
}: {
  latitute: number;
  longitude: number;
}): JSX.Element {
  const { data } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&units=imperial&appid=${process.env.NEXT_PUBLIC_OW_API}`,
    fetcher
  );

  if (!data)
    return (
      <span style={{ opacity: 0.35 }}>
        <Icon.Options />
      </span>
    );

  const weatherData = {
    date: new Date(data.dt * 1000).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
    time: new Date(data.dt * 1000).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true,
      minute: 'numeric',
    }),
    description: data.weather[0].description || 'unknown',
    temperature: data.main.temp || 0,
  };

  return (
    <small style={{ opacity: 0.7 }}>
      {weatherData.temperature.toFixed(0)}°F with {weatherData.description} at{' '}
      {weatherData.time} on {weatherData.date}.
    </small>
  );
}
