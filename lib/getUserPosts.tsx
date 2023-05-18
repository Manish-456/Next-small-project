export default async function getUserPosts(userId: number) {
  const response = await fetch(
`    https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!response.ok) throw new Error(`Failed to fetch posts`);
  return response.json();
}
