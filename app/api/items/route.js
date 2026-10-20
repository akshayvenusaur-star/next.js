export async function GET() {
  return Response.json([
    { title: 'nokia' },
    { title: 'samsung' },
  ])
}

export async function POST() {
  return Response.json({message:'post success'})
}