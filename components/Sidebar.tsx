import { HomeIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="bg-gray-800  text-white w-16 flex flex-col items-center py-4">
      <Link
        href="/"
        className="mb-6 rounded p-3 bg-gray-800 hover:bg-gray-700 focus:outline-none"
      >
        <HomeIcon className="w-8 h-8" />
      </Link>

      <Link
        href="/coins"
        className="p-3 rounded bg-gray-800 hover:bg-gray-700 focus:outline-none"
      >
        <Squares2X2Icon className="w-8 h-8" />
      </Link>
    </aside>
  );
}
