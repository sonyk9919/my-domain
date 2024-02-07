"use client";

import * as S from "./styles";

const PixelDivider = () => {
  return (
    <S.PixelDividerContainer>
      {[0, 1, 1, 1, 0, 1, 1, 1, 0].map((v, i) => (
        <S.Pixel key={i} $active={Boolean(v)} />
      ))}
    </S.PixelDividerContainer>
  );
};

export default PixelDivider;
