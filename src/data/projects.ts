import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import feature from "@/assets/feature-residence.jpg";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
  materials: string[];
  note: string;
};

// PLACEHOLDER project names and locations — replace with real commissions.
export const projects: Project[] = [
  {
    id: "residence-ahmedabad",
    title: "Residence / Ahmedabad",
    location: "Ahmedabad, IN",
    category: "Luxury Residential",
    year: "2025",
    image: feature,
    materials: ["Solid teak", "Stone veneer", "Brass"],
    note: "A timber entrance set into split-face stone, lit so the material does the talking.",
  },
  {
    id: "villa-alibaug",
    title: "Villa / Alibaug",
    location: "Alibaug, IN",
    category: "Villas",
    year: "2025",
    image: p1,
    materials: ["Fluted teak", "Stone", "Linen"],
    note: "Full-height fluted panelling wrapping a double-height living volume.",
  },
  {
    id: "restaurant-bandra",
    title: "Restaurant / Bandra",
    location: "Mumbai, IN",
    category: "Restaurants",
    year: "2024",
    image: p2,
    materials: ["Dark walnut louvers", "Stone", "Brass"],
    note: "A walnut slat ceiling that lowers the room and warms the light.",
  },
  {
    id: "workplace-gift-city",
    title: "Workplace / GIFT City",
    location: "Gandhinagar, IN",
    category: "Offices",
    year: "2024",
    image: p3,
    materials: ["Oak laminate", "Stone", "Steel"],
    note: "A single oak plane behind a monolithic stone desk.",
  },
  {
    id: "retail-jaipur",
    title: "Retail / Jaipur",
    location: "Jaipur, IN",
    category: "Retail",
    year: "2024",
    image: p4,
    materials: ["Layered pine relief", "Plaster", "Oak"],
    note: "Carved layered panels composed as a single shifting wall.",
  },
];

export const projectCategories = [
  "All",
  "Luxury Residential",
  "Villas",
  "Restaurants",
  "Offices",
  "Retail",
];
