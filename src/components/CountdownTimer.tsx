import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
      <p className="text-sm font-semibold text-primary text-center mb-6 uppercase tracking-widest">
        Event Starts In
      </p>
      <div className="flex gap-4">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20" />
              <span className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground relative z-10">
                {String(unit.value).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-muted-foreground mt-3 uppercase tracking-wider font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;