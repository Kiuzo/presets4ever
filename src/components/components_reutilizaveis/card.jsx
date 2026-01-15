export default function Card({ name, description, image, download }) {
  return (
    <article className="group flex flex-col items-center bg-white rounded-xl p-5 max-w-md shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
      
      <div className="flex items-start w-full gap-4">
        
        {/* imagem */}
        <div className="relative flex-shrink-0">
          <img 
            src={image} 
            alt={name} 
            className="w-24 h-24 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute inset-0  rounded-lg opacity-0 "></div>
        </div>
        
        {/* conteudo */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h1 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
            {name}
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {description}
          </p>
          <a 
            href={download} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-indigo-600 rounded-lg text-white w-fit px-4 py-2 text-sm font-medium "
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download</span>
            <svg className="w-4 h-4 group-hover/button:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

    </article>
  );
}