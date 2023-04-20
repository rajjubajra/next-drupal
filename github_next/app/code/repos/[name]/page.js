import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import { Suspense } from 'react';

function RepoPage({params}) {
  return (
    <div>
      <div className='my-10'>
        <Link href="/code/repos" className='py-2 px-3 bg-gray-500 text-gray-100'>Back to repos</Link>
      </div>
      <h2>{params.name}</h2>
      <Suspense fallback={<div>Loading repo....</div>} >
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>} >
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
