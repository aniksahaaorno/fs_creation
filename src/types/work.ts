export interface ICategory {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
}

export interface IWork {
  _id: string;
  title: string;
  youtubeUrl: string;
  image: any;
  category: ICategory;
}