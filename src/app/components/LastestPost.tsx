import { Post, LatestPostProps } from "@/lib/types";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";

async function LastestPost({
  title,
  posts,
  currentPage = 1,
  totalPages = 1,
  searchTerm,
  categories,
}: LatestPostProps) {
  if (posts?.length === 0) {
    return <div>No posts available</div>;
  }
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {title ? (
          <h2 className="text-xl mb-4">{title}</h2>
        ) : searchTerm ? (
          <h2 className="text-xl mb-4">Search Results</h2>
        ) : (
          <h2 className="text-xl mb-4">Latest Posts</h2>
        )}
        <SearchBar />
      </div>

      <div className="flex flex-col mb-4">
        {posts?.map((post: Post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="border-b py-4 flex justify-between gap-4 hover:bg-slate-50"
          >
            <div
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></div>
            <p>{new Date(post.date).toLocaleDateString("de-DE")}</p>
          </Link>
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="flex justify-between">
          <div>
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}${
                  searchTerm ? `&search=${searchTerm}` : ""
                }${categories ? `&categories=${categories}` : ""}`}
                className="underline"
              >
                Previous
              </Link>
            )}
          </div>
          <div className="text-left">
            Page {currentPage} of {totalPages}
          </div>

          <div>
            <Link
              href={`/blog?page=${currentPage + 1}${
                searchTerm ? `&search=${searchTerm}` : ""
              }${categories ? `&categories=${categories}` : ""}`}
              className="underline"
            >
              Next
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Link
            href={`/blog`}
            className="hover:underline text-gray-900 py-5 block rounded-md"
          >
            View more posts
          </Link>
        </div>
      )}
    </div>
  );
}

export default LastestPost;
