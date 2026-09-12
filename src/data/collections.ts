import doors from "@/assets/mat-doors.jpg";
import doorsGallery1 from "@/assets/Collection/Doors/01.png";
import doorsGallery2 from "@/assets/Collection/Doors/02.png";
import doorsGallery3 from "@/assets/Collection/Doors/03.png";
import doorsGallery4 from "@/assets/Collection/Doors/04.png";
import stone from "@/assets/mat-stone.jpg";
import stoneGallery1 from "@/assets/Collection/Natural Stone Veneer/01.jpeg";
import stoneGallery2 from "@/assets/Collection/Natural Stone Veneer/02.jpeg";
import stoneGallery3 from "@/assets/Collection/Natural Stone Veneer/03.jpeg";
import stoneGallery4 from "@/assets/Collection/Natural Stone Veneer/04.jpeg";
import laminate from "@/assets/mat-laminate.jpg";
import laminateGallery1 from "@/assets/Collection/Laminate with MDF Press/01.jpeg";
import laminateGallery2 from "@/assets/Collection/Laminate with MDF Press/02.jpeg";
import laminateGallery3 from "@/assets/Collection/Laminate with MDF Press/03.jpeg";
import laminateGallery4 from "@/assets/Collection/Laminate with MDF Press/04.jpeg";
import wallart from "@/assets/mat-wallart.jpg";
import wallartGallery1 from "@/assets/Collection/3D Layered Wall Art/01.png";
import wallartGallery2 from "@/assets/Collection/3D Layered Wall Art/02.png";
import wallartGallery3 from "@/assets/Collection/3D Layered Wall Art/03.png";
import wallartGallery4 from "@/assets/Collection/3D Layered Wall Art/04.png";
import panelsGallery1 from "@/assets/Collection/Panels/01.jpeg";
import panelsGallery2 from "@/assets/Collection/Panels/02.jpeg";
import panelsGallery3 from "@/assets/Collection/Panels/03.png";
import panelsGallery4 from "@/assets/Collection/Panels/04.png";
import wpcGallery1 from "@/assets/Collection/WPC Century/01.png";
import wpcGallery2 from "@/assets/Collection/WPC Century/02.jpeg";
import wpcGallery3 from "@/assets/Collection/WPC Century/03.jpg";
import wpcGallery4 from "@/assets/Collection/WPC Century/04.jpg";
import lock1 from "@/assets/Collection/Digital Locks/01.jpeg";
import lock2 from "@/assets/Collection/Digital Locks/02.jpeg";
import lock3 from "@/assets/Collection/Digital Locks/03.jpeg";
import lock4 from "@/assets/Collection/Digital Locks/04.jpeg";

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
    title: "Doors",
    short: "Custom solid wood entrance doors, carved or plain",
    description:
      "Custom solid wood entrance doors in Modern or Heritage styles, finished with a natural transparent wood polish that lets the grain and character of the timber show through. Doors can be supplied plain or with deep carved and CNC-routed decorative patterns — geometric, mandala or radial — paired with a matching solid wood door jamb for a complete entrance solution.",
    image: doors,
    gallery: [doorsGallery1, doorsGallery2, doorsGallery3, doorsGallery4],
    galleryCaptions: ["Design 01", "Design 02", "Design 03", "Design 04"],
    material: "Solid natural wood, with matching solid wood door jamb/frame",
    format:
      "Single: 1000×2400 / 1100×2400 / 1200×2400 mm — Double: 400+1100, 900+900 or 1000+1000 × 2400 mm",
    finishes: ["Natural", "Teak", "Walnut", "Dark Walnut"],
    applications: ["Main entrance doors", "Heritage & carved feature doors", "Luxury villas and hotels"],
    customisation:
      "One-side or both-side customised carving, style (Modern/Heritage), size and wood species available on request.",
    scale: "tall",
  },
  {
    id: "natural-stone-veneer",
    index: "02",
    title: "Stone Slice",
    short: "Authentic stone surface with organic mineral formations",
    description:
      "A thin sheet of real stone, split from the block so that every panel carries its own mineral movement. Flexible enough for curved surfaces, honest enough to read as solid rock.",
    image: stone,
    gallery: [stoneGallery1, stoneGallery2, stoneGallery3, stoneGallery4],
    galleryCaptions: ["Slab", "Doors", "Feature wall", "Wall panel"],
    material: "100% natural stone veneer, honed finish",
    format: "600 × 1200 mm / 1200 × 2400 mm",
    finishes: ["Natural / Honed", "Charcoal Grey", "Beige", "Earthy natural tones"],
    applications: [
      "Feature & statement walls",
      "TV and entertainment walls",
      "Reception and commercial interiors",
      "Kitchen and cabinetry accents",
      "Columns and decorative surfaces",
    ],
    customisation:
      "Sheet size and tone selected from batch samples; every panel is naturally one-of-a-kind.",
    scale: "tall",
  },
  {
    id: "laminate-mdf-press",
    index: "03",
    title: "Laminates (Winston)",
    short: "Decorative laminate pressed onto 6 mm MDF",
    description:
      "Premium decorative laminate permanently pressed to a 6 mm MDF substrate — a flat, stable sheet ready for panelling, joinery and large-format wall work. Photographed here in the Winston Ply·Lam·Veneer sample range.",
    image: laminate,
    gallery: [laminateGallery1, laminateGallery2, laminateGallery3, laminateGallery4],
    galleryCaptions: ["Sample 01", "Sample 02", "Sample 03", "Sample 04"],
    material: "Decorative laminate factory-pressed onto 6 mm MDF core",
    format: "6 mm × 1200 × 2400 mm",
    finishes: ["Woodgrain", "Stone-effect", "Solid colours", "Textured"],
    applications: [
      "Wall panelling",
      "Feature walls",
      "Furniture panels",
      "Wardrobes & cabinetry",
      "Kitchen and pantry",
      "Office interiors",
      "Retail and hospitality fit-outs",
      "Decorative partitions",
    ],
    customisation: "Any laminate décor pressed to order; edges banded on request.",
    scale: "wide",
  },
  {
    id: "layered-wall-art",
    index: "04",
    title: "Wall Decorative",
    short: "The layered mandala collection",
    description:
      "Ten individually cut layers, stacked and aligned by hand so the pattern gains depth as light moves across it. A drawing that becomes relief.",
    image: wallart,
    gallery: [wallartGallery1, wallartGallery2, wallartGallery3, wallartGallery4],
    galleryCaptions: ["Mandala", "Tree of life", "Radial mandala", "Custom design"],
    material: "New Zealand Pine MDF, laser-cut and hand-assembled with Fevicol adhesive",
    format: "10 layers × 2.7 mm — 25–30 mm overall thickness",
    finishes: ["Natural wood stain", "Multi-colour spray finish", "Clear PU coating"],
    applications: [
      "Feature walls",
      "Entrance foyers",
      "Hotel and hospitality interiors",
      "Restaurant & café feature walls",
      "Headboards",
    ],
    customisation: "Pattern, diameter, layer count and colour combination developed with the studio.",
    scale: "square",
  },
  {
    id: "acoustic-wall-panels",
    index: "05",
    title: "Panels",
    short: "MDF and PET acoustic panel range",
    description:
      "A range of MDF and PET acoustic and decorative wall panels spanning six supplier lines — Luminous MDF, MDF Wall Panel, MDF-LED Acoustic Accessories, PET Acoustic, MDF Acoustic, and the MONOSO KOR-SA solid line. Full brochure specification available on request.",
    image: panelsGallery1,
    gallery: [panelsGallery1, panelsGallery2, panelsGallery3, panelsGallery4],
    galleryCaptions: ["MDF wall panel", "PET acoustic", "MDF acoustic", "Luminous MDF"],
    material: "MDF / PET acoustic core with decorative or luminous surface finish (line-dependent)",
    format: "Panel sizes vary by line — supplied to project specification",
    finishes: ["Luminous MDF", "MDF Wall Panel", "PET Acoustic", "MDF Acoustic", "MONOSO KOR-SA Solid"],
    applications: [
      "Acoustic wall treatment",
      "Ceilings",
      "Home theatres & studios",
      "Office and hospitality interiors",
    ],
    customisation: "Line, panel size and finish confirmed against the supplier catalogue for the project.",
    scale: "wide",
  },
  {
    id: "wpc-pvc-doors",
    index: "06",
    title: "WPC Century",
    short: "Moisture-resistant doors, frames and louvers",
    description:
      "Built for bathrooms, utilities and coastal air. Waterproof, termite and rot resistant, and finished to sit quietly beside timber joinery. The range spans matching door frames, embossed finishes and the Century Louvers, NAP and Timberbeat door lines.",
    image: wpcGallery1,
    gallery: [wpcGallery1, wpcGallery2, wpcGallery3, wpcGallery4],
    galleryCaptions: ["Timberbeat door", "Century Louvers", "Embossed — Falls", "Embossed — Bricks"],
    material: "Waterproof, termite and rot resistant WPC / PVC composite",
    format:
      "700×2100, 750×2100, 800×2100, 850×2100, 900×2100, 1000×2100 or 1000×2400 mm — custom width, height and thickness available",
    finishes: ["White", "Ivory", "Teak", "Walnut", "Oak", "Mahogany", "Dark Walnut", "Woodgrain", "Solid colours"],
    applications: [
      "Main entrance doors",
      "Bedroom doors",
      "Bathroom & toilet doors",
      "Kitchen & pantry areas",
      "Laundry areas",
      "Office doors",
    ],
    customisation: "CNC routing, decorative grooves, colour and custom sizing to specification.",
    scale: "tall",
  },
  {
    id: "digital-locks",
    index: "07",
    title: "Digital Locks",
    short: "Smart entry hardware for main doors",
    description:
      "Smart lock hardware built to pair with a Woodtek entrance door — fingerprint, PIN code, RFID card and mobile app entry, so the door reads as solid wood while opening like a modern front door.",
    image: lock1,
    gallery: [lock1, lock2, lock3, lock4],
    galleryCaptions: ["Model 01", "Model 02", "Model 03", "Model 04"],
    material: "Metal body smart lock with biometric and electronic entry modules",
    format: "Standard door lock cutout — fitted to the specified door thickness",
    finishes: ["Matte Black / Rose Gold", "Matte Black / Gunmetal"],
    applications: ["Main entrance doors", "Villas and apartments", "Hotel guest rooms"],
    customisation: "Entry modes, finish and mounting confirmed against the door it pairs with.",
    scale: "square",
  },
];
