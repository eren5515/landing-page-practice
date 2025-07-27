import React from "react";
import "@/styles/main.scss";
import "../blog.scss";
import { blogPosts } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Yazı bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160) +"...",
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

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
