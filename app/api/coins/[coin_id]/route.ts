import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const coinId = url.pathname.split("/").pop();

    if (!coinId) {
      return NextResponse.json(
        { error: "Coin ID is required" },
        { status: 400 }
      );
    }

    const coinJson = {
      id: coinId,
      symbol: null,
      name: null,
      image: null,
      current_price: null,
      price_change_percentage_24h: null,
      market_cap: null,
      fully_diluted_valuation: null,
      total_volume: null,
      max_supply: null,
    };

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coin data");
    }

    const coinData = await response.json();

    coinJson.symbol = coinData.symbol;
    coinJson.name = coinData.name;
    coinJson.image = coinData.image.small;
    coinJson.market_cap = coinData.market_data?.market_cap?.usd ?? null;
    coinJson.fully_diluted_valuation =
      coinData.market_data?.fully_diluted_valuation?.usd ?? null;
    coinJson.max_supply = coinData.market_data.max_supply ?? null;
    coinJson.current_price = coinData.market_data?.current_price?.usd ?? null;
    coinJson.price_change_percentage_24h =
      coinData.market_data?.price_change_percentage_24h ?? null;
    coinJson.total_volume = coinData.market_data?.total_volume?.usd ?? null;

    return NextResponse.json(coinJson);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
