export const WORKS_QUERY = `
  *[_type == "work"]{
    _id,
    title,
    youtubeUrl,
    image,
    client,
    category->{
      _id,
      name,
      "slug": slug.current
    }
  }
`;