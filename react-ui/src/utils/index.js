// eslint-disable-next-line
export const normalise = (response = {}) => {
  const { about, blogPosts, home, contact, ptLocation, yoga } = response;
  return {
    about: {
      aboutTitle: about.aboutTitle,
      headerImage: about.headerImage.fields.file.url,
      aboutText: about.aboutText,
      aboutVideo: about.aboutVideo
    },
    blogPosts,
    home: {
      heroImage: home.heroImage.fields.file.url,
      homeVideo: home.homeVideo,
      aboutText: home.aboutText,
      services: home.services,
      dividerImage: home.dividerImage.fields.file.url
    },
    contact: {
      contactHeader: contact.contactHeader.fields.file.url,
      contactText: contact.contactText
    },
    ptLocation: {
      ptLocation: ptLocation.ptLocation,
      ptAddress: ptLocation.ptAddress
    },
    yoga: {
      yogaText: yoga.yogaText,
      yogaTitle: yoga.yogaTitle,
      yogaVideo: yoga.yogaVideo
    }
  };
};
