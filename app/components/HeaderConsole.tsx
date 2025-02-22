"use client";

// Utils
import { useState, useEffect } from "react";

const Timer = () => {
  // Estados para duración y cuenta regresiva
  const [duration, setDuration] = useState({ minutes: 3, seconds: 15 });
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 45 });

  useEffect(() => {
    // Timer para duración
    const durationTimer = setInterval(() => {
      setDuration((prev) => {
        let newSeconds = prev.seconds + 1;
        let newMinutes = prev.minutes;

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes++;
        }

        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    // Timer para cuenta regresiva
    const countdownTimer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(countdownTimer);
          return prev;
        }

        let newMinutes = prev.minutes;
        let newSeconds = prev.seconds - 1;

        if (newSeconds < 0) {
          newMinutes--;
          newSeconds = 59;
        }

        return { minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    // Cleanup de los intervalos
    return () => {
      clearInterval(durationTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <div className="source-header-wrapper">
      <div className="flex flex-row items-center gap-x-[10px]">
        <div className="source-header-text-key">rvm #id :</div>
        <div className="source-pill">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4.5 11H9.5M10 9H4C3.448 9 3 8.552 3 8V4C3 3.448 3.448 3 4 3H10C10.552 3 11 3.448 11 4V8C11 8.552 10.552 9 10 9ZM12 13H2C1.448 13 1 12.552 1 12V2C1 1.448 1.448 1 2 1H12C12.552 1 13 1.448 13 2V12C13 12.552 12.552 13 12 13Z" stroke="#00448F" strokeMiterlimit="10"></path>
          </svg>
          <div className="source-header-text-pill">ibm5282</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6">
        <div className="is-timeline">
          <span className="source-header-text-key">STARTED:</span>
          <span className="source-header-text-value">13:45:00 EST</span>
        </div>
        <div className="sources-header-divider mt-1 w-px h-6 bg-gray-400"></div>
        <div className="is-timeline">
          <span className="source-header-text-key">DURATION:</span>
          <span className="source-header-text-value is-duration-time">
            {duration.minutes}M {duration.seconds}S
          </span>
        </div>
        <div className="sources-header-divider mt-1 w-px h-6 bg-gray-400"></div>
        <div className="is-timeline">
          <span className="source-header-text-key">TIME LEFT:</span>
          <span className="source-header-text-value is-time-left">
            ∼{timeLeft.minutes}M {timeLeft.seconds}S
          </span>
        </div>
      </div>
      <div className="source-green-pill">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6.45998 2.55706C6.29208 2.55706 6.12582 2.59013 5.97071 2.65439C5.81559 2.71864 5.67464 2.81281 5.55592 2.93154C5.4372 3.05026 5.34302 3.1912 5.27877 3.34632C5.21452 3.50144 5.18145 3.6677 5.18145 3.8356C5.18145 4.0035 5.21452 4.16975 5.27877 4.32487C5.34302 4.47999 5.4372 4.62093 5.55592 4.73966C5.67464 4.85838 5.81559 4.95255 5.97071 5.01681C6.12582 5.08106 6.29208 5.11413 6.45998 5.11413C6.62788 5.11413 6.79413 5.08106 6.94925 5.01681C7.10437 4.95255 7.24532 4.85838 7.36404 4.73966C7.48276 4.62093 7.57694 4.47999 7.64119 4.32487C7.70544 4.16975 7.73851 4.0035 7.73851 3.8356C7.73851 3.6677 7.70544 3.50144 7.64119 3.34632C7.57694 3.1912 7.48276 3.05026 7.36404 2.93154C7.24532 2.81281 7.10437 2.71864 6.94925 2.65439C6.79413 2.59013 6.62788 2.55706 6.45998 2.55706Z" fill="#1F2023"></path>
          <path d="M6.45998 2.55706L5.18145 7.67119H7.73851L6.45998 2.55706Z" fill="#1F2023"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.45998 0.852355C5.30884 0.852355 3.05474 1.27466 2.09026 1.52021C1.90153 1.56824 1.77032 1.73677 1.77032 1.93314V4.68795C1.77032 6.44335 2.93807 8.04154 4.19627 9.24209C4.81628 9.83369 5.43802 10.3094 5.90543 10.6374C6.1332 10.7972 6.32338 10.9213 6.45754 11.006C6.59192 10.9194 6.78278 10.7925 7.01151 10.6293C7.47919 10.2955 8.10129 9.81285 8.72166 9.21636C9.98194 8.0046 11.1479 6.4067 11.1479 4.68795V1.93314C11.1479 1.73865 11.0168 1.56904 10.8274 1.52007C9.86256 1.27448 7.61086 0.852355 6.45998 0.852355ZM6.45998 11.5068C6.24741 11.8762 6.24715 11.876 6.24715 11.876L6.24565 11.8752L6.24204 11.8731L6.22937 11.8656C6.21854 11.8593 6.203 11.8501 6.18307 11.8381C6.14319 11.8142 6.0857 11.7791 6.0131 11.7334C5.86795 11.642 5.66213 11.5079 5.41583 11.3351C4.92402 10.99 4.2668 10.4875 3.60786 9.85876C2.30814 8.61859 0.917969 6.80735 0.917969 4.68795V1.93314C0.917969 1.34876 1.31183 0.838817 1.87997 0.694206M6.45998 11.5068L6.67645 11.8739L6.46259 12L6.24715 11.876L6.45998 11.5068ZM1.87997 0.694206C2.864 0.443683 5.20067 0 6.45998 0C7.71933 0 10.0543 0.443699 11.0383 0.694206L11.0393 0.694477C11.6049 0.840009 12.0003 1.34874 12.0003 1.93314V4.68795C12.0003 6.77241 10.6092 8.58393 9.31242 9.83078C8.65427 10.4636 7.99783 10.9725 7.50662 11.3231C7.26062 11.4986 7.05508 11.6351 6.91017 11.7283C6.83769 11.7749 6.7803 11.8107 6.74053 11.8351C6.72064 11.8473 6.70514 11.8567 6.69436 11.8632L6.68176 11.8707L6.67818 11.8729L6.67645 11.8739C6.67645 11.8739 6.67645 11.8739 6.45998 11.5068" fill="#1F2023"></path>
        </svg>
        <div className="source-header-text-value !text-[#1F2023]">Secured</div>
      </div>
    </div>
  );
};

export default Timer;
