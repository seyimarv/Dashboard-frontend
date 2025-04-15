
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  endValue: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function AnimatedCounter({
  endValue,
  prefix = "",
  suffix = "",
  duration = 1000,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    
    const startValue = 0;
    const startTimestamp = performance.now();
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const currentCount = progress * (endValue - startValue) + startValue;
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };
    
    animationFrameId = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [endValue, duration]);
  
  const formattedValue = count.toFixed(decimals);
  
  return (
    <span>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
}
