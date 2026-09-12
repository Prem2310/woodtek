import doors from "@/assets/mat-doors.jpg";
import doorsGallery1 from "@/assets/Collection/Doors/01.png";
import doorsGallery2 from "@/assets/Collection/Doors/02.png";
import doorsGallery3 from "@/assets/Collection/Doors/03.png";
import doorsGallery4 from "@/assets/Collection/Doors/04.png";
import stone from "@/assets/mat-stone.jpg";
import louver from "@/assets/mat-louver.jpg";
import laminate from "@/assets/mat-laminate.jpg";
import wallart from "@/assets/mat-wallart.jpg";
import board from "@/assets/mat-board.jpg";
import wpc from "@/assets/mat-wpc.jpg";
import swing from "@/assets/mat-swing.jpg";

export type Collection = {
  id: string;
  index: string;
  title: string;
  short: string;
  description: string;
  image: string;
  material: string;
  format: string;
  finishes: string[];
  applications: string[];
  customisation: string;
  scale: "tall" | "wide" | "square";
  /** Optional detail/texture/installed shots for the product gallery. */
  gallery?: string[];
  /** Optional captions for `gallery`, aligned by index. Falls back to generic labels. */
  galleryCaptions?: string[];
};

export const collections: Collection[] = [
  {
    id: "solid-wood-doors",
    index: "01",
    title: "Solid Wood Doors",
    short: "3D carved solid wood doors with integrated smart lock",
    description:
      "A collection of ten 3D carved solid wood entrance doors — WMD 2 through WMD 10 — each fine-sanded, sealer-coated and finished by hand over a waterproof flush-door core. Every door is built with an integrated smart lock: fingerprint, PIN code, RFID card, mobile app and a built-in video doorbell, fully customised to the opening.",
    image: doors,
    gallery: [doorsGallery1, doorsGallery2, doorsGallery3, doorsGallery4],
    galleryCaptions: ["Design 01", "Design 02", "Design 03", "Design 04"],
    material: "Solid wood over a 30 mm waterproof flush-door core",
    format: "40–70 mm overall thickness / fully custom size",
    finishes: ["Natural", "Stained", "Teak Wood", "Walnut Wood", "Dark Oak"],
    applications: ["Main entrance doors", "Smart entry doors", "3D carved feature doors"],
    customisation:
      "10 carved design models (WMD 2 – WMD 10), thickness, size, wood finish and integrated smart lock specified per project.",
    scale: "tall",
  },
  {
    id: "natural-stone-veneer",
    index: "02",
    title: "Natural Stone Veneer",
    short: "Authentic stone surface with organic mineral formations",
    description:
      "A thin sheet of real stone, split from the block so that every panel carries its own mineral movement. Flexible enough for curved surfaces, honest enough to read as solid rock.",
    image: stone,
    material: "Natural stone veneer",
    format: "600 × 1200 mm / 1200 × 2400 mm",
    finishes: ["Charcoal", "Grey", "Beige", "Earthy natural tones"],
    applications: ["Feature walls", "Entrance cladding", "Reception counters", "Fireplaces"],
    customisation: "Sheet sizes cut to layout; tone selected from batch samples.",
    scale: "tall",
  },
  {
    id: "charcoal-louvers",
    index: "03",
    title: "Charcoal Louvers",
    short: "Modern fluted and ribbed architectural panels",
    description:
      "Vertical slat panels that turn a flat wall into rhythm and shadow. Installed floor to ceiling, they give a room proportion before a single object is placed in it.",
    image: louver,
    material: "Engineered wood louver panel",
    format: "152 × 2896 mm (approx.)",
    finishes: ["Charcoal", "Dark Walnut", "Natural Wood", "Brown", "Oak", "Metallic Wood"],
    applications: ["Feature walls", "Ceilings", "Partitions", "Headboards", "Reception"],
    customisation: "Slat rhythm, height and finish set to the elevation.",
    scale: "wide",
  },
  {
    id: "laminate-mdf-press",
    index: "04",
    title: "Laminate with MDF Press",
    short: "Decorative laminate pressed onto 6 mm MDF",
    description:
      "Premium decorative laminate permanently pressed to a 6 mm MDF substrate — a flat, stable sheet ready for panelling, joinery and large-format wall work.",
    image: laminate,
    material: "Decorative laminate on 6 mm MDF",
    format: "1200 × 2400 mm",
    finishes: ["Woodgrain", "Solid", "Textured", "Matt", "Suede"],
    applications: [
      "Wall panelling",
      "Feature walls",
      "Furniture",
      "Wardrobes",
      "Kitchens",
      "Offices",
      "Retail",
      "Hospitality",
    ],
    customisation: "Any laminate décor pressed to order; edges banded on request.",
    scale: "wide",
  },
  {
    id: "layered-wall-art",
    index: "05",
    title: "3D Layered Decorative Wall Art",
    short: "The layered mandala collection",
    description:
      "Ten individually cut layers, stacked and aligned by hand so the pattern gains depth as light moves across it. A drawing that becomes relief.",
    image: wallart,
    material: "New Zealand Pine MDF",
    format: "10 layers × 2.7 mm — 25–30 mm overall",
    finishes: ["Natural", "Stained", "Painted", "Two-tone"],
    applications: ["Feature walls", "Entrance lobbies", "Headboards", "Hospitality"],
    customisation: "Diameter, layer count and pattern developed with the studio.",
    scale: "square",
  },
  {
    id: "pre-laminated-particle-board",
    index: "06",
    title: "Pre-Laminated Particle Board",
    short: "16 mm premium pre-laminated board",
    description:
      "A dependable 16 mm board finished on both faces, held in a deep run of wood tones and neutrals for cabinetry and fit-out work at volume.",
    image: board,
    material: "16 mm pre-laminated particle board",
    format: "1220 × 2440 mm",
    finishes: [
      "Walnut",
      "Natural Oak",
      "Burma Oak",
      "Light Oak",
      "Dark Oak",
      "Teak",
      "Natural Wood",
      "Pine",
      "Ash",
      "Elm",
      "Maple",
      "Cherry",
      "Wenge",
      "Mahogany",
      "Smoked Wood",
      "Charcoal",
      "Grey",
      "White",
    ],
    applications: ["Wardrobes", "Kitchens", "Storage", "Office furniture", "Retail fixtures"],
    customisation: "Cut-to-size panels and matching edge bands.",
    scale: "wide",
  },
  {
    id: "wpc-pvc-doors",
    index: "07",
    title: "WPC / PVC Doors",
    short: "Moisture-resistant doors for demanding rooms",
    description:
      "Built for bathrooms, utilities and coastal air. Waterproof, termite and rot resistant, and finished to sit quietly beside timber joinery.",
    image: wpc,
    material: "WPC / PVC composite",
    format: "Standard and made to opening",
    finishes: ["Woodgrain", "Solid colours", "CNC decorative"],
    applications: ["Bathrooms", "Utility", "Balconies", "Rental and hospitality rooms"],
    customisation: "CNC routing patterns, colour and hardware to specification.",
    scale: "tall",
  },
  {
    id: "solid-wood-swings",
    index: "08",
    title: "Handmade Solid Wood Swings",
    short: "Luxury handcrafted solid wood swings",
    description:
      "The jhula, reconsidered. Solid hardwood seat, hand-shaped arms, brass suspension — made to hang in a veranda, a courtyard or a double-height living room.",
    image: swing,
    material: "Solid hardwood",
    format: "1800 × 900 × 2100 mm (approx.)",
    finishes: ["Teak", "Oak", "Walnut", "Mahogany", "Natural hardwood"],
    applications: ["Verandas", "Courtyards", "Living rooms", "Hotel lobbies"],
    customisation: "Seat size, carving, upholstery and suspension detailed to order.",
    scale: "wide",
  },
];
