import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p className='flex gap-4'>
        <Link href="/users">Users</Link>
        <Link href="/sports">Sports</Link>
      </p>
    </main>
  )
}
