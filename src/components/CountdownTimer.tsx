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
    <div className="relative w-full max-w-lg">
      {/* Countdown Card with Glass Effect */}
      <motion.div 
        className="relative bg-card/90 backdrop-blur-xl p-4 lg:p-6 rounded-xl border-2 border-primary/20 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.95), hsl(221 83% 53% / 0.05))',
          boxShadow: '0 10px 30px hsl(221 83% 53% / 0.15), 0 0 40px hsl(221 83% 53% / 0.08)'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.p 
          className="text-[10px] font-bold text-primary text-center mb-4 uppercase tracking-widest"
          style={{
            background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Event Starts In
        </motion.p>
        
        <div className="flex gap-2 lg:gap-3 justify-center">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: index * 0.1, 
                type: "spring", 
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center shadow-md overflow-hidden"
                style={{
                  background: index === 0 
                    ? 'linear-gradient(135deg, hsl(221 83% 53%), hsl(262 83% 58%))'
                    : index === 1
                    ? 'linear-gradient(135deg, hsl(173 80% 40%), hsl(16 85% 57%))'
                    : index === 2
                    ? 'linear-gradient(135deg, hsl(16 85% 57%), hsl(330 81% 60%))'
                    : 'linear-gradient(135deg, hsl(262 83% 58%), hsl(330 81% 60%))',
                  boxShadow: `0 6px 15px hsl(${index === 0 ? '221 83% 53%' : index === 1 ? '173 80% 40%' : index === 2 ? '16 85% 57%' : '262 83% 58%'} / 0.25)`
                }}
                animate={{ 
                  boxShadow: [
                    `0 6px 15px hsl(${index === 0 ? '221 83% 53%' : index === 1 ? '173 80% 40%' : index === 2 ? '16 85% 57%' : '262 83% 58%'} / 0.25)`,
                    `0 8px 20px hsl(${index === 0 ? '221 83% 53%' : index === 1 ? '173 80% 40%' : index === 2 ? '16 85% 57%' : '262 83% 58%'} / 0.4)`,
                    `0 6px 15px hsl(${index === 0 ? '221 83% 53%' : index === 1 ? '173 80% 40%' : index === 2 ? '16 85% 57%' : '262 83% 58%'} / 0.25)`
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30" />
                <motion.span 
                  className="font-display text-lg lg:text-xl font-bold text-white relative z-10 drop-shadow-sm"
                  key={unit.value}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {String(unit.value).padStart(2, "0")}
                </motion.span>
              </motion.div>
              <motion.span 
                className="text-[10px] text-muted-foreground mt-1.5 uppercase tracking-wider font-semibold"
                style={{
                  color: index === 0 
                    ? 'hsl(221 83% 53%)'
                    : index === 1
                    ? 'hsl(173 80% 40%)'
                    : index === 2
                    ? 'hsl(16 85% 57%)'
                    : 'hsl(262 83% 58%)'
                }}
              >
                {unit.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CountdownTimer;