import {delay, Observable, of} from "rxjs";
import {ICardsProductInterface} from "./shared/intarfaces/cards-product.interface";

export const products = [

  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    isFavorite: false,
    thumbnail:
      'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
  },
  {
    id: 2,
    title: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    isFavorite: false,
    thumbnail: 'https://t2.tudocdn.net/679551?w=824&h=494',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    ],
  },
  {
    id: 3,
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: 'OPPO',
    category: 'smartphones',
    isFavorite: true,
    thumbnail:
      'https://m-cdn.phonearena.com/images/hub/216-wide-two_1200/iPhone-15-release-date-predictions-price-specs-and-must-know-features.jpg',
    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',
      'https://i.dummyjson.com/data/products/4/2.jpg',
      'https://i.dummyjson.com/data/products/4/3.jpg',
      'https://i.dummyjson.com/data/products/4/4.jpg',
      'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    ],
  },
  {
    id: 4,
    title: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    isFavorite: true,
    thumbnail:
      'https://newsnreleases.com/wp-content/uploads/2023/07/image-14044444.jpg',
    images: [
      'https://i.dummyjson.com/data/products/3/1.jpg',
      'https://i.dummyjson.com/data/products/3/2.jpg',
      'https://i.dummyjson.com/data/products/3/3.jpg',
    ],
  },
];

export const  products$: Observable<ICardsProductInterface[]>=of(products).pipe(delay(1500))
