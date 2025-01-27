export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  beds: number;
  baths: number;
  guests: number;
}

export interface SearchFilters {
  location: string;
  guests: number;
  priceRange: [number, number];
}