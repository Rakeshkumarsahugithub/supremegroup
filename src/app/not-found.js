import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#eaf3fa]">
      <Header />
      <main className="flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="text-9xl font-semibold mb-4" style={{ fontFamily: 'Roboto, sans-serif', color: '#0771B8' }}>404</div>
        <div className="text-lg text-[#222] mb-6 font-normal">The page you have requested doesn&apos;t exist.</div>
        <Link href="/">
          <button className="bg-[#4fc3f7] hover:bg-[#29b6f6] text-black px-12 py-4 rounded-full font-semibold text-lg transition cursor-pointer">Go to Homepage</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
} 