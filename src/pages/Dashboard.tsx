import { templates } from "../data/templates";
import { requests } from "../data/requests";
import { schemaFields } from "../data/schemaFields";
import { testPlans } from "../data/testPlans";

function Dashboard() {
  const activeIssues = requests.filter(
    (request) => request.status !== "Resolved"
  ).length;

  const mappingIssues = schemaFields.filter(
    (field) => field.status !== "Mapped"
  ).length;

  const failedTests = testPlans.filter(
    (test) => test.status === "Failed"
  ).length;

  const productionTemplates = templates.filter(
    (template) => template.environment === "Production"
  ).length;

  return (
    <section>
      <div className="page-header">
        <p className="eyebrow">Document Operations Dashboard</p>
        <h1>DocuFlow Template Manager</h1>
        <p>
          Track insurance document templates from design and schema mapping
          through QA validation, triage, rollout, and ongoing maintenance.
        </p>
      </div>

      <div className="summary-grid">
        <article className="summary-card">
          <span>Total Templates</span>
          <strong>{templates.length}</strong>
        </article>

        <article className="summary-card">
          <span>Production Templates</span>
          <strong>{productionTemplates}</strong>
        </article>

        <article className="summary-card">
          <span>Active Requests</span>
          <strong>{activeIssues}</strong>
        </article>

        <article className="summary-card">
          <span>Mapping Issues</span>
          <strong>{mappingIssues}</strong>
        </article>

        <article className="summary-card">
          <span>Failed Tests</span>
          <strong>{failedTests}</strong>
        </article>
      </div>

      <div className="dashboard-layout">
        <article className="card">
          <h2>Lifecycle Focus</h2>
          <p>
            This project demonstrates support for document template design,
            implementation, testing, rollout, production maintenance, and
            stakeholder communication.
          </p>
        </article>

        <article className="card">
          <h2>Role Alignment</h2>
          <p>
            Built to reflect document support engineering work involving JSON
            data mapping, template debugging, QA checks, Jira-style triage, and
            reusable process documentation.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;