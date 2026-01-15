import { useState, useEffect } from "react";
import Card from "@/components/components_reutilizaveis/card";
import SearchBar from "@/components/components_reutilizaveis/searchbar";
import { supabase } from "@/lib/supabaseClient";

export default function System() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      console.log("Iniciando busca de cards...");
      try {
        const { data, error } = await supabase.from("vsts").select("*");

        if (error) {
          console.error("Erro do Supabase:", error.message);
          console.error("Detalhes do erro:", error);
        } else {
          console.log("Dados recebidos do Supabase:", data);
          setCards(data || []);
        }
      } catch (err) {
        console.error("Erro inesperado na busca:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  const filteredCards = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (card.description &&
        card.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="flex flex-col gap-8 items-center justify-center bg-gray-200 p-8">
      {/* searchbar */}
      <section className="flex justify-center w-full">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </section>

      {/* cards filtrados */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Carrregando dados...
          </p>
        ) : filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              description={card.description}
              image={card.image}
              download={card.download}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Nenhum resultado encontrado para "{searchTerm}"
          </p>
        )}
      </section>

      {/* entre no nosso discord */}
      <section className="flex justify-center w-full max-w-5xl">
        <article className="relative flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 gap-6 w-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-indigo-100">
          <div className="relative group">
            <img
              src="https://t.ctcdn.com.br/pgsbwIpF1F3pYTio-0ptuVBBPtQ=/900x675/smart/i617613.png"
              alt="discord"
              className="w-full md:w-80 h-48 md:h-72 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span className="text-sm uppercase tracking-wide">
                Comunidade
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Entre no nosso Discord
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Junte-se a nossa comunidade no Discord para ter acesso a conteúdo
              exclusivo, recursos úteis e conectar-se com outros membros.
            </p>

            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center md:justify-start gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg mt-2 group"
            >
              <span>Entrar no Discord</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
