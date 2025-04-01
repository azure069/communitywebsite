import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import styled, { keyframes } from "styled-components";

// Styled Components
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const bloopAnimation = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.3); }
`;

const CountdownContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.8em;
  font-weight: 700;
  margin-bottom: 15px;
`;

const CountdownText = styled.p<{ isBig?: boolean }>`
  font-size: ${(props) => (props.isBig ? "48px" : "3.5em")};
  font-weight: bold;
  transition: transform 0.3s ease-in-out, font-size 0.3s ease-in-out;
  ${(props) => props.isBig && `animation: ${bloopAnimation} 0.5s infinite alternate ease-in-out;`}
`;

const BackButton = styled.a`
  background: black;
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  display: inline-block;
  min-width: 120px;
  &:hover {
    background: white;
    color: black;
  }
`;

const NewYearMessage = styled.p`
  font-size: 3em;
  font-weight: bold;
  color: white;
  animation: ${fadeIn} 2s ease-in-out, ${bloopAnimation} 0.5s infinite alternate ease-in-out;
  text-shadow: 5px 5px 15px rgba(255, 255, 0, 0.8);
  text-align: center;
  white-space: nowrap;
`;

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [countdownOnly, setCountdownOnly] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("2025-04-14T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance > 15000) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else if (distance > 0) {
        setCountdownOnly(true);
        setTimeLeft(`${Math.floor(distance / 1000)}`);
      } else {
        setTimeLeft("");
        setShowMessage(true);
        startConfetti();
        clearInterval(timer);
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to avoid delay

    return () => clearInterval(timer);
  }, []);

  const startConfetti = () => {
    const duration = 30 * 1000;
    const end = Date.now() + duration;

    const randomConfetti = () => {
      confetti({
        particleCount: 5,
        spread: 160,
        startVelocity: 30,
        origin: { x: Math.random() > 0.5 ? 0 : 1, y: Math.random() * 0.5 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(randomConfetti);
      }
    };

    randomConfetti();
  };

  return (
    <CountdownContainer>
      {!showMessage ? (
        <>
          {!countdownOnly && <Title>Countdown to Nepali New Year 2082!</Title>}
          <CountdownText isBig={countdownOnly}>{timeLeft}</CountdownText>
          {!countdownOnly && <BackButton href="/">Back to Home</BackButton>}
        </>
      ) : (
        <NewYearMessage>🎉 Happy New Year 2082! 🎉</NewYearMessage>
      )}
    </CountdownContainer>
  );
};

export default Countdown;
