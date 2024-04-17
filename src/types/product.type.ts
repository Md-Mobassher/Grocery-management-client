export type TProduct = {
  _id: string;
  name: string;
  description?: string;
  discount?: string;
  status?: string;
  price: number;
  type?: string;
  size?: string;
  model?: string;

  previousPrice?: number;
  quantity?: number;
  category?: string[];
  imageUrl?: string[] | undefined;
  isActive?: boolean;
  tags?: string[];
  brand?: string;
  createdAt?: string;
  updatedAt?: string;
  isDeleted?: boolean;
};
