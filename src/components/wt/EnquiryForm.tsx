import { useState, type FormEvent } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please add a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.string().trim().max(80),
  material: z.string().trim().max(80),
  details: z.string().trim().min(1, "Tell us a little about the project").max(1500),
});

const projectTypes = [
  "Luxury Residential",
  "Villa",
  "Hospitality",
  "Restaurant",
  "Office",
  "Retail",
  "Other",
];

const materialInterests = [
  "Solid Wood Doors",
  "Natural Stone Veneer",
  "Charcoal Louvers",
  "Laminate with MDF Press",
  "3D Layered Wall Art",
  "Pre-Laminated Board",
  "WPC / PVC Doors",
  "Solid Wood Swings",
];

const fieldClass =
  "w-full border-0 border-b border-ivory/20 bg-transparent py-4 text-base text-ivory placeholder:text-ivory/35 focus:border-brass-400 focus:outline-none";

export function EnquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      material: String(fd.get("material") ?? ""),
      details: String(fd.get("details") ?? ""),
    });

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-ivory/20 px-8 py-20 text-center">
        <p className="eyebrow text-[10px] text-brass-400">Enquiry received</p>
        <h3 className="mt-6 font-display text-4xl font-light tracking-[-0.01em] text-ivory">
          Thank you.
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
          Your enquiry has been recorded on this page. The studio will be in touch once the
          enquiry inbox is connected.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-10 gap-y-2 md:grid-cols-2">
      <Field label="Name" error={errors["name"]}>
        <input name="name" className={fieldClass} placeholder="Your name" maxLength={100} />
      </Field>
      <Field label="Email" error={errors["email"]}>
        <input
          name="email"
          type="email"
          className={fieldClass}
          placeholder="you@studio.com"
          maxLength={255}
        />
      </Field>
      <Field label="Phone" error={errors["phone"]}>
        <input name="phone" className={fieldClass} placeholder="Optional" maxLength={40} />
      </Field>
      <Field label="Company" error={errors["company"]}>
        <input name="company" className={fieldClass} placeholder="Optional" maxLength={120} />
      </Field>
      <Field label="Project type" error={errors["projectType"]}>
        <select name="projectType" className={cn(fieldClass, "appearance-none")} defaultValue={projectTypes[0]}>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-forest-950">
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Material interest" error={errors["material"]}>
        <select name="material" className={cn(fieldClass, "appearance-none")} defaultValue={materialInterests[0]}>
          {materialInterests.map((t) => (
            <option key={t} value={t} className="bg-forest-950">
              {t}
            </option>
          ))}
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field label="Project details" error={errors["details"]}>
          <textarea
            name="details"
            rows={4}
            maxLength={1500}
            className={cn(fieldClass, "resize-none")}
            placeholder="Scope, location, timeline"
          />
        </Field>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          data-cursor="link"
          className="eyebrow group mt-8 inline-flex items-center gap-3 bg-ivory px-8 py-4 text-forest-900 transition-colors hover:bg-brass-400"
        >
          Send enquiry
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block py-4">
      <span className="spec block text-[10px] text-ivory/45">{label}</span>
      {children}
      {error && <span className="spec mt-2 block text-[10px] text-teak-300">{error}</span>}
    </label>
  );
}
