export interface ICardsProductInterface{
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  isFavorite: boolean;
}
export interface firstProductVersion{
  limit: number;
  products: ICardsProductInterface[];
  skip: number;
  total: number;
}

