"use client";

import { useTheme } from "@/components/theme-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { NAV, SKILLS, PROJECTS, SOCIALS, CONTACT_EMAIL } from "@/lib/content";

const section = "max-w-5xl mx-auto px-7";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block"
      style={{
        textTransform: "var(--label-transform)" as React.CSSProperties["textTransform"],
        letterSpacing: "var(--label-tracking)",
        fontWeight: "var(--label-weight)" as unknown as number,
        fontSize: "var(--label-size)",
        color: "var(--accent)",
      }}
    >
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[12.5px] px-2.5 py-1"
      style={{
        background: "var(--tag-bg)",
        color: "var(--tag-text)",
        border: "1px solid var(--tag-border)",
        borderRadius: "var(--tag-radius)",
        fontFamily: "var(--font-body)",
      }}
    >
      {children}
    </span>
  );
}

function Button({
  children,
  filled = false,
  href = "#",
}: {
  children: React.ReactNode;
  filled?: boolean;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="inline-block text-sm font-semibold px-5 py-2.5 transition-colors"
      style={{
        borderRadius: "var(--radius)",
        border: "var(--border-w) solid var(--accent)",
        background: filled ? "var(--accent)" : "transparent",
        color: filled ? "var(--accent-text)" : "var(--accent)",
        fontFamily: "var(--font-body)",
      }}
    >
      {children}
    </a>
  );
}

function Nav() {
  const { theme } = useTheme();
  return (
    <div
      className="sticky top-0 z-40"
      style={{ background: "var(--bg)", borderBottom: "var(--border-w) solid var(--border)" }}
    >
      <div className={`${section} h-15 flex items-center justify-between py-3.5`}>
        <span
          className="text-lg font-bold"
          style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
        >
          {theme.prompt ? "markabir8@gmail.com" : "Marzooq Kabir"}
        </span>
        <div className="hidden sm:flex gap-6">
          {NAV.map((n) => (
            <a
              key={n}
              href={`#${n.toLowerCase()}`}
              className="text-[13.5px]"
              style={{
                color: "var(--muted)",
                textTransform: theme.labelTransform,
                letterSpacing: theme.labelTracking,
              }}
            >
              {n}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const { theme } = useTheme();
  const center = theme.hero === "center";

  if (theme.hero === "split") {
    return (
      <section className={`${section} pt-18 pb-16`}>
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 items-end">
          <div>
            <Label>Computer Engineering Student &amp; Developer</Label>
            <h1
              className="mt-5 text-5xl md:text-6xl leading-[1.04]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              I build software that works.
            </h1>
          </div>
          <div>
            <p
              className="text-base leading-7 pt-4"
              style={{ color: "var(--muted)", borderTop: "2px solid var(--accent)" }}
            >
              Full-stack developer shipping real products — from SaaS platforms to backend systems.
            </p>
            <div className="flex gap-3 mt-5">
              <Button filled href="#work">View Work</Button>
              <Button href="#contact">Contact</Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`${section} pt-18 pb-16`}>
      <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
        <Label>
          {theme.prompt ? "// " : ""}Computer Engineering Student &amp; Developer
        </Label>
        <h1
          className="mt-5 mb-4 leading-[1.05]"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text)",
            fontSize: theme.id === "noir" ? "4.6rem" : "clamp(2.8rem, 6vw, 4rem)",
          }}
        >
          {theme.prompt && (
            <span style={{ color: "var(--accent)" }}>{theme.prompt}</span>
          )}
          Hi, I&apos;m Marzooq Kabir.
        </h1>
        <p
          className={`text-[17px] leading-7 mb-7 ${center ? "mx-auto" : ""} max-w-xl`}
          style={{ color: "var(--muted)" }}
        >
          A full-stack developer focused on real-world web applications and AI. I design, build,
          and ship products for real users.
        </p>
        <div className={`flex gap-3 ${center ? "justify-center" : ""}`}>
          <Button filled href="#work">View Work</Button>
          <Button href="#contact">Contact</Button>
        </div>
      </div>
    </section>
  );
}

function Band({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <div
      id={id}
      style={{
        background: "var(--surface)",
        borderTop: "var(--border-w) solid var(--border)",
        borderBottom: "var(--border-w) solid var(--border)",
      }}
    >
      <div className="py-15">{children}</div>
    </div>
  );
}

function About() {
  return (
    <Band id="about">
      <div className={section}>
        <Label>About</Label>
        <p
          className="mt-5 text-2xl leading-relaxed max-w-3xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
        >
          A 300-level Computer Engineering student at Federal University Lokoja, building toward a
          career as an AI &amp; full-stack developer. I design, build, and ship — real products for
          real users.
        </p>
      </div>
    </Band>
  );
}

function Skills() {
  return (
    <section id="skills" className={`${section} py-15`}>
      <Label>Skills</Label>
      <div
        className="grid gap-7 mt-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}
      >
        {SKILLS.map((s) => (
          <div key={s.group}>
            <h3
              className="text-[15px] font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              {s.group}
            </h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {s.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const { theme } = useTheme();
  return (
    <Band id="work">
      <div className={section}>
        <Label>Selected Work</Label>
        <div className="grid gap-4.5 mt-6">
          {PROJECTS.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-5 p-6"
              style={{
                background: "var(--bg)",
                border: "var(--border-w) solid var(--border)",
                borderRadius: "var(--radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              {theme.numbered && (
                <span
                  className="text-2xl min-w-10"
                  style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <div className="flex-1">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-[15px] leading-relaxed mb-3.5"
                  style={{ color: "var(--muted)" }}
                >
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((x) => (
                    <Tag key={x}>{x}</Tag>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Band>
  );
}

function Contact() {
  return (
    <section id="contact" className={`${section} py-20 text-center`}>
      <Label>Contact</Label>
      <h2
        className="text-4xl mt-4 mb-3.5"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        Let&apos;s talk.
      </h2>
      <p className="max-w-md mx-auto mb-6 text-base" style={{ color: "var(--muted)" }}>
        Have a project or opportunity? I&apos;d love to hear from you.
      </p>
      <button
        onClick={() => window.open(`mailto:${CONTACT_EMAIL}`, "_blank")}
        className="inline-block text-sm font-semibold px-5 py-2.5 transition-colors cursor-pointer"
        style={{
          borderRadius: "var(--radius)",
          border: "var(--border-w) solid var(--accent)",
          background: "var(--accent)",
          color: "var(--accent-text)",
          fontFamily: "var(--font-body)",
        }}
      >
        Say Hello
      </button>
      <div
        className="flex gap-6 justify-center mt-7 text-[13.5px]"
        style={{ color: "var(--muted)" }}
      >
        {SOCIALS.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  const { theme } = useTheme();
  return (
    <div
      className="py-5.5 text-center text-[12.5px]"
      style={{ borderTop: "var(--border-w) solid var(--border)", color: "var(--muted)" }}
    >
      © {new Date().getFullYear()} Marzooq Kabir — currently &quot;{theme.name}&quot;
    </div>
  );
}

export function Portfolio() {
  return (
    <>
      <ThemeSwitcher />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
