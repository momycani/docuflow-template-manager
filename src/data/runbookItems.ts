export const runbookItems = [
  {
    id: 1,
    title: "Debug missing fields",
    steps: [
      "Confirm the field exists in the source JSON payload.",
      "Verify the template references the correct schema path.",
      "Check whether conditional logic is hiding the field.",
      "Validate the output in Dev and QA before rollout.",
    ],
  },
  {
    id: 2,
    title: "Validate schema mappings",
    steps: [
      "Compare product requirements against template fields.",
      "Confirm field names, formatting rules, and required/optional status.",
      "Review edge cases with Product, Engineering, and Underwriting.",
      "Document mapping decisions for future maintenance.",
    ],
  },
  {
    id: 3,
    title: "Prevent regressions",
    steps: [
      "Run test cases against impacted templates.",
      "Compare outputs across Dev, QA, and Production.",
      "Confirm related templates still render correctly.",
      "Record results before closing the request.",
    ],
  },
  {
    id: 4,
    title: "Communicate rollout status",
    steps: [
      "Identify stakeholder, priority, and customer impact.",
      "Update ticket status with clear next steps.",
      "Call out blockers early.",
      "Confirm rollout completion and post-release checks.",
    ],
  },
];