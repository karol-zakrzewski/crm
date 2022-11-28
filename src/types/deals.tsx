export interface Deal {
  id: string;
  name: string;
  closeDate: string;
  openDate: string;
  source: string;
  company: any;
  contact: any;
  products: Product[];
}

interface Product {
  name: string;
  price: number;
  quantity: number;
}
