import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  FileText, LayoutGrid, UserRound, Sparkles, History, ShieldCheck, Github,
  Upload, MapPin, Pencil, Plus, Briefcase, AlertCircle, ExternalLink, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Master Profile — CV Tailor AI" },
      { name: "description", content: "Your single source of truth for experience, projects and skills." },
      { property: "og:title", content: "Master Profile — CV Tailor AI" },
      { property: "og:description", content: "Centralize your work history and generate tailored CVs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MasterProfile,
});

const nav = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Master Profile", icon: UserRound, active: true },
  { label: "Generate Tailored CV", icon: Sparkles },
  { label: "Past Generations", icon: History },
  { label: "Account & GDPR", icon: ShieldCheck },
];

function Sidebar({ onClose }: { onClose?: () => void }) {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-sidebar-border bg-sidebar p-6">
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <span className="font-display text-sm font-bold">CV</span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">CV Tailor</span>
        </div>
        {onClose && (
          <button onClick={onClose} aria-label="Close menu" className="lg:hidden text-muted-foreground">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Workspace</p>
      <nav className="space-y-1">
        {nav.map(({ label, icon: Icon, active }) => (
          <a
            key={label}
            href="#"
            className={
              active
                ? "flex items-center gap-3 rounded-lg border border-border bg-sidebar-accent px-3 py-2.5 text-sm font-medium shadow-paper"
                : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground"
            }
          >
            <Icon className={active ? "h-4 w-4 text-primary" : "h-4 w-4"} />
            {label}
          </a>
        ))}
      </nav>

      <p className="mb-3 mt-10 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Integrations</p>
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-medium"><Github className="h-4 w-4" /> GitHub Sync</span>
          <span className="h-2 w-2 rounded-full bg-primary" />
        </div>
        <p className="mt-1 text-xs text-muted-foreground">Ready to sync</p>
      </div>

      <div className="mt-auto border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-semibold text-accent-foreground">P</div>
          <div className="leading-tight">
            <p className="text-sm font-medium">Grounded pipeline</p>
            <p className="text-xs text-muted-foreground">Anti-hallucination · v1.0</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function SectionHeader({ icon: Icon, title, action }: { icon: typeof Briefcase; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-8">
      <h2 className="flex items-center gap-3 text-lg font-semibold">
        <Icon className="h-5 w-5 text-primary" /> {title}
      </h2>
      {action}
    </div>
  );
}

const ghostBtn = "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-foreground/40";
const primaryBtn = "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 active:scale-[0.98]";

function MasterProfile() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <div className="sticky top-0 hidden h-screen lg:block"><Sidebar /></div>
      {open && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <Sidebar onClose={() => setOpen(false)} />
          <button aria-label="Close menu" className="flex-1 bg-foreground/20" onClick={() => setOpen(false)} />
        </div>
      )}

      <main className="flex-1 px-5 py-8 sm:px-10 lg:py-12">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <button onClick={() => setOpen(true)} className="mb-4 lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Master Profile</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Your career, in one place.</h1>
              <p className="mt-2 text-muted-foreground">Everything here feeds every tailored CV you generate.</p>
            </div>
          </div>

          {/* Import banner */}
          <section className="paper-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Already have a CV?</h2>
                <p className="mt-1 max-w-lg text-sm text-muted-foreground">
                  Upload it to pre-fill your experience, education, skills and details. You review everything before it's saved.
                </p>
              </div>
            </div>
            <button className={primaryBtn}>Import from CV</button>
          </section>

          {/* Personal details */}
          <section className="paper-card overflow-hidden">
            <SectionHeader icon={UserRound} title="Personal Details" action={<button className={ghostBtn}><Pencil className="h-3.5 w-3.5" /> Edit</button>} />
            <dl className="grid gap-x-12 gap-y-6 p-6 sm:grid-cols-2 sm:p-8">
              {[
                ["Full name", "No name set"],
                ["Headline", "No headline set"],
                ["Location", "No location set"],
                ["Summary", "No professional summary set."],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-dashed border-border pb-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1.5 flex items-center gap-1.5 italic text-muted-foreground">
                    {k === "Location" && <MapPin className="h-3.5 w-3.5 text-primary" />}
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Integrations */}
          <div className="grid gap-6 md:grid-cols-2">
            <section className="paper-card flex flex-col p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-lg font-semibold"><Github className="h-5 w-5" /> GitHub Repositories</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Connect the GitHub App to import your non-fork repositories as projects. Hand-edited (locked) projects are never overwritten.
              </p>
              <button className={`${primaryBtn} mt-6 self-start`}><ExternalLink className="h-4 w-4" /> Connect GitHub</button>
            </section>

            <section className="paper-card flex flex-col p-6 sm:p-8">
              <h2 className="flex items-center gap-3 text-lg font-semibold"><Upload className="h-5 w-5" /> LinkedIn Data Import</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Upload the ZIP from LinkedIn → Settings → Data privacy → <em>Get a copy of your data</em>. Imports positions, education and skills.
              </p>
              <div className="mt-6 flex gap-2">
                <label className="flex flex-1 cursor-pointer items-center justify-between gap-2 truncate rounded-md border border-dashed border-border bg-muted px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary">
                  <span className="truncate">{file ?? "No file chosen"}</span>
                  <span className="font-medium text-primary">Choose</span>
                  <input type="file" accept=".zip" className="hidden" onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)} />
                </label>
                <button disabled={!file} className={`${ghostBtn} disabled:cursor-not-allowed disabled:opacity-50`}>Import</button>
              </div>
            </section>
          </div>

          {/* Work experience */}
          <section className="paper-card overflow-hidden">
            <SectionHeader
              icon={Briefcase}
              title="Work Experience"
              action={<button className={ghostBtn}><Plus className="h-4 w-4" /> Add Experience</button>}
            />
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  Cannot reach the API at <code className="rounded bg-destructive/10 px-1 font-mono text-xs">http://localhost:8000</code>. Is the backend running?
                </p>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">No positions yet — add one or import your CV to get started.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
