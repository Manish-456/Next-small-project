export default async function getUser(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}
