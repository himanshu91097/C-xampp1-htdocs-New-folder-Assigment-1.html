import { getAllPosts } from '../../lib/blogUtils';
import BlogCard from '../../components/BlogCard';
import { BlogPost } from '../../lib/types';

export default async function HomePage() {
  const posts: BlogPost[] = await getAllPosts();

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post?.id} post={post} />
        ))}
      </div>
    </main>
  );
}
