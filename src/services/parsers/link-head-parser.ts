const parseLinkHeader: any = (header: any) => {
  if (header.length === 0) {
    throw new Error('input must not be of zero length');
  }
  const links: any = {};
  try {
    // Split parts by comma
    const parts = header.split(',');
    // Parse each part into a named link
    for (let i = 0; i < parts.length; i++) {
      const section = parts[i].split(';');
      if (section.length !== 2) {
        throw new Error("section could not be split on ';'");
      }
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    }
  } catch (e) {
    throw new Error('input is not correct');
  }
  return links;
};

export default parseLinkHeader;
