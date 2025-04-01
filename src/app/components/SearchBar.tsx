"use client";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchInput = event.currentTarget.elements.namedItem(
      "search"
    ) as HTMLInputElement;
    router.push(`/blog?search=${searchInput.value}`);
  }

  return (
    <form onSubmit={handleSearch} method="POST">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md py-1 px-2 text-sm"
        name="search"
      />
      <button type="submit" className="border rounded-md py-1 px-2 text-sm">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
