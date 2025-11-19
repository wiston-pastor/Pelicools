import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home'; // Asumiendo que crearás esta página

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Aquí irán tus otras rutas */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};