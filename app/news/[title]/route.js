export async function GET(req, { params }) {
  return Response.json({ message: "Hello from API", params: params.title });
}
