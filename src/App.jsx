import React, { useState } from "react";
import {
  Mail,
  Instagram,
  Facebook,
  Briefcase,
  Wrench,
  Palette,
  Globe,
  Inbox,
  Wallet,
  Plane,
  ClipboardCheck,
  Menu,
  X,
} from "lucide-react";

function StatusPill({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy">
      <span className="h-1.5 w-1.5 rounded-full bg-navy" />
      {children}
    </span>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#szolgaltatasok", label: "Szolgáltatások" },
    { href: "#referenciak", label: "Referenciák" },
    { href: "#csomagok", label: "Csomagok" },
    { href: "#gyik", label: "GYIK" },
    { href: "#kapcsolat", label: "Kapcsolat" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-silver bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Greativo" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-extrabold tracking-tight text-navy">
            GREATIVO
          </span>
        </a>
        <ul className="hidden gap-8 text-sm font-medium text-charcoal/80 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#kapcsolat"
            className="hidden rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-accent sm:block sm:text-sm"
          >
            Kapcsolat
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center rounded-lg p-2 text-navy transition hover:bg-navy/5 sm:hidden"
            aria-label="Menü"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-silver bg-cream/95 px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-charcoal/80">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 transition hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#kapcsolat"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Kapcsolat
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <StatusPill>Adminisztrációs rend, garantáltan</StatusPill>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent">
        Greativo — Virtuális Asszisztencia
      </p>
      <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl">
        Rendezett adminisztráció, hogy te a szakmádra fókuszálhass
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80">
        Segítek coachoknak és tanácsadóknak rendet teremteni az
        adminisztrációban és az ügyfélkommunikációban, hogy a szakmai
        munkájukra fókuszálhassanak.
      </p>
      <a
        href="#kapcsolat"
        className="mt-8 inline-block rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent"
      >
        Kérek egy ingyenes állapotfelmérést
      </a>
    </section>
  );
}

const services = [
  {
    icon: Briefcase,
    title: "Üzleti Adminisztráció & CRM",
    items: [
      "Bejövő megkeresések kezelése és rendszerezése",
      "Számlázási adatok előkészítése, naptárkezelés és emlékeztetők",
      "Havi riportok készítése az elvégzett feladatokról",
    ],
    result: "→ Heti 5-8 órát kapsz vissza adminisztráció helyett",
  },
  {
    icon: Wrench,
    title: "Rendszerkarbantartás",
    items: [
      "A meglévő workspace (pl. Notion) folyamatos optimalizálása",
      "Adatbázisok frissítése, fájlok rendszerezése",
    ],
    result: "→ Mindig naprakész, átlátható rendszer a háttérben",
  },
  {
    icon: Palette,
    title: "Kreatív Támogatás & Design",
    items: [
      "Esztétikus Instagram, Facebook posztok és Storyk tervezése Canvában, márka-azonos színekkel és betűtípusokkal",
      "Professzionális PDF-ek, árlisták, prezentációk és digitális brossúrák készítése",
      "Átlátható táblázatok, naptárak és infografikák tervezése",
    ],
    result: "→ Egységes, profi márkamegjelenés külön dizájner nélkül",
  },
  {
    icon: Globe,
    title: "Extra: Lifestyle Management",
    items: [
      "Utazástervezés: repjegyek, szállások felkutatása, teljes útiterv készítése",
      "Privát asszisztencia: időpontfoglalások, kutatómunka",
    ],
    result: "→ Nem neked kell utánajárni — csak jóváhagyod",
  },
];

function Services() {
  return (
    <section id="szolgaltatasok" className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
      <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
        Szolgáltatások
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, items, result }) => (
          <div
            key={title}
            className="rounded-2xl border border-silver bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-accent">
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className="font-display text-lg font-semibold text-navy">
                {title}
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-charcoal/80">
              {items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            {result && (
              <p className="mt-4 text-sm font-semibold text-accent">{result}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const references = [
  {
    icon: Inbox,
    title: "Inbox & mappák",
    text: "Az operatív hatékonyság alapja a rend. Logikus, átlátható mappa- és dokumentumrendszer kialakítása, Inbox Zero módszerrel. Eredmény: kevesebb keresgélés, több fókuszált munkaidő.",
    images: ["/images/folders.png", "/images/gmail.png"],
  },
  {
    icon: Wallet,
    title: "Idő- és Pénzügyi Adminisztráció",
    text: "Számlázás rendszerezése, aktív naptárkezelés az ütközések elkerülésére. Eredmény: felszabadult mentális kapacitás, nem kell fejben tartani a határidőket.",
    images: ["/images/szamlak.png", "/images/naptar.png"],
  },
  {
    icon: Plane,
    title: "Komplex utazásszervezés",
    text: "Teljes körű logisztikai és programterv egy 4 napos városlátogatáshoz: percpontos itiner, költségbecslés, foglalási linkek egy táblázatban.",
    images: ["/images/utazas.png"],
  },
  {
    icon: ClipboardCheck,
    title: "Havi riport",
    text: "Részletes havi elszámolás, amelyben követhető a feladatok státusza és a ráfordított idő — teljes transzparencia, hatékony közös munka.",
    images: ["/images/riport.png"],
  },
];

function References() {
  return (
    <section id="referenciak" className="bg-navy/[0.03] py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Referenciák
        </h2>
        <div className="mt-10 space-y-10">
          {references.map(({ icon: Icon, title, text, images }) => (
            <div
              key={title}
              className="rounded-2xl border border-silver bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <h3 className="font-display text-lg font-semibold text-navy">
                  {title}
                </h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/80">
                {text}
              </p>
              <div
                className={`mt-5 grid gap-4 ${
                  images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"
                }`}
              >
                {images.map((src) => (
                  <div key={src} className="overflow-x-auto rounded-xl border border-silver shadow-sm">
                    <img
                      src={src}
                      alt={title}
                      className="h-auto min-w-[640px] w-full sm:min-w-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    name: "Alap",
    price: "50.000–80.000 Ft/hó",
    audience:
      "Egyéni coachok, akiknek a naptár és az email-kezelés a fő fájdalompont",
    items: [
      "Naptárkezelés és időpont-egyeztetés",
      "Email-rendszerezés (Inbox Zero)",
      "Heti összefoglaló",
    ],
    highlight: false,
  },
  {
    name: "Bővített",
    price: "90.000–140.000 Ft/hó",
    audience:
      "Coachok/tanácsadók több ügyféllel, akiknek az ügyféladatok és a számlázás is rendezetlen",
    items: [
      "Az Alap csomag tartalma",
      "Ügyféladat-nyilvántartás",
      "Számlázási bizonylatok rendszerezése",
      "Havi részletes riport",
    ],
    highlight: true,
  },
  {
    name: "Prémium",
    price: "150.000–220.000 Ft/hó",
    audience:
      "Növekvő coaching/tanácsadói vállalkozások, teljes operatív háttérrel",
    items: [
      "A Bővített csomag tartalma",
      "Workspace karbantartás és optimalizálás",
      "Üzleti anyagok (PDF-ek, árlisták, prezentációk) készítése",
    ],
    highlight: false,
  },
];

function Packages() {
  return (
    <section id="csomagok" className="mx-auto max-w-5xl px-6 py-12 sm:py-20">
      <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
        Csomagok
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {packages.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
              p.highlight
                ? "border-accent bg-navy text-white"
                : "border-silver bg-white"
            }`}
          >
            {p.highlight && (
              <span className="mb-3 inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                Legnépszerűbb
              </span>
            )}
            <h3
              className={`font-display text-xl font-bold ${
                p.highlight ? "text-white" : "text-navy"
              }`}
            >
              {p.name}
            </h3>
            <p
              className={`mt-1 text-lg font-semibold ${
                p.highlight ? "text-white" : "text-accent"
              }`}
            >
              {p.price}
            </p>
            <p
              className={`mt-3 text-sm leading-relaxed ${
                p.highlight ? "text-white/80" : "text-charcoal/70"
              }`}
            >
              {p.audience}
            </p>
            <ul
              className={`mt-5 flex-1 space-y-2 text-sm leading-relaxed ${
                p.highlight ? "text-white/90" : "text-charcoal/80"
              }`}
            >
              {p.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span
                    className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${
                      p.highlight ? "bg-white" : "bg-accent"
                    }`}
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm italic text-charcoal/60">
        Minden csomag egyedi igény szerint testre szabható egy rövid
        állapotfelmérés után. 50% előleg, a fennmaradó rész a hónap végén
        esedékes.
      </p>
      <p className="mt-2 max-w-2xl text-sm font-semibold text-accent">
        Nincs hosszú távú elköteleződés — bármelyik csomag hónap végén
        lemondható.
      </p>
    </section>
  );
}

const faqs = [
  {
    q: "Hogyan kezdődik a közös munka?",
    a: "Egy rövid, ingyenes állapotfelmérő beszélgetéssel indulunk, ahol átnézzük, mely feladatok viszik el a legtöbb időt. Ez alapján javaslok csomagot, és egyeztetjük a részleteket, mielőtt elindul a munka.",
  },
  {
    q: "Milyen eszközökkel dolgozol?",
    a: "A leggyakoribbak: Notion, Google Workspace (Gmail, Naptár, Drive), Canva, és a számlázási/CRM rendszer, amit te már használsz. Nem kell váltanod — a meglévő eszközeidre építünk.",
  },
  {
    q: "Biztonságban vannak az adataim?",
    a: "Igen. Minden ügyfél adatait bizalmasan kezelem, és igény esetén titoktartási nyilatkozatot (NDA) is aláírok a munka megkezdése előtt.",
  },
  {
    q: "Mi van, ha menet közben szeretnék váltani vagy lemondani?",
    a: "Bármelyik csomag hónap végén, kötöttség nélkül lemondható vagy módosítható — nincs hosszú távú szerződéses elköteleződés.",
  },
  {
    q: "Csak coachoknak és tanácsadóknak dolgozol?",
    a: "Elsősorban rájuk specializálódtam, mert ismerem a tipikus adminisztrációs fájdalompontjaikat, de ha más vállalkozóként hasonló kihívásokkal küzdesz, írj nyugodtan — megnézzük, illik-e a profilra.",
  },
];

function FAQ() {
  return (
    <section id="gyik" className="bg-navy/[0.03] py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Gyakori kérdések
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-silver bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-navy">
                {q}
                <span className="flex-shrink-0 text-accent transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kapcsolat" className="bg-navy py-12 sm:py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Vegyük fel a kapcsolatot
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Írj, és átnézzük közösen, melyik csomag illik leginkább a jelenlegi
          helyzetedhez — utána pontosítjuk a tartalmat és az árat a konkrét
          feladataid alapján.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://instagram.com/greativo13"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
          >
            <Instagram size={16} /> @greativo13
          </a>
          <a
            href="mailto:greativo13@gmail.com"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:bg-accent hover:text-white"
          >
            <Mail size={16} /> greativo13@gmail.com
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61589129755592"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
          >
            <Facebook size={16} /> Greativo
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-8 text-center text-xs text-white/50">
      <p>
        Greativo · greativo13@gmail.com · @greativo13 · Facebook · &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <NavBar />
      <Hero />
      <Services />
      <References />
      <Packages />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
