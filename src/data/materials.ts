import wood from "@/assets/mat-wood.jpg";
import stone from "@/assets/mat-stone.jpg";
import louver from "@/assets/mat-louver.jpg";
import laminate from "@/assets/mat-laminate.jpg";
import board from "@/assets/mat-board.jpg";
import wallart from "@/assets/mat-wallart.jpg";
import doors from "@/assets/mat-doors.jpg";
import swing from "@/assets/mat-swing.jpg";

export type MaterialCategory = "Wood" | "Stone" | "Louver" | "Panel" | "Finish";

export type Material = {
  id: string;
  name: string;
  category: MaterialCategory;
  image: string;
  swatch: string;
  tone: "light" | "dark";
  spec: { label: string; value: string }[];
};

export const materials: Material[] = [
  {
    id: "teak",
    name: "Solid Teak",
    category: "Wood",
    image: wood,
    swatch: "#8f4e1a",
    tone: "dark",
    spec: [
      { label: "Material", value: "Natural solid teak" },
      { label: "Finish", value: "Natural / oiled" },
      { label: "Format", value: "Made to opening" },
      { label: "Application", value: "Doors / joinery" },
    ],
  },
  {
    id: "walnut",
    name: "Dark Walnut",
    category: "Wood",
    image: doors,
    swatch: "#4a2609",
    tone: "dark",
    spec: [
      { label: "Material", value: "Solid walnut" },
      { label: "Finish", value: "Matt lacquer" },
      { label: "Format", value: "Made to opening" },
      { label: "Application", value: "Entrance doors" },
    ],
  },
  {
    id: "charcoal-stone",
    name: "Charcoal Stone",
    category: "Stone",
    image: stone,
    swatch: "#33302b",
    tone: "dark",
    spec: [
      { label: "Material", value: "Natural stone veneer" },
      { label: "Finish", value: "Split face" },
      { label: "Format", value: "1200 × 2400 mm" },
      { label: "Application", value: "Feature cladding" },
    ],
  },
  {
    id: "beige-stone",
    name: "Beige Stone",
    category: "Stone",
    image: stone,
    swatch: "#beb2a0",
    tone: "light",
    spec: [
      { label: "Material", value: "Natural stone veneer" },
      { label: "Finish", value: "Honed" },
      { label: "Format", value: "600 × 1200 mm" },
      { label: "Application", value: "Reception / lobby" },
    ],
  },
  {
    id: "charcoal-louver",
    name: "Charcoal Louver",
    category: "Louver",
    image: louver,
    swatch: "#1a1815",
    tone: "dark",
    spec: [
      { label: "Material", value: "Fluted louver panel" },
      { label: "Finish", value: "Charcoal" },
      { label: "Format", value: "152 × 2896 mm" },
      { label: "Application", value: "Walls / ceilings" },
    ],
  },
  {
    id: "oak-louver",
    name: "Oak Louver",
    category: "Louver",
    image: louver,
    swatch: "#c07a3c",
    tone: "dark",
    spec: [
      { label: "Material", value: "Fluted louver panel" },
      { label: "Finish", value: "Natural oak" },
      { label: "Format", value: "152 × 2896 mm" },
      { label: "Application", value: "Partitions" },
    ],
  },
  {
    id: "laminate-oak",
    name: "Pressed Oak Laminate",
    category: "Panel",
    image: laminate,
    swatch: "#a85f24",
    tone: "dark",
    spec: [
      { label: "Material", value: "Laminate on 6 mm MDF" },
      { label: "Finish", value: "Matt woodgrain" },
      { label: "Format", value: "1200 × 2400 mm" },
      { label: "Application", value: "Wall panelling" },
    ],
  },
  {
    id: "layered-pine",
    name: "Layered Pine Relief",
    category: "Panel",
    image: wallart,
    swatch: "#ddb48a",
    tone: "light",
    spec: [
      { label: "Material", value: "New Zealand pine MDF" },
      { label: "Finish", value: "Natural" },
      { label: "Format", value: "10 layers × 2.7 mm" },
      { label: "Application", value: "Decorative wall art" },
    ],
  },
  {
    id: "prelam-wenge",
    name: "Wenge Pre-Lam",
    category: "Finish",
    image: board,
    swatch: "#2e1605",
    tone: "dark",
    spec: [
      { label: "Material", value: "16 mm pre-laminated board" },
      { label: "Finish", value: "Wenge" },
      { label: "Format", value: "1220 × 2440 mm" },
      { label: "Application", value: "Cabinetry" },
    ],
  },
  {
    id: "prelam-ash",
    name: "Ash Pre-Lam",
    category: "Finish",
    image: board,
    swatch: "#d3cabb",
    tone: "light",
    spec: [
      { label: "Material", value: "16 mm pre-laminated board" },
      { label: "Finish", value: "Ash" },
      { label: "Format", value: "1220 × 2440 mm" },
      { label: "Application", value: "Wardrobes" },
    ],
  },
  {
    id: "brass-inlay",
    name: "Brass Inlay",
    category: "Finish",
    image: swing,
    swatch: "#b08a4a",
    tone: "dark",
    spec: [
      { label: "Material", value: "Solid brass" },
      { label: "Finish", value: "Brushed" },
      { label: "Format", value: "3 / 6 / 12 mm" },
      { label: "Application", value: "Inlay and hardware" },
    ],
  },
  {
    id: "smoked-oak",
    name: "Smoked Oak",
    category: "Wood",
    image: wood,
    swatch: "#6b380f",
    tone: "dark",
    spec: [
      { label: "Material", value: "Smoked solid oak" },
      { label: "Finish", value: "Hard wax oil" },
      { label: "Format", value: "Made to size" },
      { label: "Application", value: "Furniture / swings" },
    ],
  },
];

export const materialCategories: MaterialCategory[] = [
  "Wood",
  "Stone",
  "Louver",
  "Panel",
  "Finish",
];
