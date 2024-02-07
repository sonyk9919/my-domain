import COLOR from "@/styles/color";
import styled from "@emotion/styled";

export const PixelDividerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TimeBoardTitle = styled.p`
  font-size: 48px;
  font-weight: 700;
`;
export const TimeBoardRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;
export const TimeBoardLine = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary400};
`;
export const TimeBoardBackground = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  border-top: 5px solid ${({ theme }) => theme.color.grey600};
  border-left: 4px solid ${({ theme }) => theme.color.grey900};
  border-right: 4px solid ${({ theme }) => theme.color.grey900};
  border-bottom: 5px solid ${({ theme }) => theme.color.grey600};
`;
export const TimeBoardContainer = styled.div<{ $bg?: string }>`
  padding: 12px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  max-width: 380px;
  background-color: ${({ $bg }) => ($bg ? $bg : "#B4D4FF")};
  border-radius: 4px;
`;
export const PixelNumberContainer = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
  }
`;
export const Pixel = styled.div<{ $active: boolean; $color?: string }>`
  width: 6px;
  height: 6px;
  background-color: ${({ theme, $active, $color }) =>
    $active ? ($color ? $color : COLOR.grey900) : "inherit"};
  /* border: 1px solid ${({ theme }) => theme.color.stroke}; */
  border-radius: 1px;
`;
export const FontNumber = styled.p`
  font-size: 48px;
`;
