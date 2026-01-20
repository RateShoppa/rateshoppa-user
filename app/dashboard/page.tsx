'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/layouts/Navbar';
import StatCard from '../components/cards/StatCard';
import CreateAlertModal, {
  RateAlert,
} from '../components/CreateAlertModal';

type Provider = {
  name: string;
  logo: string;
  rate: number;
  rateGood: boolean;
  fee: string;
  recipientGets: string;
  isBest: boolean;
};

const providers: Provider[] = [
  {
    name: "Wise",
    logo: "/vendors/wise-logo.svg",
    rate: 1.40525,
    rateGood: true,
    fee: "5.76 USD",
    recipientGets: "1,397.16 CAD",
    isBest: true,
  },
  {
    name: "MonieWorld",
    logo: "/vendors/monieworld-logo.svg",
    rate: 1.36526,
    rateGood: true,
    fee: "0.00 USD",
    recipientGets: "1,365.26 CAD",
    isBest: false,
  },
  {
    name: "Remitly",
    logo: "/vendors/remitly-logo.svg",
    rate: 1.3608,
    rateGood: true,
    fee: "0.00 USD",
    recipientGets: "1,360.80 CAD",
    isBest: false,
  },
  {
    name: "Lemfi",
    logo: "/vendors/lemfi-logo.png",
    rate: 1.36299,
    rateGood: false,
    fee: "5.00 USD",
    recipientGets: "1,356.17 CAD",
    isBest: false,
  },
  {
    name: "Sendwave",
    logo: "/vendors/sendwave-logo.svg",
    rate: 1.34037,
    rateGood: false,
    fee: "4.99 USD",
    recipientGets: "1,333.68 CAD",
    isBest: false,
  },
];

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const [alerts, setAlerts] = useState<RateAlert[]>([]);

  const handleCreateAlert = (alert: RateAlert) => {
    setAlerts((prev) => [alert, ...prev]);
  };

  return (
    <main className="p-4 md:p-6 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">

        <Navbar />

        {/* Greeting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-3 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#084040]">
            Howdy, Seun!
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="bg-[#084040] text-[#B6EA25] px-4 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
          >
            + Add new rate alert
          </button>
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5">

          {/* Rate Alerts */}
          <div className="lg:col-span-8 text-center border-gray-200">
            <StatCard title="Rate Alert">
              {alerts.length === 0 ? (
                <div className="flex flex-col items-center text-center gap-4 py-6">
                  <Image
                    src="/no_data.png"
                    alt="no-data"
                    width={250}
                    height={40}
                    className="object-contain"
                  />
                  <h2 className="text-lg font-semibold">
                    Create your first Rate Alert
                  </h2>
                  <p className="max-w-md text-sm text-gray-500">
                    We send you alerts when your currency pairs reach a lower
                    rate from when it was set.
                  </p>
                </div>
              ) : (
                <div className="divide-y text-left">
                  {alerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="py-4 flex items-center justify-between border-gray-200"
                    >
                      <div>
                        <p className="font-medium">
                          {alert.nickname}
                        </p>
                        <p className="text-sm text-gray-500">
                          1 {alert.from} → {alert.rate} {alert.to}
                        </p>
                      </div>
                      <span className="text-xs text-gray-400">
                        {alert.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </StatCard>
          </div>

          {/* Providers */}
          <div className="lg:col-span-4">
            <div className="w-full overflow-x-auto rounded-2xl bg-white border border-gray-200">

              {/* Header */}
              <div className="min-w-[300px] grid grid-cols-[1fr_auto] bg-[#084040] text-white py-5 px-6 text-sm font-medium">
                <div>Provider</div>
                <div className="text-right">
                  Exchange rate
                  <div className="text-xs opacity-70">(1 USD → NGN)</div>
                </div>
              </div>

              {/* Rows */}
              {providers.map((p, i) => (
                <div
                  key={i}
                  className="min-w-[300px] grid grid-cols-[1fr_auto] items-center px-6 py-6 border-b last:border-0 border-gray-200 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center space-x-3">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={90}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex justify-end">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">
                        {p.rate.toFixed(5)}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          p.rateGood ? "bg-green-600" : "bg-red-500"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </section>
      </div>

      {/* Modal */}
      {open && (
        <CreateAlertModal
          onClose={() => setOpen(false)}
          onCreate={handleCreateAlert}
        />
      )}
    </main>
  );
}