import Link from "next/link";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

interface CryptoListItemProps {
  coin: {
    id: string;
    image: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
  };
  disableHover?: boolean;
}

const CryptoListItem: React.FC<CryptoListItemProps> = ({
  coin,
  disableHover,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 p-6 rounded-lg  bg-gray-800 ${
        disableHover
          ? ""
          : "shadow-md hover:bg-gray-700 hover:scale-105 active:bg-gray-600 transition-transform duration-200"
      }`}
    >
      <div className="flex  flex-row  items-center gap-2">
        <img src={coin.image} className=" w-4 h-4 " />
        <p className="text-xl font-bold ">{coin.name}</p>
      </div>

      <div className="flex flex-row items-center gap-3">
        <p className="text-xl font-semibold">
          $
          {coin.current_price.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>

        <div className=" flex items-center">
          {coin.price_change_percentage_24h > 0 ? (
            <ArrowTrendingUpIcon className="w-4 h-4 text-emerald-500" />
          ) : (
            <ArrowTrendingDownIcon className="w-4 h-4 text-rose-500" />
          )}

          <p
            className={`text-sm font-medium ml-1 ${
              coin.price_change_percentage_24h > 0
                ? "text-emerald-500"
                : "text-rose-500"
            }`}
          >
            {coin.price_change_percentage_24h
              .toFixed(2)
              .toString()
              .replace("-", "")}
            %
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoListItem;
