import Crypto from "../../../components/Crypto";

type Params = {
  params: {
    id: string;
  };
};

export default async function CoinPage({ params }: Params) {
  const { id } = await params;

  return (
    <div className="flex flex-col text-white min-h-screen p-6 bg-gray-900">
      <Crypto coin_id={id} />
    </div>
  );
}
