export default function PhysioOnePage() {
  const services = [
    {
      title: 'Vstupní vyšetření',
      text: 'Komplexní diagnostika pohybového aparátu, držení těla a pohybových stereotypů.',
    },
    {
      title: 'Individuální terapie',
      text: 'Cílená fyzioterapie při bolestech zad, krční páteře, kloubů i po úrazech.',
    },
    {
      title: 'Rehabilitační cvičení',
      text: 'Praktický plán cviků pro domácí péči a dlouhodobé zlepšení stavu.',
    },
    {
      title: 'Sportovní regenerace',
      text: 'Prevence přetížení, návrat k pohybu a podpora výkonu bez bolesti.',
    },
  ];

  const benefits = [
    'Osobní přístup ke každému klientovi',
    'Srozumitelný plán terapie a domácí cvičení',
    'Pomoc při akutních i dlouhodobých potížích',
    'Klidné a profesionální prostředí',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-50" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Fyzioterapie s individuálním přístupem
            </span>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Pomohu vám vrátit se k pohybu bez bolesti
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Moderní fyzioterapie pro bolesti zad, kloubů, poúrazové stavy i sportovní přetížení.
              Společně najdeme příčinu potíží a nastavíme účinnou terapii.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Objednat konzultaci
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Zobrazit služby
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="text-2xl font-bold">10+ let</div>
                <div className="text-sm text-slate-600">praxe v oboru</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-slate-600">spokojených klientů</div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="text-2xl font-bold">1:1</div>
                <div className="text-sm text-slate-600">individuální péče</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <div className="text-sm font-semibold text-emerald-700">Specializace</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Bolesti zad, krční páteř, rehabilitace po operacích, sportovní fyzioterapie.
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-5">
                  <div className="text-sm font-semibold text-sky-700">Objednání</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Telefonicky, e-mailem nebo přes kontaktní formulář. Termíny dle domluvy.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                  <div className="text-sm font-semibold text-slate-900">Jak probíhá první návštěva</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Nejprve spolu projdeme vaše potíže, zdravotní historii a cíle terapie. Následuje
                    vyšetření, návrh léčebného postupu a doporučení cviků pro domácí péči.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="sluzby" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Služby</h2>
            <p className="mt-4 text-lg text-slate-600">
              Péče přizpůsobená vašemu stavu, možnostem a dlouhodobému cíli.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <div className="mb-4 h-11 w-11 rounded-2xl bg-emerald-100" />
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Proč si vybrat právě mě</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-600">
                Terapie stavím na důkladném vyšetření, aktivní spolupráci a jasně vysvětlených krocích.
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">Reference klientů</h3>
              <div className="mt-8 space-y-6">
                <blockquote className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm leading-6 text-slate-200">
                    „Po několika týdnech terapie výrazně ustoupily bolesti zad a konečně jsem se mohl vrátit ke sportu.“
                  </p>
                  <footer className="mt-3 text-sm font-medium text-white">— Jan K.</footer>
                </blockquote>
                <blockquote className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-sm leading-6 text-slate-200">
                    „Oceňuji lidský přístup, srozumitelné vysvětlení problému a praktické cviky, které opravdu pomohly.“
                  </p>
                  <footer className="mt-3 text-sm font-medium text-white">— Petra M.</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-emerald-600 p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Objednejte se na konzultaci</h2>
              <p className="mt-4 max-w-xl text-lg text-emerald-50">
                Udělejte první krok ke zlepšení pohybu a úlevě od bolesti. Ozvěte se a najdeme vhodný termín.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
                  <div className="text-sm text-emerald-100">Telefon</div>
                  <div className="mt-1 text-lg font-semibold">+420 123 456 789</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/20">
                  <div className="text-sm text-emerald-100">E-mail</div>
                  <div className="mt-1 text-lg font-semibold">info@fyzio-praxe.cz</div>
                </div>
              </div>
            </div>

            <form className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div>
                <label className="text-sm font-medium text-slate-700">Jméno</label>
                <input
                  type="text"
                  placeholder="Vaše jméno"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-slate-700">E-mail</label>
                <input
                  type="email"
                  placeholder="vas@email.cz"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-slate-700">Zpráva</label>
                <textarea
                  rows={5}
                  placeholder="Stručně popište své potíže nebo požadavek"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
                />
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Odeslat poptávku
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>© 2026 Fyzioterapie Nováková</div>
          <div>Praha • Individuální terapie • Objednání po domluvě</div>
        </div>
      </footer>
    </div>
  );
}
