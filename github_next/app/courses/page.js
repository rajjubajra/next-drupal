


async function fetchCourses(){

  try{
        const response = await fetch('https://sports.yellow-website.com/backend/jsonapi/node/tennis_courses',{
          next: {
            revalidate: 5,
          }// wait for 5 seconds
        });
        const repos = await response.json();
        return repos;
  }catch(error){
    console.log("FETCH EROR: ",error)
  }
  
}


const Courses = () => {

  const data = fetchCourses();
  console.log("FETCH COURSES: ",data);

  return (
    <div>
      <h2>Tennis Courses: </h2>
    </div>
  )
}

export default Courses
