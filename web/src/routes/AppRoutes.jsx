import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProdutos from "../pages/ListaProdutos";
import FormProduto from "../pages/FormProduto";
import ProductDetails from "../pages/ProductDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial: lista de produtos */}
        <Route path="/" element={<ListaProdutos />} />

        {/* Formulário para novo produto */}
        <Route path="/novo" element={<FormProduto />} />

        {/* Formulário para editar produto existente */}
        <Route path="/editar/:id" element={<FormProduto />} />

        {/* Página de detalhes do produto */}
        <Route path="/detalhes/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}