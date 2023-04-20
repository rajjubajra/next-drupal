import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-between py-4 px-2'>
      <div>
        <Link href="/">Yellow-website</Link>
      </div>
      <div className='flex gap-2'>
        <Link href="/blog">Blog</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/about">About</Link>
        <Link href="/about/gallery">Gallery</Link>
        <Link href="/code/repos">Code</Link>
      </div>
    </header>
  )
}

export default Header
