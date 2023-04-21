export default async function fetchSportsData(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/node/tennis_home_page`)
  if(!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}