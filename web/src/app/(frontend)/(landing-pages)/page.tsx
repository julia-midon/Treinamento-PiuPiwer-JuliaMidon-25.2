import LandingPagesNav from "@/components/base/nav/InitialNav";
import { headers } from "next/headers";
import { auth } from "@/auth";
import CarouselExample from "./_components/CarouselExample";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  const isLogged = !!session?.user;

return (
  <div className="min-h-screen bg-blue-100">
    
    <main className="min-h-[70vh] w-full py-16 flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="font-bold text-5xl text-blue-600">Piupiwer</h1>
      <p className="text-lg text-blue-700 max-w-2xl">
        Conectando a comunidade Poli!
      </p>
            <div className="flex gap-4 mt-4">
        <Link href="/login">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Entrar
          </button>
        </Link>
        <Link href="/login">
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Cadastrar
          </button>
        </Link>
      </div>
    </main>
    
  </div>
);
}