import { Outlet } from "react-router-dom";
import Introduction from "../components/Introduction";
import Layout from "./Layout";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Introduction />
      <Outlet />
    </Box>
  );
};
export default Dashboard;
