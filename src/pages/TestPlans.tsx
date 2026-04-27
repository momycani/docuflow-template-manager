import { testPlans } from "../data/testPlans";

function TestPlans() {
  return (
    <section>
      <div className="page-header">
        <p className="eyebrow">Quality Assurance</p>
        <h1>Document Template Test Plans</h1>
        <p>
          Track validation steps used to confirm document accuracy, formatting,
          compliance language, environment readiness, and regression prevention.
        </p>
      </div>

      <div className="card-grid">
        {testPlans.map((test) => (
          <article className="card" key={test.id}>
            <div className="card-topline">
              <span>{test.environment}</span>
              <span className={`status ${test.status.toLowerCase()}`}>
                {test.status}
              </span>
            </div>

            <h2>{test.templateName}</h2>
            <p><strong>Test Case:</strong> {test.testCase}</p>
            <p><strong>Expected Result:</strong> {test.expectedResult}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TestPlans;