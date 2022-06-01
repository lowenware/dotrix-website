export default {
  content: {
    extension: process.env.CONTENT_EXTENSION || ".md",
    root: process.env.CONTENT_FOLDER || "content",
  },
  blog: {
    slug: process.env.BLOG_FOLDER || "blog",
    postsPerPage: 16,
  },
  handbook: {
    slug: process.env.HANDBOOK_FOLDER || "handbook",
  },
  community: {
    slug: process.env.COMMUNITY_FOLDER || "community",
  },
};

