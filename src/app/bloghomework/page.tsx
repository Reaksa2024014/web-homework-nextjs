

"use client";

import BlogHomeworkComponent from "@/components/BlogHomeworkComponent";
import { useEffect, useState } from "react";

interface BlogType {
  id: number;
  title: string;
  body: string;
}

export default function BlogPage() {
  const [blog, setBlog] = useState<BlogType[]>([]);

  useEffect(() => {
    async function getAllBlog() {
      const res = await fetch(`https://dummyjson.com`+ '/posts');

      const data = await res.json();

      setBlog(data.posts);
    }

    getAllBlog();
  }, []);

  return (
    <div>
      {blog.map(({ title, body, id }) => (
        <BlogHomeworkComponent
          key={id}
          id={id}
          title={title}
          body={body}
        />
      ))}
    </div>
  );
}
