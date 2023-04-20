
async function fetchAbout(){
  const response = await fetch(`http://localhost:3000/api/about`);
  const about = await response.json();
  return about;
}

export const metadata = {
  title: 'About yellow-website'
}

const AboutPage = async ()=> {

  const about = await fetchAbout();
  console.log("ABOUT US PAGE DATA: ",about);

  return (
    <div className="mt-10 px-4">
      <h1 className="text-xl tracking-wider">About Yellow-website</h1>
      <div>
        {
          about && about.data.length > 0 &&
          about.data.map((item,i)=> {
            return <div key={i}>
              <div className="py-5">
              <h2 className="text-2xl">{item.attributes.title}</h2>
              <div dangerouslySetInnerHTML={{__html: item.attributes.body.value}} />
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default AboutPage