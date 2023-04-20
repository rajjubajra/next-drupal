import Link from 'next/link';

async function fetchRepoContents(name){
  
  await new Promise((resolve) => setTimeout(resolve,3000));

  const reposponse = await fetch(`https://api.github.com/repos/rajjubajra/${name}/contents`,{
    next:{
      revalidate: 10,
    }//wait for 10 seconds
  });
  const contents = await reposponse.json();
  return contents;
}


const RepoDirs = async ({name}) => {
  const contents = await fetchRepoContents(name);
  console.log(contents);
  const dirs = contents.length > 0 && contents?.filter((content)=> content.type === 'dir');

  //console.log("DIRECTORY LIST : ",dirs);

  return (
    <div className="border m-4">
      <h3 className="uppercase font-bold">Directories:</h3>
      <ul className='mx-5'>
          { 
            dirs && dirs.length > 0 ?
            dirs?.map((dir, i)=>(
              <li key={i} className='list-disc'>
                <Link href={`/code/repos/${name}/${dir.path}`}>
                  {dir.path}
                </Link>
              </li>
            ))
            : <div className="my-10">No diretories found</div>
          }
      </ul>
    </div>

  )
}

export default RepoDirs;