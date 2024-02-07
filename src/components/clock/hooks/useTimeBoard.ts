import { useEffect, useRef, useState } from "react";

export type TCode = "Korea" | "Canada";

const getDiff = (code: TCode): number => {
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const CANADA_TIME_DIFF = -(7 * 60 * 60 * 1000);

  switch (code) {
    case "Korea":
      return KR_TIME_DIFF;
    case "Canada":
      return CANADA_TIME_DIFF;
  }
};

const getUTCDateByCode = (code: TCode): number[] => {
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const convertedDate = new Date(utc + getDiff(code));

  return [
    convertedDate.getFullYear(),
    convertedDate.getMonth() + 1,
    convertedDate.getDate(),
    convertedDate.getHours(),
    convertedDate.getMinutes(),
    convertedDate.getSeconds(),
  ];
};

const useTimeBoard = (code: TCode) => {
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState(() => getUTCDateByCode(code));

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime(getUTCDateByCode(code));
    }, 1000);

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [code]);

  return {
    year: time[0],
    month: time[1],
    day: time[2],
    hour: time[3],
    min: time[4],
    sec: time[5],
  };
};

export default useTimeBoard;
