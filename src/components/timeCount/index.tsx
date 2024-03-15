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

  

  useEffect(() => {
    // clearInterval(Ref.current);
    const currentDate = moment();

    // Calculate the date 30 days from now
    const futureDate = currentDate.add(30, 'days');

    // Update remaining time every second
    const interval = setInterval(() => {
      const now = moment();
      const difference = futureDate.diff(now);

      // Check if the future date has been reached
      if (difference <= 0) {
        clearInterval(interval);
        setTimer({ days: '00', hours: '00', minutes: '00',seconds:'00' });
      } else {
        const duration = moment.duration(difference);
        setTimer({
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="time-counters">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inr-time-counter">
            <div className="text-center">
                <Image src={Shopify} alt="Shopify"></Image>
              </div> 
              <p>50% off for Product Hunt launch. Special offer ends!</p>
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
