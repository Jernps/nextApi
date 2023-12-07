export async function GET() {
  console.log("api from route");
  return Response.json({ message: "Hello api" });
}
