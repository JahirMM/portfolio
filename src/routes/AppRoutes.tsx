import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectDetails from "../components/projects/projectDetails/ProjectDetails";
import NotFound from "../components/NotFound";
import Layout from "../Layout";
import App from "../App";
import BackendDetails from "../components/projects/projectDetails/BackendDetails";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <App />
            </Layout>
          }
        />
        <Route
          path="/project/:nameProject"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />
        <Route
          path="/backend-project/:nameProject"
          element={
            // <Layout>
              <BackendDetails />
            // </Layout>
          }
        />
        <Route
          path="/not-found"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
