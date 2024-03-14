import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import moment from "moment";
import Image from "next/image";
import Shopify from "../../assets/images/shopify-logo.png";

function TimeCount() {
  const Ref: any = useRef<number | null>(null);

  // The state for our timer
  const [timer, setTimer] = useState<any>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const startTimer = () => {
    const endTime = moment().endOf("month");

    const updateTimer = () => {
      const now = moment();
      const duration = moment.duration(endTime.diff(now));
      const days = duration.days().toString().padStart(2, "0");
      const hours = duration.hours().toString().padStart(2, "0");
      const minutes = duration.minutes().toString().padStart(2, "0");
      const seconds = duration.seconds().toString().padStart(2, "0");
      setTimer({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateTimer(); // Update timer immediately
    const id = setInterval(updateTimer, 1000);
    Ref.current = id;

    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  };

  useEffect(() => {
    // clearInterval(Ref.current);

    return startTimer();
  }, []);

  const onClickReset = () => {
    clearInterval(Ref.current);
    startTimer();
  };

  return (
    <section className="time-counters">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inr-time-counter">
            <div className="text-center">
                <Image src={Shopify} alt="Shopify"></Image>
              </div>
              <p>50% off for all Shopify websites. Special offer ends!</p>
              <h3>
                <span>
                  <strong>{timer["days"]} :</strong> Days
                </span>
                <span>
                  <strong>{timer["hours"]} :</strong> Hours
                </span>
                <span>
                  <strong>{timer["minutes"]} :</strong> Minutes
                </span>
                <span>
                  <strong>{timer["seconds"]}</strong> seconds
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TimeCount;
