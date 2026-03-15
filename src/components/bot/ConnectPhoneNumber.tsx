"use client";
import { send } from "process";
import { useState, useEffect, useRef } from "react";
import CodeSend from "./CodeSend";

type Country = {
  name: string;
  dial: string;
  iso: string;
  fmt: string;
};

type Mode = "qr" | "phone";

const COUNTRIES: Country[] = [
  { name: "Afghanistan", dial: "+93", iso: "af", fmt: "## ### ####" },
  { name: "Afrique du Sud", dial: "+27", iso: "za", fmt: "## ### ####" },
  { name: "Algérie", dial: "+213", iso: "dz", fmt: "### ## ## ##" },
  { name: "Allemagne", dial: "+49", iso: "de", fmt: "### ########" },
  { name: "Angola", dial: "+244", iso: "ao", fmt: "### ### ###" },
  { name: "Arabie saoudite", dial: "+966", iso: "sa", fmt: "## ### ####" },
  { name: "Argentine", dial: "+54", iso: "ar", fmt: "## #### ####" },
  { name: "Australie", dial: "+61", iso: "au", fmt: "### ### ###" },
  { name: "Autriche", dial: "+43", iso: "at", fmt: "### ######" },
  { name: "Belgique", dial: "+32", iso: "be", fmt: "### ## ## ##" },
  { name: "Bénin", dial: "+229", iso: "bj", fmt: "## ## ## ##" },
  { name: "Brésil", dial: "+55", iso: "br", fmt: "## #####-####" },
  { name: "Burkina Faso", dial: "+226", iso: "bf", fmt: "## ## ## ##" },
  { name: "Cameroun", dial: "+237", iso: "cm", fmt: "# ## ## ## ##" },
  { name: "Canada", dial: "+1", iso: "ca", fmt: "(###) ###-####" },
  { name: "Chine", dial: "+86", iso: "cn", fmt: "### #### ####" },
  { name: "Colombie", dial: "+57", iso: "co", fmt: "### ### ####" },
  { name: "Congo (RDC)", dial: "+243", iso: "cd", fmt: "### ### ###" },
  { name: "Congo (Rép.)", dial: "+242", iso: "cg", fmt: "## ### ####" },
  { name: "Côte d'Ivoire", dial: "+225", iso: "ci", fmt: "## ## ## ## ##" },
  { name: "Danemark", dial: "+45", iso: "dk", fmt: "## ## ## ##" },
  { name: "Égypte", dial: "+20", iso: "eg", fmt: "### ### ####" },
  { name: "Émirats arabes unis", dial: "+971", iso: "ae", fmt: "## ### ####" },
  { name: "Espagne", dial: "+34", iso: "es", fmt: "### ### ###" },
  { name: "États-Unis", dial: "+1", iso: "us", fmt: "(###) ###-####" },
  { name: "Éthiopie", dial: "+251", iso: "et", fmt: "## ### ####" },
  { name: "France", dial: "+33", iso: "fr", fmt: "# ## ## ## ##" },
  { name: "Gabon", dial: "+241", iso: "ga", fmt: "## ## ## ##" },
  { name: "Ghana", dial: "+233", iso: "gh", fmt: "## ### ####" },
  { name: "Grande-Bretagne", dial: "+44", iso: "gb", fmt: "#### ### ####" },
  { name: "Grèce", dial: "+30", iso: "gr", fmt: "### ### ####" },
  { name: "Guinée", dial: "+224", iso: "gn", fmt: "### ## ## ##" },
  { name: "Inde", dial: "+91", iso: "in", fmt: "##### #####" },
  { name: "Indonésie", dial: "+62", iso: "id", fmt: "###-####-####" },
  { name: "Iran", dial: "+98", iso: "ir", fmt: "### ### ####" },
  { name: "Israël", dial: "+972", iso: "il", fmt: "##-###-####" },
  { name: "Italie", dial: "+39", iso: "it", fmt: "### ### ####" },
  { name: "Japon", dial: "+81", iso: "jp", fmt: "###-####-####" },
  { name: "Kenya", dial: "+254", iso: "ke", fmt: "### ### ###" },
  { name: "Madagascar", dial: "+261", iso: "mg", fmt: "## ## ### ##" },
  { name: "Mali", dial: "+223", iso: "ml", fmt: "## ## ## ##" },
  { name: "Maroc", dial: "+212", iso: "ma", fmt: "## ## ## ## ##" },
  { name: "Mauritanie", dial: "+222", iso: "mr", fmt: "## ## ## ##" },
  { name: "Mexique", dial: "+52", iso: "mx", fmt: "## #### ####" },
  { name: "Niger", dial: "+227", iso: "ne", fmt: "## ## ## ##" },
  { name: "Nigeria", dial: "+234", iso: "ng", fmt: "### ### ####" },
  { name: "Norvège", dial: "+47", iso: "no", fmt: "### ## ###" },
  { name: "Pakistan", dial: "+92", iso: "pk", fmt: "### #######" },
  { name: "Pays-Bas", dial: "+31", iso: "nl", fmt: "## ### ####" },
  { name: "Pérou", dial: "+51", iso: "pe", fmt: "### ### ###" },
  { name: "Philippines", dial: "+63", iso: "ph", fmt: "### ### ####" },
  { name: "Pologne", dial: "+48", iso: "pl", fmt: "### ### ###" },
  { name: "Portugal", dial: "+351", iso: "pt", fmt: "### ### ###" },
  { name: "Rép. centrafricaine", dial: "+236", iso: "cf", fmt: "## ## ## ##" },
  { name: "Roumanie", dial: "+40", iso: "ro", fmt: "### ### ###" },
  { name: "Russie", dial: "+7", iso: "ru", fmt: "### ###-##-##" },
  { name: "Rwanda", dial: "+250", iso: "rw", fmt: "### ### ###" },
  { name: "Sénégal", dial: "+221", iso: "sn", fmt: "## ### ## ##" },
  { name: "Somalie", dial: "+252", iso: "so", fmt: "## ### ###" },
  { name: "Soudan", dial: "+249", iso: "sd", fmt: "## ### ####" },
  { name: "Suède", dial: "+46", iso: "se", fmt: "##-### ## ##" },
  { name: "Suisse", dial: "+41", iso: "ch", fmt: "## ### ## ##" },
  { name: "Tanzanie", dial: "+255", iso: "tz", fmt: "### ### ###" },
  { name: "Tchad", dial: "+235", iso: "td", fmt: "## ## ## ##" },
  { name: "Togo", dial: "+228", iso: "tg", fmt: "## ## ## ##" },
  { name: "Tunisie", dial: "+216", iso: "tn", fmt: "## ### ###" },
  { name: "Turquie", dial: "+90", iso: "tr", fmt: "### ### ## ##" },
  { name: "Ukraine", dial: "+380", iso: "ua", fmt: "## ### ## ##" },
  { name: "Venezuela", dial: "+58", iso: "ve", fmt: "### ### ####" },
  { name: "Vietnam", dial: "+84", iso: "vn", fmt: "### ### ###" },
  { name: "Zimbabwe", dial: "+263", iso: "zw", fmt: "## ### ####" },
];

function flagUrl(iso: string) {
  return `https://flagcdn.com/w40/${iso}.png`;
}

function formatPhone(raw: string, fmt: string): string {
  const digits = raw.replace(/\D/g, "");
  let out = "";
  let di = 0;
  for (let i = 0; i < fmt.length && di < digits.length; i++) {
    const c = fmt[i];
    if (c === "#") {
      out += digits[di++];
    } else {
      if (di > 0) out += c;
    }
  }
  return out;
}

function FlagImage({ iso, size = 24 }: { iso: string; size?: number }) {
  return (
    <img src={flagUrl(iso)} alt={iso.toUpperCase()} width={size} height={size * 0.67} className="rounded-sm object-cover shrink-0" style={{ aspectRatio: "3/2" }} />
  );
}

function ConnectPhoneNumber({ setMode }: { setMode: (mode: Mode) => void }) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState<Country>(COUNTRIES.find((c) => c.iso === "cm") ?? COUNTRIES[0]);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const filtered = search
    ? COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dial.includes(search)
    )
    : COUNTRIES;

  function selectCountry(c: Country) {
    setCountry(c);
    setPhone("");
    setOpen(false);
    setSearch("");
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value, country.fmt);
    setPhone(formatted);
  }

  const digitCount = phone.replace(/\D/g, "").length;
  const neededDigits = (country.fmt.match(/#/g) ?? []).length;
  const isValid = digitCount >= Math.min(neededDigits, 7);

  async function handleSubmit() {
    if (!isValid) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

  const resetNumber = () => {
    setPhone("")
    setSent(false)
  }



  const placeholder = country.fmt.replace(/#/g, "0");
  if (sent) return <CodeSend phoneNumber="+237689895250" code="XMLOPLKM" setMode={setMode} resetNumber={resetNumber} />
  return (
    <main className=" bg-[#f0f2f5] dark:bg-[#111b21] flex items-center justify-center h-full">
      <div className="bg-white dark:bg-[#202c33] rounded-2xl border border-[#e9edef] dark:border-[#2a3942] w-full max-w-md p-10 flex flex-col items-center gap-6">

        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#111b21] dark:text-[#e9edef] mb-2">
            Enter your phone number to receive the code
          </h1>
          <p className="text-sm text-[#667781] dark:text-[#8696a0]">
            Select your phone number country
          </p>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="relative" ref={dropdownRef}>
            <button type="button" onClick={() => setOpen((v) => !v)} className="cursor-pointer w-full flex items-center gap-3 rounded-xl border border-[#e9edef] dark:border-[#2a3942] bg-white dark:bg-[#2a3942] px-4 py-3 text-sm text-[#111b21] dark:text-[#e9edef] hover:border-[#25d366] transition-colors">
              <FlagImage iso={country.iso} size={22} />
              <span className="flex-1 text-left">{country.name}</span>
              <span className="text-xs text-[#667781] dark:text-[#8696a0] font-mono">
                {country.dial}
              </span>
              <span className="text-[#667781] text-xs">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
              <div className="absolute z-50 top-full mt-1 left-0 right-0 bg-white dark:bg-[#2a3942] border border-[#e9edef] dark:border-[#3b4a54] rounded-xl shadow-lg overflow-hidden">
                <div className="p-2 border-b border-[#e9edef] dark:border-[#3b4a54]">
                  <input ref={searchRef} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un pays..." className="w-full bg-[#f0f2f5] dark:bg-[#111b21] rounded-lg px-3 py-2 text-sm text-[#111b21] dark:text-[#e9edef] outline-none placeholder:text-[#8696a0]" />
                </div>
                <ul className="max-h-52 overflow-y-auto">
                  {filtered.length === 0 && (
                    <li className="px-4 py-3 text-sm text-[#667781]">No result found</li>
                  )}
                  {filtered.map((c) => (
                    <li key={c.iso}>
                      <button type="button" onClick={() => selectCountry(c)} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[#f0f2f5] dark:hover:bg-[#111b21] transition-colors cursor-pointer ${c.iso === country.iso ? "bg-[#f0f2f5] dark:bg-[#111b21]" : ""}`} >
                        <FlagImage iso={c.iso} size={20} />
                        <span className="flex-1 text-left text-[#111b21] dark:text-[#e9edef]">
                          {c.name}
                        </span>
                        <span className="text-xs text-[#667781] font-mono">{c.dial}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center gap-0 rounded-xl border border-[#e9edef] dark:border-[#2a3942] bg-[#111b21] overflow-hidden focus-within:border-[#25d366] transition-colors">
            <span className="px-4 py-3.5 text-sm text-[#8696a0] font-mono border-r border-[#2a3942] shrink-0">
              {country.dial}
            </span>
            <input type="tel" value={phone} onChange={handlePhoneChange} placeholder={placeholder} maxLength={country.fmt.length + 2} className="flex-1 bg-transparent px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#8696a0] font-mono tracking-wide" />
          </div>

          <div className="flex justify-center mt-1">
            <button onClick={handleSubmit} disabled={!isValid || loading} className="bg-[#25d366] hover:bg-[#1fbb57] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-full px-10 py-3 text-sm transition-colors cursor-pointer">
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>

        <button onClick={() => setMode("qr")} className="flex items-center gap-1 text-sm text-[#111b21] dark:text-[#e9edef] border-b border-current hover:text-[#25d366] transition-colors pb-0.5 cursor-pointer" >
          Connect using Qr code <span>›</span>
        </button>
      </div>
    </main>
  );
}

export default ConnectPhoneNumber;