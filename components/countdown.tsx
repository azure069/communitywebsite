"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-04-14T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setIsEventStarted(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
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
          background: rgba(0, 0, 0, 0.6);
          color: white;
          text-align: center;
          padding: 40px;
          border-radius: 12px;
        }

        .countdown {
          font-size: 3em;
          font-weight: bold;
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
        <a href="/" className="backBtn">Back to Home</a>
      </div>
    </>
  );
};

export default Countdown;
