'use client';

// https://blog.noelcserepy.com/how-i-created-a-typing-text-animation-with-framer-motion
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export interface IRedoAnimatedTextProps {
  delay: number;
  textColor: string;
}

export interface AnimatedTextTypingProps {
  delay: number;
  baseText?: string;
  addStyle?: string;
  textColor: string;
}

export default function AnimatedTextTyping({
  delay,
  baseText = '',
  addStyle,
  textColor,
}: AnimatedTextTypingProps) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true);
      },
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={`${addStyle}`}>
      <motion.span>{displayText}</motion.span>
      {/* add space between base text and animated text
      {done && (
        <>
          <br /> <br />
        </>
      )} */}
      <RedoAnimatedText delay={delay + 1} textColor={`${textColor}`} />
      <CursorBlinker />
    </span>
  );
}

function RedoAnimatedText({ delay, textColor }: IRedoAnimatedTextProps) {
  const textIndex = useMotionValue(0);
  const texts = ['Hello!', 'Bão?', 'Hey!', 'Ola!'];
  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className={`inline ${textColor}`}>{displayText}</motion.span>
  );
}

// Cursor Blinker
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate='blinking'
      className='inline-block h-5 w-[1px] translate-y-1 bg-slate-900 dark:bg-slate-100'
    />
  );
}
