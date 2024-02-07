"use client";

import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}
const PageContainer = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  padding: 24px 12px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: column;
`;

export default PageContainer;
