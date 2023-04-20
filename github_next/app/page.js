

async function fetchHomeData(){
  const response = await fetch("http://localhost:3000/api/home");
  const homedata = response.json();
  return homedata;
}

async function Home() {

  const home = await fetchHomeData();


  return (
    <div className="px-4">
      <h1 className="my-10">Welcome to Yellow-Website</h1>
      {
        home && home.data.length > 0 &&
        home?.data?.map((item,i)=> {
            return <div key={i}>
                  <h2 className="text-2xl mb-4">{item.attributes.title}</h2>
                  <div>
                    <div dangerouslySetInnerHTML={{__html: item.attributes.body.value}} />
                  </div>
            </div>
        })
      }
    </div>
  )
}

export default Home
