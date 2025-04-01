import { getCategories, getAllPost } from "@/lib/queries";
import { Categories } from "./components/Categories";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";
import LastestPost from "./components/LastestPost";

export default async function Home() {
  const { posts } = await getAllPost();
  const categories = await getCategories();
  return (
    <div>
      <Hero />
      <SocialIcons />
      <Categories categories={categories} />
      <LastestPost posts={posts} />
    </div>
  );
}
