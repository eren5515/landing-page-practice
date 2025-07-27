import "@/styles/main.scss";
import { blogPosts} from "@/lib/posts";
import "@/app/blog/blog.scss";

export default function Page() {
  return (
    <div className="blog-list">
      {Object.values(blogPosts).map((post, index) => (
        <div className="blog-item" key={index}>
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
