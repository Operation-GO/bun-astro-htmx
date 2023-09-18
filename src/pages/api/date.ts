export async function GET() {
  const date = new Date().toTimeString();
  return new Response(
    date
  )
}