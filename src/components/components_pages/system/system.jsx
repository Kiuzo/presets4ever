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
        const { data, error } = await supabase
          .from("vsts")
          .select("*");

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

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (card.description && card.description.toLowerCase().includes(searchTerm.toLowerCase()))
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
          <p className="col-span-full text-center text-gray-500">Carrregando dados...</p>
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
        <article className="flex flex-col md:flex-row items-center md:items-start bg-gray-300 rounded-md p-6 gap-6 w-full">
          <img
            src="https://t.ctcdn.com.br/pgsbwIpF1F3pYTio-0ptuVBBPtQ=/900x675/smart/i617613.png"
            alt="discord"
            className="w-full md:w-80 h-48 md:h-72 object-cover rounded-md"
          />
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-2xl font-bold">Entre no nosso discord</h1>
            <p className="text-gray-700 text-lg">
              Junte-se a nossa comunidade no discord para ter acesso a mais conteúdo e recursos.
            </p>
            <a 
              href="https://discord.gg/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline mt-2"
            >
              discord.gg/
            </a>
          </div>
        </article>
      </section>

    </main>
  );
}
