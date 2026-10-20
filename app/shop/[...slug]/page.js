

export default async function Page({ params }) {
    const { slug } = await params
    return <div>Test: {slug[1]}</div>
}