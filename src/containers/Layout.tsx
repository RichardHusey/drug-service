import { Container } from "@mui/material";
import Header from "../components/Header";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header></Header>
      {children}
      <Outlet />
    </Container>
  );
};

export default Layout;
