import { Link } from "react-router-dom";
import { Sun, Moon, Film, Heart } from "lucide-react"; // Iconos
import { useTheme } from "@/context/ThemeContext"; // Nuestro hook
import { SearchBar } from "@/components/ui/SearchBar";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // Fíjate en las clases: 'dark:bg-gray-900' cambia el color cuando está oscuro
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xl"
          >
            <Film className="w-6 h-6" />
            <span>CineScope</span>
          </Link>

          <div className="flex-1 flex justify-center px-4">
            <SearchBar />
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-4">
            <Link
              to="/favorites"
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
            >
              <Heart size={24} />
            </Link>
            {/* Botón de Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
