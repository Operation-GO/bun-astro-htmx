const baseURL = new URL("https://deadline-test.demo.laidbacksolutions.se");
const url = new URL("../api/User/login", baseURL);

url.username
export async function POST() {
  const something = await fetch(url);
  console.log(something);
}