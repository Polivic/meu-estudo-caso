import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#f4f6f8", // fundo cinza em toda a tela
      }}
    >
      {/* Barra superior */}
      <NavBar />

      {/* Conteúdo centralizado */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "100%",
          px: 0,
          py: 6,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
