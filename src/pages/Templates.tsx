import { templates } from "../data/templates";

function Templates() {
  return (
    <section>
      <div className="page-header">
        <p className="eyebrow">Template Library</p>
        <h1>Insurance Document Templates</h1>
        <p>
          Manage customer-facing policies, quotes, binders, endorsements, and notices
          across document lifecycle stages.
        </p>
      </div>

      <div className="card-grid">
        {templates.map((template) => (
          <article className="card" key={template.id}>
            <div className="card-topline">
              <span>{template.documentType}</span>
              <span className={`status ${template.status.toLowerCase().replaceAll(" ", "-")}`}>
                {template.status}
              </span>
            </div>

            <h2>{template.name}</h2>
            <p>{template.description}</p>

            <div className="details-list">
              <p><strong>Line:</strong> {template.insuranceLine}</p>
              <p><strong>Owner:</strong> {template.owner}</p>
              <p><strong>Environment:</strong> {template.environment}</p>
              <p><strong>Last Updated:</strong> {template.lastUpdated}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Templates;