import Link from 'next/link';
import fetchSportsData from '@/lib/fetchData';
import type {Metadata} from 'next';


export const metadata: Metadata = {
  title: "Sports: Tennis",
}

export default async function Sports() {

  const sport: Promise<sporthome[]> = fetchSportsData(); 
  const sportdata = await sport;

  console.log("SPORTS DATA : ",sportdata);

  const content = (
    <section className='p-10'>
      <Link href="/">Back</Link>
      <h2 className='text-xl my-3'>Sports: Tennis</h2>
      {
        sportdata?.data.length && 
        sportdata.data.map(item => {
          return <div key={item.id}>
            <h2 className='text-xl my-4'>{item.attributes.title}</h2>
            <div>
              <div dangerouslySetInnerHTML={{__html: item.attributes.body.value}} />
            </div>
          </div>
        })
      }
    </section>
  )
  return content;
}
