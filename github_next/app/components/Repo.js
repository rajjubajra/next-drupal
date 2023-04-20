
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa';

async function fetchRepo(name){
  const response = await fetch(`https://api.github.com/repos/rajjubajra/${name}`)
  const repo = response.json();
  return repo;
}

const Repo = async ({name}) => {

  const repo = await fetchRepo(name);
  console.log(repo);


  return (
    <div>
      <h2><span className="font-bold">Repo name:</span> {repo.name}</h2>
      <p><span className="font-bold">Description: </span>{repo.description}</p>
      <div className="flex gap-10 my-5">
          <span className="flex gap-2">
            <FaStar />{repo.stargazers_count}
          </span>
          <span  className="flex gap-2">
            <FaCodeBranch />{repo.forks_count}
          </span>
          <span  className="flex gap-2">
            <FaEye />{repo.watchers_count}
          </span>
        </div>
    </div>
  )
}

export default Repo
