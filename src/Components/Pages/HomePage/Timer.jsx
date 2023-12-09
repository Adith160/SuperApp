import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import up from '../../Images/up.png';
import down from '../../Images/down.png';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);

  const adjustTime = (setter, value, maxValue) => {
    if (value === maxValue - 1 && setter === setHours) {
      setter(0);
    } else if (value === maxValue - 1 && setter === setMinutes) {
      setter(0);
    } else if (value === 59 && setter === setSeconds) {
      setter(0);
    } else {
      setter((prev) => prev + 1);
    }
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const remainingHours = Math.floor(totalMinutes / 60);
    const remainingMinutes = totalMinutes % 60;

    return `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
  }

  const increaseSecond = () => adjustTime(setSeconds, seconds, 60);
  const increaseMinute = () => adjustTime(setMinutes, minutes, 60);
  const increaseHour = () => adjustTime(setHours, hours, 24);

  const decreaseSecond = () => setSeconds((prev) => (prev === 0 ? 59 : prev - 1));
  const decreaseMinute = () => setMinutes((prev) => (prev === 0 ? 59 : prev - 1));
  const decreaseHour = () => setHours((prev) => (prev === 0 ? 23 : prev - 1));

  return (
    <div
      style={{
        width: "60%", 
        height: "1%", 
        background: "#1E2343",
        position: "absolute",
        borderRadius: "2vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        bottom: "28vh"
      }}
    >
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          size={120} 
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "0.8rem" }}> 
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: "50%", textAlign: "center" }}>
        <div
          style={{
            color: "#949494",
            display: "flex",
            fontSize: "1rem", // Decreased font size
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ textAlign: "center", padding: "0.3vh" }}> {/* Decreased padding */}
            <p>Hours</p>
            <img
              alt="Increase hours"
              style={{ width: "15%", height: "15%", cursor: "pointer" }} // Decreased width and height
              onClick={increaseHour}
              src={up}
            />
            <p>{hours}</p>
            <img
              alt="Decrease hours"
              style={{ width: "12%", height: "12%", cursor: "pointer" }} // Decreased width and height
              onClick={decreaseHour}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "0.3vh" }}> {/* Decreased padding */}
            <p>Minutes</p>
            <img
              alt="Increase minutes"
              style={{ width: "12%", height: "12%", cursor: "pointer" }} // Decreased width and height
              onClick={increaseMinute}
              src={up}
            />
            <p>{minutes}</p>
            <img
              alt="Decrease minutes"
              style={{ width: "12%", height: "12%", cursor: "pointer" }} // Decreased width and height
              onClick={decreaseMinute}
              src={down}
            />
          </div>
          <div style={{ textAlign: "center", padding: "0.3vh" }}> {/* Decreased padding */}
            <p>Seconds</p>
            <img
              alt="Increase seconds"
              style={{ width: "12%", height: "12%", cursor: "pointer" }} // Decreased width and height
              onClick={increaseSecond}
              src={up}
            />
            <p>{seconds}</p>
            <img
              alt="Decrease seconds"
              style={{ width: "12%", height: "12%", cursor: "pointer" }} // Decreased width and height
              onClick={decreaseSecond}
              src={down}
            />
          </div>
        </div>
        <div
          onClick={() => setPlaying((prev) => !prev)}
          style={{
            cursor: "pointer",
            marginLeft: "10vh",
            marginTop: "1vh",
            height: "5vh",
            width: "20vw",
            backgroundColor: "#FF6A6A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4vh"
          }}
        >
          {playing ? <p>Pause</p> : <p>Start</p>}
        </div>
      </div>
    </div>
  );
};

export default Timer;
