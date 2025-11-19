import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para cambiar de página
import { Search } from 'lucide-react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    if (query.trim()) {
      // Navegamos a la ruta de búsqueda con el parámetro 'q'
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery(''); // Opcional: limpiar el input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm hidden sm:block">
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
      {/* Icono posicionado absolutamente dentro del input */}
      <Search 
        size={18} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
      />
    </form>
  );
};