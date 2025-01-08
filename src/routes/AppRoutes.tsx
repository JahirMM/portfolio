import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectDetails from "@/components/projects/projectDetails/ProjectDetails";
import BackendDetails from "@/components/projects/projectDetails/backend/BackendDetails";
import NotFound from "@/components/NotFound";
import Layout from "@/Layout";
import App from "@/App";

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
          element={<BackendDetails />}
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
