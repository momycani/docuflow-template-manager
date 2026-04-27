import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import SchemaMapping from "./pages/SchemaMapping";
import TestPlans from "./pages/TestPlans";
import RequestQueue from "./pages/RequestQueue";
import Runbook from "./pages/Runbook";
import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>DocuFlow</h2>
        <nav>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/templates">Templates</NavLink>
          <NavLink to="/schema-mapping">Schema Mapping</NavLink>
          <NavLink to="/test-plans">Test Plans</NavLink>
          <NavLink to="/request-queue">Request Queue</NavLink>
          <NavLink to="/runbook">Runbook</NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/schema-mapping" element={<SchemaMapping />} />
          <Route path="/test-plans" element={<TestPlans />} />
          <Route path="/request-queue" element={<RequestQueue />} />
          <Route path="/runbook" element={<Runbook />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
