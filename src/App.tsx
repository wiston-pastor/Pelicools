import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Home } from '@/pages/Home'; // <--- ¿Tienes esta importación?
import { MovieDetail } from '@/pages/MovieDetail';
import { SearchPage } from '@/pages/SearchPage';
import { FavoritesPage } from '@/pages/FavoritesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Routes>
            {/* <--- Fíjate que element sea <Home /> y no un <h1> */}
            <Route path="/" element={<Home />} /> 
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;