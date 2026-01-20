'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiXMark, HiArrowsUpDown, HiChevronDown, HiCheck } from 'react-icons/hi2';

/** 100+ currency list (kept compact here) */
const currencyList: Record<string, string> = { AED: "UAE Dirham", AFN: "Afghan Afghani", ALL: "Albanian Lek", AMD: "Armenian Dram", ANG: "Netherlands Antillean Guilder", AOA: "Angolan Kwanza", ARS: "Argentine Peso", AUD: "Australian Dollar", AWG: "Aruban Florin", AZN: "Azerbaijani Manat", BAM: "Bosnia-Herzegovina Convertible Mark", BBD: "Barbadian Dollar", BDT: "Bangladeshi Taka", BGN: "Bulgarian Lev", BHD: "Bahraini Dinar", BIF: "Burundian Franc", BMD: "Bermudian Dollar", BND: "Brunei Dollar", BOB: "Bolivian Boliviano", BRL: "Brazilian Real", BSD: "Bahamian Dollar", BTN: "Bhutanese Ngultrum", BWP: "Botswanan Pula", BYN: "Belarusian Ruble", BZD: "Belize Dollar", CAD: "Canadian Dollar", CDF: "Congolese Franc", CHF: "Swiss Franc", CLP: "Chilean Peso", CNY: "Chinese Yuan", COP: "Colombian Peso", CRC: "Costa Rican Colón", CUP: "Cuban Peso", CVE: "Cape Verdean Escudo", CZK: "Czech Koruna", DJF: "Djiboutian Franc", DKK: "Danish Krone", DOP: "Dominican Peso", DZD: "Algerian Dinar", EGP: "Egyptian Pound", ERN: "Eritrean Nakfa", ETB: "Ethiopian Birr", EUR: "Euro", FJD: "Fijian Dollar", FKP: "Falkland Islands Pound", FOK: "Faroese króna", GBP: "British Pound Sterling", GEL: "Georgian Lari", GGP: "Guernsey Pound", GHS: "Ghanaian Cedi", GIP: "Gibraltar Pound", GMD: "Gambian Dalasi", GNF: "Guinean Franc", GTQ: "Guatemalan Quetzal", GYD: "Guyanese Dollar", HKD: "Hong Kong Dollar", HNL: "Honduran Lempira", HRK: "Croatian Kuna", HTG: "Haitian Gourde", HUF: "Hungarian Forint", IDR: "Indonesian Rupiah", ILS: "Israeli New Shekel", IMP: "Isle of Man Pound", INR: "Indian Rupee", IQD: "Iraqi Dinar", IRR: "Iranian Rial", ISK: "Icelandic Króna", JEP: "Jersey Pound", JMD: "Jamaican Dollar", JOD: "Jordanian Dinar", JPY: "Japanese Yen", KES: "Kenyan Shilling", KGS: "Kyrgystani Som", KHR: "Cambodian Riel", KID: "Kiribati Dollar", KMF: "Comorian Franc", KRW: "South Korean Won", KWD: "Kuwaiti Dinar", KYD: "Cayman Islands Dollar", KZT: "Kazakhstani Tenge", LAK: "Laotian Kip", LBP: "Lebanese Pound", LKR: "Sri Lankan Rupee", LRD: "Liberian Dollar", LSL: "Lesotho Loti", LYD: "Libyan Dinar", MAD: "Moroccan Dirham", MDL: "Moldovan Leu", MGA: "Malagasy Ariary", MKD: "Macedonian Denar", MMK: "Myanmar Kyat", MNT: "Mongolian Tugrik", MOP: "Macanese Pataca", MRU: "Mauritanian Ouguiya", MUR: "Mauritian Rupee", MVR: "Maldivian Rufiyaa", MWK: "Malawian Kwacha", MXN: "Mexican Peso", MYR: "Malaysian Ringgit", MZN: "Mozambican Metical", NAD: "Namibian Dollar", NGN: "Nigerian Naira", NIO: "Nicaraguan Córdoba", NOK: "Norwegian Krone", NPR: "Nepalese Rupee", NZD: "New Zealand Dollar", OMR: "Omani Rial", PAB: "Panamanian Balboa", PEN: "Peruvian Sol", PGK: "Papua New Guinean Kina", PHP: "Philippine Peso", PKR: "Pakistani Rupee", PLN: "Polish Złoty", PYG: "Paraguayan Guaraní", QAR: "Qatari Rial", RON: "Romanian Leu", RSD: "Serbian Dinar", RUB: "Russian Ruble", RWF: "Rwandan Franc", SAR: "Saudi Riyal", SBD: "Solomon Islands Dollar", SCR: "Seychellois Rupee", SDG: "Sudanese Pound", SEK: "Swedish Krona", SGD: "Singapore Dollar", SHP: "Saint Helena Pound", SLE: "Sierra Leonean Leone", SLL: "Sierra Leonean old Leone", SOS: "Somali Shilling", SRD: "Surinamese Dollar", SSP: "South Sudanese Pound", STN: "São Tomé and Príncipe Dobra", SYP: "Syrian Pound", SZL: "Swazi Lilangeni", THB: "Thai Baht", TJS: "Tajikistani Somoni", TMT: "Turkmenistani Manat", TND: "Tunisian Dinar", TOP: "Tongan Paʻanga", TRY: "Turkish Lira", TTD: "Trinidad & Tobago Dollar", TVD: "Tuvaluan Dollar", TWD: "New Taiwan Dollar", TZS: "Tanzanian Shilling", UAH: "Ukrainian Hryvnia", UGX: "Ugandan Shilling", USD: "US Dollar", UYU: "Uruguayan Peso", UZS: "Uzbekistani Som", VES: "Venezuelan Bolívar", VND: "Vietnamese Dong", VUV: "Vanuatu Vatu", WST: "Samoan Tala", XAF: "Central African CFA Franc", XCD: "East Caribbean Dollar", XOF: "West African CFA Franc", XPF: "CFP Franc", YER: "Yemeni Rial", ZAR: "South African Rand", ZMW: "Zambian Kwacha", };

/** Currency dropdown (UNCHANGED UI) */
function CurrencyDropdown({
  label,
  selected,
  setSelected,
  open,
  setOpen,
  search,
  setSearch,
  flags,
}: {
  label: string;
  selected: string;
  setSelected: (s: string) => void;
  open: boolean;
  setOpen: (b: boolean) => void;
  search: string;
  setSearch: (s: string) => void;
  flags: Record<string, string>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpen]);

  const filtered = Object.keys(currencyList).filter(
    (c) =>
      c.toLowerCase().includes(search.toLowerCase()) ||
      currencyList[c].toLowerCase().includes(search.toLowerCase())
  );

  const selectedItem = filtered.filter((c) => c === selected);
  const otherItems = filtered.filter((c) => c !== selected);

  return (
    <div ref={ref} className="relative w-full">
      <div
        onClick={() => setOpen(!open)}
        className="w-full py-4 px-5 border border-gray-300 rounded bg-white flex items-center gap-3 cursor-pointer"
      >
        {flags[selected] && (
          <Image
            src={flags[selected]}
            width={30}
            height={30}
            alt={selected}
            className="rounded-full object-cover w-5 h-5"
          />
        )}
        <span>{selected}</span>
        <HiChevronDown className="ml-auto text-xl text-gray-500" />
      </div>

      <label className="absolute left-5 -top-2 bg-white px-1 text-sm text-gray-500">
        {label}
      </label>

      {open && (
        <div className="absolute top-full right-0 w-full bg-white shadow-2xl rounded z-40 max-h-[60vh] overflow-y-auto">
          <div className="sticky top-0 bg-white z-10 px-5 pt-5 pb-2 mb-5 border-b border-gray-200">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type currency / country"
              className="w-full py-3 px-5 border border-gray-400 mb-2 rounded-md text-gray-900 focus:outline-none focus:ring-0 focus:border-[#084040] bg-white"
            />
            <p className="text-sm mt-3">All currencies</p>
          </div>

          {[...selectedItem, ...otherItems].map((code) => (
            <div
              key={code}
              onClick={() => {
                setSelected(code);
                setOpen(false);
                setSearch('');
              }}
              className="px-6 py-4 flex items-center justify-between gap-2 cursor-pointer hover:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={flags[code]}
                  width={30}
                  height={30}
                  alt={code}
                  className="rounded-full object-cover w-6 h-6"
                />
                <span>{code} – {currencyList[code]}</span>
              </div>
              {code === selected && (
                <HiCheck className="text-[#084040]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** NEW: Alert payload */
export type RateAlert = {
  id: string;
  from: string;
  to: string;
  rate: number;
  nickname: string;
  createdAt: Date;
};

/** Modal props */
type Props = {
  onClose: () => void;
  onCreate: (alert: RateAlert) => void;
  rate?: number;
};

export default function CreateAlertModal({
  onClose,
  onCreate,
  rate = 0.859,
}: Props) {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [nickname, setNickname] = useState('USD/EUR');

  const [flags, setFlags] = useState<Record<string, string>>({});
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');

  useEffect(() => {
    const result: Record<string, string> = {};
    Object.keys(currencyList).forEach((code) => {
      result[code] = `https://flagcdn.com/${code.slice(0, 2).toLowerCase()}.svg`;
    });
    setFlags(result);
  }, []);

  useEffect(() => {
    setNickname(`${fromCurrency}/${toCurrency}`);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 relative">

        {/* Header */}
        <div className="relative flex justify-center mb-6">
          <button onClick={onClose} className="absolute right-0 p-2">
            <HiXMark size={22} />
          </button>
          <h2 className="text-lg font-semibold text-[#084040]">
            Create new alert
          </h2>
        </div>

        {/* Currency dropdowns */}
        <div className="relative flex flex-col gap-6 mb-6">
          <CurrencyDropdown
            label="From"
            selected={fromCurrency}
            setSelected={setFromCurrency}
            open={openFrom}
            setOpen={(b) => {
              setOpenFrom(b);
              if (b) setOpenTo(false);
            }}
            search={searchFrom}
            setSearch={setSearchFrom}
            flags={flags}
          />

          <button
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white border-gray-300 flex items-center justify-center z-20"
          >
            <HiArrowsUpDown />
          </button>

          <CurrencyDropdown
            label="To"
            selected={toCurrency}
            setSelected={setToCurrency}
            open={openTo}
            setOpen={(b) => {
              setOpenTo(b);
              if (b) setOpenFrom(false);
            }}
            search={searchTo}
            setSearch={setSearchTo}
            flags={flags}
          />
        </div>

        {/* Rate */}
        <div className="text-center mb-4">
          <p className="text-sm text-slate-500">
            {new Date().toLocaleString()}
          </p>
          <p className="text-lg font-semibold">
            1 {fromCurrency} → {rate} {toCurrency}
          </p>
        </div>

        {/* Nickname */}
        <div className="mb-6">
          <label className="text-sm font-medium">Rate Nickname</label>
          <input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="mt-1 w-full rounded-lg border px-3 py-2 h-12 border-gray-300"
          />
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            onCreate({
              id: crypto.randomUUID(),
              from: fromCurrency,
              to: toCurrency,
              rate,
              nickname,
              createdAt: new Date(),
            });
            onClose();
          }}
          className="w-full bg-[#084040] hover:bg-[#053535] text-white font-semibold py-3 rounded-lg"
        >
          Create Alert
        </button>
      </div>
    </div>
  );
}