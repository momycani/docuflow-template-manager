import { schemaFields } from "../data/schemaFields";

function SchemaMapping() {
  return (
    <section>
      <div className="page-header">
        <p className="eyebrow">Schema Mapping</p>
        <h1>Template Field Mapping</h1>
        <p>
          Validate how structured insurance data maps into customer-facing
          document templates and identify missing fields, formatting issues,
          and logic bugs.
        </p>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Field Name</th>
              <th>Source Path</th>
              <th>Template Output</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {schemaFields.map((field) => (
              <tr key={field.id}>
                <td><strong>{field.fieldName}</strong></td>
                <td><code>{field.sourcePath}</code></td>
                <td>{field.templateOutput}</td>
                <td>
                  <span className={`status ${field.status.toLowerCase().replaceAll(" ", "-")}`}>
                    {field.status}
                  </span>
                </td>
                <td>{field.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default SchemaMapping;