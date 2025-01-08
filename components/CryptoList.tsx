"use client";
import CryptoListItem from "./CryptoListItem";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CryptoList() {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState<any[]>([]);

  async function fetchCoinData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch("http://localhost:3000/api/coins", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch coins data");
    }

    const coins = await response.json();

    setCoinData(coins as any[]);
    setLoading(false);
  }

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading)
    return (
      <div className="grid grid-cols-5 gap-6 bg-gray-900">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md bg-gray-800 h-[112px] overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-800 via-gray-700/80 to-gray-800  animate-shimmer  w-[200%]"></div>
          </div>
        ))}
      </div>
    );

  return (
    <div className="grid grid-cols-5 gap-6 bg-gray-900">
      {coinData.map((coin) => {
        return (
          <Link key={coin.id} href={`/coins/${coin.id}`} passHref>
            <CryptoListItem coin={coin} />
          </Link>
        );
      })}
    </div>
  );
}

/*


*/