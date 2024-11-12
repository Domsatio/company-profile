export type Product = {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    published: boolean;
};

export type UpdateProduct = Omit<Product, "id">;

export type GetProduct = Pick<Product, "id" | "name" | "description" | "thumbnail" | "published"> & {
    createdAt: string;
};