import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";
import produtoService from "../services/produtoService";

export default function ListaProdutos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    carregarProdutos();
  }, []);

  const carregarProdutos = async () => {
    try {
      setCarregando(true);
      const data = await produtoService.listar();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      alert("Erro ao carregar produtos. Verifique a API ou CORS.");
    } finally {
      setCarregando(false);
    }
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      try {
        await produtoService.excluir(id);
        alert("Produto excluído com sucesso!");
        carregarProdutos();
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
        alert("Erro ao excluir produto. Tente novamente.");
      }
    }
  };

  return (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Paper
      elevation={5}
      sx={{
        width: "95%",
        maxWidth: 1200, // limite de largura para não colar nas bordas
        p: 4,
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: "0px 8px 25px rgba(0,0,0,0.12)",
      }}
    >

        {/* Cabeçalho */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
          flexWrap="wrap"
          gap={2}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#1976d2"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            📦 Lista de Produtos
          </Typography>

          <Button
            variant="contained"
            startIcon={<Add />}
            sx={{
              background: "linear-gradient(90deg, #7b1fa2 0%, #9c27b0 100%)",
              textTransform: "none",
              fontWeight: "bold",
              px: 2.5,
              py: 1.2,
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              "&:hover": {
                background: "linear-gradient(90deg, #6a1b9a 0%, #8e24aa 100%)",
              },
            }}
            onClick={() => navigate("/novo")}
          >
            Novo Produto
          </Button>
        </Box>

        {/* Tabela */}
        <Paper
          elevation={2}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {carregando ? (
            <Box display="flex" justifyContent="center" my={6}>
              <CircularProgress color="secondary" />
            </Box>
          ) : produtos.length === 0 ? (
            <Typography textAlign="center" color="text.secondary" py={5}>
              Nenhum produto cadastrado ainda.
            </Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: "#9c27b0" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Nome
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Preço (R$)
                    </TableCell>
                    <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                      Ações
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {produtos.map((produto) => (
                    <TableRow
                      key={produto.id}
                      hover
                      sx={{
                        "&:hover": { bgcolor: "#f3e5f5" },
                        transition: "0.2s ease",
                      }}
                    >
                      <TableCell>{produto.id}</TableCell>
                      <TableCell>{produto.nome}</TableCell>
                      <TableCell>
                        {produto.preco
                          ? `R$ ${Number(produto.preco).toLocaleString("pt-BR", {
                              minimumFractionDigits: 2,
                            })}`
                          : "—"}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          onClick={() => navigate(`/editar/${produto.id}`)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton
                          color="error"
                          onClick={() => handleExcluir(produto.id)}
                        >
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </Paper>
    </Box>
  );
}
