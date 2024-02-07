"use client";

import * as S from "./styles";

import useTimeBoard, { TCode } from "./hooks/useTimeBoard";

import FontDivider from "./FontDivider";
import FontNumber from "./FontNumber";

interface Props {
  title: string;
  code: TCode;
  bg?: string;
}

const TimeBoard = ({ code, title, bg = "" }: Props) => {
  const { year, month, day, hour, min, sec } = useTimeBoard(code);

  return (
    <>
      <S.TimeBoardTitle>{title}</S.TimeBoardTitle>
      <S.TimeBoardBackground>
        <S.TimeBoardContainer $bg={bg}>
          <S.TimeBoardRow>
            <FontNumber number={Math.floor(year / 1000)} />
            <FontNumber number={Math.floor((year % 1000) / 100)} />
            <FontNumber number={Math.floor((year % 100) / 10)} />
            <FontNumber number={Math.floor(year % 10)} />
            <FontDivider isDate />
            <FontNumber number={Math.floor(month / 10)} />
            <FontNumber number={month % 10} />
            <FontDivider isDate />
            <FontNumber number={Math.floor(day / 10)} />
            <FontNumber number={day % 10} />
          </S.TimeBoardRow>
          <S.TimeBoardLine />
          <S.TimeBoardRow>
            <FontNumber number={Math.floor(hour / 10)} />
            <FontNumber number={hour % 10} />
            <FontDivider />
            <FontNumber number={Math.floor(min / 10)} />
            <FontNumber number={min % 10} />
            <FontDivider />
            <FontNumber number={Math.floor(sec / 10)} />
            <FontNumber number={sec % 10} />
          </S.TimeBoardRow>
        </S.TimeBoardContainer>
      </S.TimeBoardBackground>
    </>
  );
};

export default TimeBoard;
