// requisicao GET json
export async function GET() {
    return Response.json({
        name: 'Fernanda Mirely',
        instagram: '@_fernanda_mirely',
        youtube: 'fernanda_mirely'
    })
}