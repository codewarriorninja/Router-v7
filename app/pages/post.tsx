import type { Route } from "./+types/post"

export async function loader({ params }: Route.LoaderArgs){
    let postId = params.postId
    return { postId }
}

export async function action(){

}


const Post = ({loaderData}: Route.ComponentProps) => {
  return (
    <div>Posts Id: {loaderData.postId}</div>
  )
}

export default Post