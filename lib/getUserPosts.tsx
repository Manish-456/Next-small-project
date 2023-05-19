export default async function getUserPosts(userId: number) {
  const response = await fetch(
    `    https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
      next: { revalidate: 60 },
    }
    );
    if(!response.ok) return;

  return response.json();
}
