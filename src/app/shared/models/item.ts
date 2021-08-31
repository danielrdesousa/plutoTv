import { ICategory } from './category';

export interface IItem {
  categoryId: string;
  category?: ICategory;
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  duration: number;
  originalContentDuration: number;
  rating: string;
  featuredImage: {
    path: string
  },
  genre: string;
  type: string;
  seasonsNumbers: number[];
  stitched: {
    path: string;
  },
  covers: ICover[],
  ratingDescriptors: string[];
};

interface ICover {
  url: string;
  aspectRatio: string;
}
