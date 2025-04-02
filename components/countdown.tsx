"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [isFinalSeconds, setIsFinalSeconds] = useState(false);
  const [isLastThreeSeconds, setIsLastThreeSeconds] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-04-01T21:09:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsEventStarted(true);
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

          let timeString = "";
          if (days > 1) {
            timeString += `${days}d `;
          }
          if (days > 0 && hours > 0) {
            timeString += `${hours}h `;
          } else if (hours > 0) {
            timeString += `${hours}h `;
          }
          if (minutes > 0) {
            timeString += `${minutes}m `;
          }
          if (seconds > 0) {
            timeString += `${seconds}s`;
          }

          setTimeLeft(timeString.trim());
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: white;
          text-align: center;
          padding: 40px;
          border-radius: 12px;
          transition: background 1s ease-in-out;
          position: relative;
        }

        .backgroundVideo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
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
        {isEventStarted && (
          <video autoPlay loop muted className="backgroundVideo">
            <source src="https://drive.google.com/uc?id=1XJ2m-S4BTmWK8SiMN311-BNEIAmdLp0W" type="video/mp4" />
          </video>
        )}
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
