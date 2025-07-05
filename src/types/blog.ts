export interface Blog {
  objectId: string;
  category: string;
  content: string;
  created: number; // Timestamp (e.g., from Date.now())
  description: string;
  ownerId: string | null;
  thumbnail: string;
  title: string;
  updated: number | null;
  ___class: string; // biasanya bisa di-set sebagai literal: "Blogs"
}
