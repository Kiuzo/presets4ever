export default function Card({ name, description, image }) {
  return (
    <article className="flex flex-col items-center bg-gray-400 rounded-md p-4 max-w-md">
      
      <div className="flex items-start w-full gap-4">
        
        {/* imagem */}
        <img src={image} alt={name} className="w-24 h-24 object-cover rounded-md" />
        
        {/* conteudo */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-bold">{name}</h1>
          <p className="text-sm text-gray-100">{description}</p>
          <button className="bg-black/60 rounded-md text-white w-fit px-2 py-1">Download</button>
        </div>
      </div>

    </article>
  );
}
