import "@/styles/main.scss";
import "../blog.scss";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data = await res.json();
  return data.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    slug: post.title.toLowerCase().replace(/ /g, "-"),
  }));
}

export async function generateMetadata({ params }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Yazı bulunamadı",
      description: "Aradığınız blog yazısı bulunamadı.",
    };
  }

  return {
    title: post.title,
    description: post.content.slice(0, 160) + "...",
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }) {
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="blog-not-found">
        <h1>Yazı bulunamadı.</h1>
      </div>
    );
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
