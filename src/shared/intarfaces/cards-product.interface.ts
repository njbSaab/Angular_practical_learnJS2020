export interface CardsProductInterface{
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
  products: CardsProductInterface[];
  skip: number;
  total: number;
}

