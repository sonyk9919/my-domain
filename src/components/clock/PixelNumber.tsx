"use client";

import * as S from "./styles";

import { NUMBER_TO_INDEX } from "./constants";

interface Props {
  number: number;
}

const getIndex = (number: number) => NUMBER_TO_INDEX[number];

const PixelNumber = ({ number }: Props) => {
  return (
    <S.PixelNumberContainer>
      {getIndex(number).map((row, index) => (
        <div
          className={`row ${number} ${index}`}
          key={`row ${number} ${index}`}
        >
          {row.map((col, index) => (
            <S.Pixel key={`col ${number} ${index}`} $active={Boolean(col)} />
          ))}
        </div>
      ))}
    </S.PixelNumberContainer>
  );
};

export default PixelNumber;
