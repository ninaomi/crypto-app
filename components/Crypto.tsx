"use client";
import { useState, useEffect } from "react";
import CryptoListItem from "./CryptoListItem";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
interface CryptoProps {
  coin_id: string;
}
interface CoinDetail {
  id: string;
  image: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  [key: string]: string | number; // Allow additional properties
}
export default function Crypto({ coin_id }: CryptoProps) {
  const [loading, setLoading] = useState(true);
  const [coinDeets, setCoinDeets] = useState<CoinDetail | null>(null);

  async function fetchCoinDeets() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(`/api/coins/${coin_id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data for coin: ${coin_id}`);
    }

    const coin = await response.json();

    setCoinDeets(coin );
    setLoading(false);
  }
  useEffect(() => {
    fetchCoinDeets();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`relative rounded-lg shadow-md bg-gray-800 ${
              index > 0 ? "h-[56px]" : "h-[112px]"
            } overflow-hidden`}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-800 via-gray-700/80 to-gray-800 animate-shimmer w-[200%]"></div>
          </div>
        ))}
      </div>
    );

  function setLoadingTrue() {
    setLoading(true);
    fetchCoinDeets();
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center rounded-lg shadow-md bg-gray-800">
       
        {coinDeets && <CryptoListItem coin={coinDeets} disableHover={true} />}
        <button
          onClick={setLoadingTrue}
          className="ml-auto mr-7 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-purple-300 focus:outline-none flex items-center gap-2"
        >
          Refresh <ArrowPathRoundedSquareIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col gap-4 ">
      {Object.entries(coinDeets || {})
          .splice(6)
          .map(([key, value]) => (
            <div
              key={key}
              className="rounded-lg shadow-md bg-gray-800 px-4 py-4 grid grid-cols-7 items-center "
            >
              <div className="text-white   font-semibold capitalize">
                {key.replace(/_/g, " ")}
              </div>
              <div className="text-gray-100 ">
                ${((value as number) || 0).toLocaleString()}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
