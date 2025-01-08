import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Home</h2>
      <Link
        href="/coins"
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-purple-300 focus:outline-none flex items-center"
      >
        View Dashboard
        <ArrowRightIcon className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
}
