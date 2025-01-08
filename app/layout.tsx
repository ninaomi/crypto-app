import "./globals.css";
import { Header } from "../components/Header"; // Import the Header component
import { Sidebar } from "../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className=" flex h-full">
          <Sidebar />

          <div className="bg-gray-900  flex-1 flex flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
