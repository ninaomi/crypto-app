type Params = {
  params: {
    id: string;
  };
};

export default async function CoinPage({ params }: Params) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/coins/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data for coin: ${id}`);
  }

  const coin = await response.json();

  return (
    <div>
      <h1>Coin Details: {id}</h1>
      <pre>{JSON.stringify(coin, null, 2)}</pre>
    </div>
  );
}
