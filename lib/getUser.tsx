export default async function getUser(id: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) return;
  return response.json();
}
