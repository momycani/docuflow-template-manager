import { requests } from "../data/requests";

function RequestQueue() {
  return (
    <section>
      <div className="page-header">
        <p className="eyebrow">Jira-Style Triage</p>
        <h1>Document Request Queue</h1>
        <p>
          Prioritize document incidents, change requests, compliance updates,
          and new template work while communicating status, ownership, and impact.
        </p>
      </div>

      <div className="queue-board">
        {requests.map((request) => (
          <article className="card" key={request.id}>
            <div className="card-topline">
              <span>{request.ticketId}</span>
              <span className={`status ${request.priority.toLowerCase()}`}>
                {request.priority}
              </span>
            </div>

            <h2>{request.title}</h2>

            <div className="details-list">
              <p><strong>Type:</strong> {request.requestType}</p>
              <p><strong>Status:</strong> {request.status}</p>
              <p><strong>Stakeholder:</strong> {request.stakeholder}</p>
              <p><strong>Impact:</strong> {request.impact}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RequestQueue;