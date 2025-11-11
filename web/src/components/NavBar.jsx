import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add, List } from "@mui/icons-material";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(90deg, #1976d2 0%, #2196f3 100%)",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Título à esquerda */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}
        >
          🧩 Sistema de Produtos
        </Typography>

        {/* Botões à direita */}
        <Box>
          <Button
            variant="contained"
            startIcon={<List />}
            sx={{
              mr: 2,
              backgroundColor: "#8e24aa",
              "&:hover": { backgroundColor: "#7b1fa2" },
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: 2,
            }}
            onClick={() => navigate("/")}
          >
            Produtos
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
