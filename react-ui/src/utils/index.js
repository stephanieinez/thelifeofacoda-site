export const normalise = (response = {}) => {
  const { about, blogPost, home, contact } = response;
  return {
    about: {
      aboutTitle: about.aboutTitle,
      headerImage: about.headerImage.fields.file.url,
      aboutText: about.aboutText,
      aboutVideo: about.aboutVideo,
    },
    blogPost: {
      blogTitle: blogPost.blogTitle,
      blogPath: blogPost.blogPath,
      blogDate: blogPost.blogDate,
      blogContent: blogPost.blogContent,
      blogVideo: blogPost.blogVideo,
    },
    home: {
      heroImage: home.heroImage.fields.file.url,
      aboutText: home.aboutText,
      services: home.services,
      dividerImage: home.dividerImage.fields.file.url,
    },
    contact: {
      contactHeader: contact.contactHeader.fields.file.url,
      contactText: contact.contactText,
    },
  };
};
