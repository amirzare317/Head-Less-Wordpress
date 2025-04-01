import { Categories } from "./components/Categories";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialIcons />
      <Categories />
    </div>
  );
}
