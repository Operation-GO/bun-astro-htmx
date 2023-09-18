export async function GET({params, request}) {
  const date = new Date();
  const test = date.toString();
  return new Response(
    test
  )
}