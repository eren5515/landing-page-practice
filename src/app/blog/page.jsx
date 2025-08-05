"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@/redux/postsSlice";

import "@/styles/main.scss";
import "@/app/blog/blog.scss";

export default function Page() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <div className="blog-item" key={post.id}>
          <h2 className="blog-title text -md -semibold -secondary-color">
            {post.title}
          </h2>
          <a
            href={`/blog/${post.slug}`}
            className="read-more-link text -primary-color -semibold -md"
          >
            Read more →
          </a>
        </div>
      ))}
    </div>
  );
}
