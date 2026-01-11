import Card from "@/components/components_reutilizaveis/card";
import SearchBar from "@/components/components_reutilizaveis/searchbar";

export default function System() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center bg-gray-200 p-8">

      {/* searchbar */}
      <section className="flex justify-center w-full">
        <SearchBar />
      </section>

      {/* card único */}
      <section className="flex justify-center w-full">
        <Card
          name="Teste"
          description="Este é um card de teste para o layout."
          image="https://via.placeholder.com/150"
        />
      </section>

      {/* entre no nosso discord */}
      <section className="flex justify-center w-full">
        <article className="flex items-start max-w-5xl bg-gray-300 rounded-md p-4 gap-4">
          <img
            src="https://t.ctcdn.com.br/pgsbwIpF1F3pYTio-0ptuVBBPtQ=/900x675/smart/i617613.png"
            alt="discord"
            className="w-80 h-72 object-cover rounded-md"
          />
          <div className="flex flex-col gap-2 justify-start">
            <h1 className="text-xl font-bold">Entre no nosso discord</h1>
            <p className="text-gray-700">
              Junte-se a nossa comunidade no discord para ter acesso a mais conteúdo e recursos.
            </p>
            <a href="https://discord.gg/" className="text-blue-500">discord.gg/</a>
          </div>
        </article>
      </section>

      {/* grid de VSTs */}
      <section className="grid grid-cols-3 gap-4 max-w-6xl w-full">
        <Card
          name="VST 1"
          description="Descrição do VST 1"
          image="https://via.placeholder.com/150"
        />
        <Card
          name="VST 2"
          description="Descrição do VST 2"
          image="https://via.placeholder.com/150"
        />
        <Card
          name="VST 3"
          description="Descrição do VST 3"
          image="https://via.placeholder.com/150"
        />
      </section>

    </main>
  );
}
