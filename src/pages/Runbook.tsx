import { runbookItems } from "../data/runbookItems";

function Runbook() {
  return (
    <section>
      <div className="page-header">
        <p className="eyebrow">Documentation</p>
        <h1>Template Debugging Runbook</h1>
        <p>
          Standardized guidance for diagnosing document template issues,
          validating schema mappings, preventing regressions, and communicating
          clearly with cross-functional stakeholders.
        </p>
      </div>

      <div className="card-grid">
        {runbookItems.map((item) => (
          <article className="card" key={item.id}>
            <h2>{item.title}</h2>
            <ol className="step-list">
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Runbook;