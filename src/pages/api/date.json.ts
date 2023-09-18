export async function GET({params, request}) {
  const date = new Date().toTimeString();
  return new Response(
    date
  )
}