"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [isFinalSeconds, setIsFinalSeconds] = useState(false);
  const [isLastThreeSeconds, setIsLastThreeSeconds] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-04-01T20:10:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsEventStarted(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 300000);
      } else {
        const secondsLeft = Math.floor(distance / 1000);
        
        if (secondsLeft <= 3) {
          setIsLastThreeSeconds(true);
        } else {
          setIsLastThreeSeconds(false);
        }
        
        if (secondsLeft <= 15) {
          setIsFinalSeconds(true);
          setTimeLeft(`${secondsLeft}`);
        } else {
          setIsFinalSeconds(false);
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
          setTimeLeft(`${minutes}m ${seconds}s`);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti numberOfPieces={500} gravity={0.3} recycle={false} />} 
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: ${isEventStarted ? "url('/newyear-bg.jpg') no-repeat center center/cover" : "rgba(0, 0, 0, 0.6)"};
          color: white;
          text-align: center;
          padding: 40px;
          border-radius: 12px;
          transition: background 1s ease-in-out;
        }

        .countdown {
          font-size: ${isLastThreeSeconds ? "10em" : isFinalSeconds ? "5em" : "3em"};
          font-weight: bold;
          ${isFinalSeconds ? "animation: blink 1s steps(1) infinite;" : ""}
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .backBtn {
          background: #000;
          color: #fff;
          padding: 12px 25px;
          border-radius: 50px;
          text-decoration: none;
          margin-top: 20px;
          display: inline-block;
        }

        .backBtn:hover {
          background: #fff;
          color: #000;
        }

        .newYearMessage {
          font-size: 3em;
          font-weight: bold;
          animation: fadeIn 2s ease-in-out, pulse 1s infinite alternate;
          text-shadow: 5px 5px 15px rgba(255, 255, 0, 0.8);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulse {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
      <div className="container">
        {isEventStarted ? (
          <h2 className="newYearMessage">🎉 Happy New Year 2082! 🎉</h2>
        ) : (
          <>
            <h2>Countdown to Nepali New Year 2082!</h2>
            <p className="countdown">{timeLeft}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Countdown;
