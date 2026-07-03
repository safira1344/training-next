import { Suspense } from "react";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";

export default async function DetailPOst({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const {id} = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Detalhes do post: {id} </h1>

            <Suspense>
                <PostInfo id={id} />    
            </Suspense>

        </div>
    )
}