import { blogPosts } from "@/lib/blogData";
import Image from "next/image";

export default function BlogPostPage({ params }) {
  const {id} = params;
  const post = blogPosts.find((p) => String(p.id) === id);
  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found.</div>;
  }
  return (
    <div className="container mx-auto px-4 py-0">
      <div className="flex justify-center mb-4 bg-gray-300 rounded">
        <div>
          <Image
            src={post.image}
            alt={post.title}
            width={500}
            height={0}
            className="object-cover rounded"
          />
        </div>
      </div>
      <h1 className="text-3xl text-center font-bold mb-4">{post.title}</h1>
      <div className="text-gray-500 mb-2">
        {post.date} | {post.author}
      </div>
      <div className="prose max-w-none py-4">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <hr className="my-6 border-black"/>
    </div>
  );
}