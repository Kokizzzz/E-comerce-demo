export type Category = {
  id: string; // this will match product.category
  label: string;
  items: { label: string; href: string }[];
};

export const categories: Category[] = [
  {
    id: "electronics",
    label: "Electronics",
    items: [
      { label: "Computers & Laptops", href: "/?cat=electronics&q=laptop" },
      { label: "Headphones", href: "/?cat=electronics&q=headphones" },
      { label: "Speakers", href: "/?cat=electronics&q=speaker" },
      { label: "Mouse & Keyboard", href: "/?cat=electronics&q=mouse" },
      { label: "Monitors", href: "/?cat=electronics&q=monitor" },
      { label: "Smart Home", href: "/?cat=electronics&q=smart" },
    ],
  },
  {
    id: "clothing",
    label: "Clothing",
    items: [
      { label: "T-Shirts", href: "/?cat=clothing&q=t-shirt" },
      { label: "Hoodies", href: "/?cat=clothing&q=hoodie" },
      { label: "Jackets", href: "/?cat=clothing&q=jacket" },
      { label: "Shoes", href: "/?cat=clothing&q=shoes" },
      { label: "Activewear", href: "/?cat=clothing&q=active" },
      { label: "Accessories", href: "/?cat=clothing&q=cap" },
    ],
  },
  {
    id: "home",
    label: "Home & Kitchen",
    items: [
      { label: "Kitchen", href: "/?cat=home&q=kitchen" },
      { label: "Lighting", href: "/?cat=home&q=lamp" },
      { label: "Decor", href: "/?cat=home&q=decor" },
      { label: "Bedding", href: "/?cat=home&q=pillow" },
      { label: "Storage", href: "/?cat=home&q=storage" },
      { label: "Furniture", href: "/?cat=home&q=chair" },
    ],
  },
  {
    id: "sports",
    label: "Sports",
    items: [
      { label: "Fitness", href: "/?cat=sports&q=fitness" },
      { label: "Outdoor", href: "/?cat=sports&q=outdoor" },
      { label: "Running", href: "/?cat=sports&q=running" },
      { label: "Cycling", href: "/?cat=sports&q=cycling" },
      { label: "Gym Gear", href: "/?cat=sports&q=dumbbell" },
      { label: "Sportswear", href: "/?cat=sports&q=active" },
    ],
  },
  {
    id: "books",
    label: "Books",
    items: [
      { label: "Best Sellers", href: "/?cat=books&q=bestseller" },
      { label: "Business", href: "/?cat=books&q=business" },
      { label: "Fiction", href: "/?cat=books&q=fiction" },
      { label: "Productivity", href: "/?cat=books&q=productivity" },
      { label: "Tech", href: "/?cat=books&q=tech" },
      { label: "Self-Help", href: "/?cat=books&q=habits" },
    ],
  },
];
