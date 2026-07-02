import { Button } from "@/src/components/button";

interface PostProps{
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostProps[]
}

// SERVER COMPONENTS - renderizado pelo lado do server
export default async function PostsPage() {

    const response = await fetch('https://dummyjson.com/posts')
    const data: ResponseProps = await response.json()

    // é possível fazer com que uma função tenha a diretiva para usar server ou client
    // async function handleFetchPosts() {
    //     'use server'

    //     console.log('CLICOUUUUU')
    // }

    return (
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold text-3xl">Todos os posts.</h1>

            <Button></Button>

            {/* <button onClick={handleFetchPosts}>
                Buscar posts
            </button> */}

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div className="bg-gray-200 p-4 rounded-md" key={post.id}>
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}