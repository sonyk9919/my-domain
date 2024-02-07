import * as S from "./styles";

interface Props {
  isDate?: boolean;
}

const FontDivider = ({ isDate = false }: Props) => {
  return <S.FontNumber>{isDate ? "." : ":"}</S.FontNumber>;
};

export default FontDivider;
