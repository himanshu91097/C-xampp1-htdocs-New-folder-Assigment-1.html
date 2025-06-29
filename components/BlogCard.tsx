'use client';
import Link from 'next/link';

export default function BlogCard({ post }: { post: any }) {
    const date = new Date(post.date);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);

    return (
        <Link
            href={`/posts/${post.slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-shadow hover:shadow-xl"
        >
            {post.coverImage && (
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            )}

            <div className="p-5 space-y-2">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                </h2>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    By <span className="font-medium">{post.author}</span> • {formattedDate}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {post.body.slice(0, 200)}...
                </p>
            </div>
        </Link>
    );
}
