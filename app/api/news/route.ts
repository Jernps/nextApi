import fs from "fs";

const newsFilePath = "./app/api/news/news.json";

export async function GET() {
  const data = JSON.parse(fs.readFileSync(newsFilePath, "utf-8"));
  //   console.log("API From path: app/api/news/route.js");
  return Response.json(data);
}
