import * as S from "./styles";

interface Props {
  number: number;
}

const FontNumber = ({ number }: Props) => {
  return <S.FontNumber>{number}</S.FontNumber>;
};

export default FontNumber;
