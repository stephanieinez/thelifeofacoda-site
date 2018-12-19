// eslint-disable-next-line
export const normalise = (response = {}) => {
  const { about, blogPosts, home, contact, featuredPosts } = response;
  return {
    about: {
      aboutTitle: about.aboutTitle,
      headerImage: about.headerImage.fields.file.url,
      aboutText: about.aboutText,
      aboutVideo: about.aboutVideo,
    },
    blogPosts,
    featuredPosts,
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
