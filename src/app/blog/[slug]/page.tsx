import {
  getAuthorById,
  getCategoriesByIds,
  getPostBySlug,
} from "@/lib/queries";
import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next";

// Define Category type if not already imported

// Metadata
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug((await params).slug);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: post?.title.rendered,
    description: post?.excerpt.rendered,
    openGraph: {
      images: ["/open-graph.jpg", ...previousImages],
    },
  };
}

// Default Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPostBySlug((await params).slug);
  if (!post) return <div>Post not found!</div>;

  const author = await getAuthorById(post.author);
  const categories = await getCategoriesByIds(post.categories);

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <h1
        className="font-bold text-2xl mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      ></h1>
      <div className="flex justify-between text-sm items-center mb-8">
        <p>
          Published on <b>{date}</b> by <b>{author?.name}</b>
        </p>
        <div className="flex gap-2 text-[0.7rem]">
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category) => (
              <Link
                key={category.id}
                className="border p-1 rounded-md"
                href={`/blog?categories=${category.id}`}
              >
                {category.name}
              </Link>
            ))
          ) : (
            <span>No categories available</span> // Fallback if categories isn’t an array
          )}
        </div>
      </div>
      <div
        className="article"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
