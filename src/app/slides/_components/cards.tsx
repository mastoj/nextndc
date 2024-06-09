"use client";
import React, { useEffect } from "react";

type Props = {};

const getViewportSize = () => {
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;
  return { maxX, maxY };
};

const animations = [
  "animate-bounce",
  "animate-spin-slow",
  "animate-pulse",
  "animate-wiggle",
  "animate-accordion",
];

const smileys = ["😊", " 😎", " 🤓", " 🤩", " 🥳", "🫠", "🍾"];

const Card = ({ index }: { index: number }) => {
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];
  const { maxX, maxY } = getViewportSize();
  const { randomX, randomY } = {
    randomX: Math.random() * (maxX - 128),
    randomY: Math.random() * (maxY - 160),
  };
  const smiley = smileys[Math.floor(Math.random() * smileys.length)];
  return (
    <div
      className={`absolute w-32 h-40 bg-green-400 rounded-lg shadow-lg flex justify-center items-center text-3xl ${randomAnimation}`}
      style={{ top: randomY, left: randomX, zIndex: index }}
    >
      {smiley}
    </div>
  );
};

const Cards = (props: Props) => {
  const [cards, setCards] = React.useState<React.ReactNode[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCards([...cards, <Card key={cards.length} index={cards.length} />]);
    }, 700);
    return () => clearInterval(interval);
  }, [cards]);
  return <>{cards}</>;
};

export default Cards;
