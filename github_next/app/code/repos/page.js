import Link from 'next/link';
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';



async function fetchRepos(){

  const response = await fetch('https://api.github.com/users/rajjubajra/repos',{
    next: {
      revalidate: 5,
    }// wait for 5 seconds
  });
  const repos = await response.json();
  return repos;

}



async function Repos() {
  
  const repos = await fetchRepos();
  console.log(repos);

  return (
    <div>
      <h2>Github Repository</h2>
      <ul className='px-4 py-3'>
      {
        repos?.map((repo,i)=>{
          return <li className='w-full py-4 px-4 my-2 border hover:bg-gray-200 bg-gray-300' key={i}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>Repo Name: {repo.name}</h3>
                <p>Description: {repo.description}</p>
                <div className="flex justify-between">
                  <span>
                    <FaStar />{repo.stargazers_count}
                  </span>
                  <span>
                      <FaCodeBranch />{repo.forks_count}
                  </span>
                  <span>
                      <FaEye />{repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
        })
      }
      </ul>
      
    </div>
  )
}

export default Repos
