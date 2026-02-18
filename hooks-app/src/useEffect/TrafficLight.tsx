import { useEffect, useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  const [ date, setDate ] = useState<Date>(new Date);
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
      setDate( new Date );
      //console.log( countdown );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === 'red') {
      setLight('green');
      return;
    }

    if (light === 'yellow') {
      setLight('red');
      return;
    }

    if (light === 'green') {
      setLight('yellow');
      return;
    }
  }, [countdown, light]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">
          Semáforo con useEffect
        </h1>

        <h2 className="text-white text-2xl font-thin">
          Hora: { date.toLocaleTimeString() }
        </h2>

        <h2 className="text-white text-2xl font-thin">
          Counter: { countdown }
        </h2>

        <div
          className="
            w-64
            bg-gray-500
            rounded-full
            h-2
          "
        >
          <div
            style={{ width: `${(countdown/5) * 100}%` }}
            className="
              bg-blue-500
              rounded-full
              h-2
              transition-all
              duration-1000
              ease-linear
            "
          >
          </div>
        </div>

        <div
          className={`w-32 h-32 ${
            light === 'red' ? colors[light] : 'bg-gray-500'
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === 'yellow' ? colors[light] : 'bg-gray-500'
          } rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${
            light === 'green' ? colors[light] : 'bg-gray-500'
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
