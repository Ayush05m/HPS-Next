'use client'
import { useState, useEffect, useRef } from 'react';

const NumberAnimation = ({ targetNumber, className }) => {
  const [number, setNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);


  useEffect(() => {
    if (isVisible && !animationComplete) {
      const duration = 15;
      const step = (targetNumber - number) / duration;
      let currentNumber = number;

      const intervalId = setInterval(() => {
        currentNumber += step;
        setNumber(Math.round(currentNumber));

        if (currentNumber >= targetNumber) {
          clearInterval(intervalId);
          setAnimationComplete(true);
        }
      }, 16);

      return () => clearInterval(intervalId);
    }
  }, [isVisible, number, targetNumber, animationComplete]);

  return (
    <div className="number-animation flex justify-center items-center font-bold" ref={animationRef}>
      <span>{Math.round(number)}</span>
      {animationComplete && '+'}
    </div>
  );
};

export default NumberAnimation;

NumberAnimation.defaultProps = {
  targetNumber: 0,
  className: '',
};