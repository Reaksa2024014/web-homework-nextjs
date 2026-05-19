
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getSinglePost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { id } = await params;  // ← await params (Next.js 15 fix)
  const post = await getSinglePost(id);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg">{post.body}</p>
    </div>
  );
}