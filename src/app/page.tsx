"use client";

import { useLayoutEffect, useState } from "react";

import PageContainer from "./components/PageContainer";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const TimeBoard = dynamic(() => import("@/components/clock/TimeBoard"), {
  ssr: false,
});

export default function Home() {
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    setPassword(localStorage.getItem("password") || "");
  }, []);

  return (
    <PageContainer>
      {password === process.env.NEXT_PUBLIC_PASSWORD ||
      input === process.env.NEXT_PUBLIC_PASSWORD ? (
        <>
          <TimeBoard title="CANADA🇨🇦" code="Canada" />
          <TimeBoard title="KOREA🇰🇷" code="Korea" />
        </>
      ) : (
        <StyledLoginForm>
          <p>패스워드 입력</p>
          <input
            value={input}
            maxLength={10}
            onChange={(e) => {
              setInput(() => {
                if (e.target.value === process.env.NEXT_PUBLIC_PASSWORD) {
                  localStorage.setItem("password", e.target.value);
                }
                return e.target.value;
              });
            }}
          />
        </StyledLoginForm>
      )}
    </PageContainer>
  );
}

const StyledLoginForm = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 48px;
  }
  input {
    font-size: 24px;
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.color.stroke};
  }
`;
