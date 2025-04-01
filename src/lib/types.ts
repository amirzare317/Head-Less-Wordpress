export type Category = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonamy: "category";
  parent: number;
};

export type Post = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  modified: string;
  content: {
    rendered: string;
  };
  type: string;
  status: string;
  excerpt: {
    rendered: string;
  };
  author: number;
  categories: number[];
  featured_media: number;
};

// Yoast
export interface ExtendedPost extends Post {
  yoast_head_json: {
    title: string;
    robots: {
      index: string;
      follow: string;
      "max-snippet": string;
      "max-image-preview": string;
      "max-video-preview": string;
    };
    canonical: string;
    og_locale: string;
    og_type: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    article_author: string;
    article_published_time: string;
    article_modified_time: string;
    og_image: {
      width: number;
      height: number;
      url: string;
      type: string;
    }[];
    author: string;
    twitter_card: string;
    twitter_creator: string;
    twitter_misc: {
      "Written by": string;
      "Est. reading time": string;
    };
    thumbnail_url: string;
  };
}

export type LatestPostProps = {
  posts: Post[];
  currentPage?: number;
  totoalPage?: number;
  title?: string;
  searchTerm?: string;
  categories?: number;
};

export type Author = {
  id: number;
  name: string;
  slug: string;
  link: string;
};
