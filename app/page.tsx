import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <h1>Welcome to <span className="text-cyan-600 text-3xl font-medium "> N</span>ext.js Series</h1>
   <Link href={`/users`}>Users</Link>
    </main>
 
 )
}
