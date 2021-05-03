const deviceSize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

const mediaQueriesMaxWidth = {
  mobileS: `(max-width: ${deviceSize.mobileS}px)`,
  mobileM: `(max-width: ${deviceSize.mobileM}px)`,
  mobileL: `(max-width: ${deviceSize.mobileL}px)`,
  tablet: `(max-width: ${deviceSize.tablet}px)`,
  laptop: `(max-width: ${deviceSize.laptop}px)`,
  laptopL: `(max-width: ${deviceSize.laptopL}px)`,
  desktop: `(max-width: ${deviceSize.desktop}px)`,
};
const mediaQueriesMinWidth = {
  mobileS: `(min-width: ${deviceSize.mobileS}px)`,
  mobileM: `(min-width: ${deviceSize.mobileM}px)`,
  mobileL: `(min-width: ${deviceSize.mobileL}px)`,
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  laptop: `(min-width: ${deviceSize.laptop}px)`,
  laptopL: `(min-width: ${deviceSize.laptopL}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
};

const getDeviceDimensions = () => {
  const deviceHeight = window.innerHeight;
  const deviceWidth = window.innerWidth;

  return {
    deviceHeight,
    deviceWidth,
  };
};

export {
  getDeviceDimensions,
  deviceSize,
  mediaQueriesMaxWidth,
  mediaQueriesMinWidth,
};
