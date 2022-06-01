export default {
  content: {
    extension: process.env.CONTENT_EXTENSION || ".md",
    folder: process.env.CONTENT_FOLDER || "content",
  },
  blog: {
    folder: process.env.BLOG_FOLDER || "blog",
  },
  handbook: {
    folder: process.env.HANDBOOK_FOLDER || "handbook",
  },
  community: {
    folder: process.env.COMMUNITY_FOLDER || "community",
  },
};

