"use client";
import { useState, useEffect } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [isFinalSeconds, setIsFinalSeconds] = useState(false);
  const [isLastThreeSeconds, setIsLastThreeSeconds] = useState(false);

  useEffect(() => {
    const eventDate = new Date("2025-04-01T22:15:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 2000) { // Start video 2 seconds before the event
        if (!isEventStarted) {
          setIsEventStarted(true);
        }
      }

      if (distance <= 0) {
        clearInterval(timer);
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
  }, [isEventStarted]);

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
          <iframe
            src="https://www.dropbox.com/scl/fi/s8r9j21lfp9fvs3e2b4s3/fireworks.mp4?rlkey=1uz1hjh0gs4771wwr3x4o1uxi&st=hc3opw4u&dl=1"
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
            frameBorder="0"
            allow="autoplay"
            title="Event Video"
          />
        )}
        {!isEventStarted ? (
          <div>
            <h2>Countdown to Nepali New Year 2082!</h2>
            <p className="countdown">{timeLeft}</p>
          </div>
        ) : (
          <h2 className="newYearMessage">🎉 Happy New Year 2082! 🎉</h2>
        )}
      </div>
    </>
  );
};

export default Countdown;
