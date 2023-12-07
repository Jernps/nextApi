const data = [
  {
    type: "tourist",
    description: "For leisure travel up to 30 days.",
    eligibility: ["all nationalities"],
    fees: {
      application: 50,
      processing: 20,
    },
    processing_time: "7-10 business days",
  },
  {
    type: "business",
    description:
      "For attending meetings, conferences, or short-term business activities.",
    eligibility: ["business owners, investors, entrepreneurs"],
    fees: {
      application: 100,
      processing: 30,
    },
    processing_time: "10-15 business days",
  },
  {
    type: "student",
    description: "For pursuing academic studies at recognized institutions.",
    eligibility: ["enrolled students with valid acceptance letters"],
    fees: {
      application: 75,
      processing: 25,
    },
    processing_time: "15-20 business days",
  },
];

export async function GET() {
  return Response.json(data);
}
