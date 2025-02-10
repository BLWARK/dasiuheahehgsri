import newsData from "@/data/newsData";

export async function GET() {
  return new Response(JSON.stringify(newsData), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
