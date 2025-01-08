import Crypto from "../../../components/Crypto";


export default async function CoinPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
   

  return (
    <div className="flex flex-col text-white min-h-screen p-6 bg-gray-900">
      <Crypto coin_id={id} />
    </div>
  );
}
