"use client"
import { useState, useEffect } from "react";
import { Mode } from "./Connect";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";

type Country = {
  name: string;
  dialCode: string;
  isoCode: string;
  flag: string;
};

function ConnectPhoneNumber({ setMode }: { setMode: (mode: Mode) => void }) {
  const [phone, setPhone] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country | null>(null);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [phoneSent, setPhoneSent] = useState(false);
  const [phoneLoading, setPhoneLoading] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,idd,flag,cca2")
      .then((r) => r.json())
      .then((data: { name: { common: string }; idd: { root?: string; suffixes?: string[] }; flag: string; cca2: string }[]) => {
        const list: Country[] = data
          .filter((c) => c.idd?.root && c.idd?.suffixes?.length === 1)
          .map((c) => ({
            name: c.name.common,
            dialCode: c.idd.root! + c.idd.suffixes![0],
            isoCode: c.cca2,
            flag: c.flag,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(list);
        setCountry(list.find((c) => c.isoCode === "CM") || list[0]);
        setLoadingCountries(false);
      })
      .catch(() => setLoadingCountries(false));
  }, []);

  const sendPhoneLink = async () => {
    if (!phone || !country) return;
    setPhoneLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setPhoneLoading(false);
    setPhoneSent(true);
  };

  return (
    <main className="min-h-screen bg-[#f0f2f5] dark:bg-[#111b21] flex items-center justify-center p-6">
      <div className="bg-white dark:bg-[#202c33] rounded-2xl border border-[#e9edef] dark:border-[#2a3942] w-full max-w-md p-10 flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#111b21] dark:text-[#e9edef] mb-2">Enter phone number</h1>
          <p className="text-sm text-[#667781] dark:text-[#8696a0]">Select a country and enter your phone number.</p>
        </div>
        {!phoneSent ? (
          <div className="w-full flex flex-col gap-3">
            <Combobox
              items={countries}
              itemToStringValue={(c) => `${c.flag} ${c.name}`}
              value={country}
              onValueChange={(c) => setCountry(c)}
            >
              <ComboboxInput
                placeholder={loadingCountries ? "Loading countries…" : "Select a country"}
                disabled={loadingCountries}
                className="w-full rounded-full border border-[#e9edef] dark:border-[#2a3942] bg-white dark:bg-[#2a3942] text-[#111b21] dark:text-[#e9edef] px-5 py-3.5 text-sm"
              />
              <ComboboxContent side="top" className="w-[360px]">
                <ComboboxEmpty>No country found.</ComboboxEmpty>
                <ComboboxList>
                  {(c) => (
                    <ComboboxItem key={c.isoCode} value={c}>
                      <span>{c.flag}</span>
                      <span className="flex-1">{c.name}</span>
                      <span className="text-xs text-[#667781] font-mono">{c.dialCode}</span>
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <div className="w-full bg-[#111b21] rounded-full px-5 py-3.5 flex items-center gap-2">
              <span className="text-sm text-[#8696a0] font-medium shrink-0">{country?.dialCode}</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-[#8696a0]"
              />
            </div>
            <div className="flex justify-center mt-2">
              <button
                onClick={sendPhoneLink}
                disabled={!phone || !country || phoneLoading}
                className="bg-[#25d366] hover:bg-[#1fbb57] disabled:opacity-50 text-white font-semibold rounded-full px-10 py-3 text-sm transition-colors"
              >
                {phoneLoading ? "Sending…" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="size-12 rounded-full bg-[rgba(37,211,102,0.12)] border-2 border-[#25d366] flex items-center justify-center text-xl">✓</div>
            <p className="text-sm text-[#25d366] font-medium">Link sent to {country?.dialCode} {phone}</p>
            <button onClick={() => { setPhoneSent(false); setPhone(""); }} className="text-xs text-[#667781] underline hover:text-[#111b21] dark:hover:text-[#e9edef] transition-colors">Send again</button>
          </div>
        )}
        <button onClick={() => setMode("qr")} className="flex items-center gap-1 text-sm text-[#111b21] dark:text-[#e9edef] border-b border-[#111b21] dark:border-[#e9edef] hover:text-[#25d366] hover:border-[#25d366] transition-colors pb-0.5">
          Log in with QR code <span>›</span>
        </button>
      </div>
    </main>
  );
}

export default ConnectPhoneNumber;