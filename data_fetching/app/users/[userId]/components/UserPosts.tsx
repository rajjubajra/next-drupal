type Props = {
  promise: Promise<Post[]>
}



export default async function UserPosts({promise}: Props) {

  const posts = await promise

  const content = posts.map(post => {
    return(

      <article className="p-4 border m-2 bg-slate-100" key={post.id}>
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.body}</p>
          <br />
      </article>
    )
  })

  return <div className="columns-3">{content}</div>
}
