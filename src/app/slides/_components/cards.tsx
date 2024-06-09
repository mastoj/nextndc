"use client";
import React, { useEffect } from "react";

type Props = {};

const getViewportSize = () => {
  const maxX = window.innerWidth;
  const maxY = window.innerHeight;
  return { maxX, maxY };
};

const Card = ({ index }: { index: number }) => {
  const { maxX, maxY } = getViewportSize();
  const { randomX, randomY } = {
    randomX: Math.random() * maxX,
    randomY: Math.random() * maxY,
  };
  return (
    <div
      className="absolute w-32 h-40 bg-green-400 rounded-lg shadow-lg animate-bounce"
      style={{ top: randomY, left: randomX, zIndex: index }}
    >
      &nbsp;
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
