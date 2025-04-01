import React from "react";
import LastestPost from "../components/LastestPost";
import { getAllPost } from "@/lib/queries";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function page(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const currentPage = searchParams?.page
    ? parseInt(searchParams.page as string, 10)
    : 1;
  const postPerPage = 10;
  const searchTerm =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const categories = parseInt(searchParams.categories as string) || 0;
  const { posts, totalPages } = await getAllPost(
    currentPage,
    postPerPage,
    searchTerm,
    categories
  );

  const LatestPostProps = {
    posts,
    currentPage,
    totalPages,
    searchTerm,
    categories,
  };

  return (
    <div>
      <LastestPost {...LatestPostProps} />
    </div>
  );
}

export default page;
