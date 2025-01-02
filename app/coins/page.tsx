export default async function CoinsPage() {
  const response = await fetch("http://localhost:3000/api/coins", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch coins data");
  }

  const coins = await response.json();

  return (
    <div>
      <h1>All Coins</h1>
      <pre>{JSON.stringify(coins, null, 2)}</pre>
    </div>
  );
}
