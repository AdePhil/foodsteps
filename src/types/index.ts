export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
