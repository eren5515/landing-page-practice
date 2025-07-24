import React from "react";
import "@/styles/main.scss";
import "../blog.scss";
import { posts } from "@/lib/posts";

export default function Page({ params }) {
  const post = posts[params.slug];

  if (!post) {
    return <div>Yazı bulunamadı.</div>;
  }

  return (
    <div className="blog">
      <h1 className="blog-title text -xl -semibold -primary-color">
        {post.title}
      </h1>
      <p className="blog-content text -md -regular -secondary-color">
        {post.content}
      </p>
    </div>
  );
}
