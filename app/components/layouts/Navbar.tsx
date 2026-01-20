'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiPower, HiBars3, HiXMark } from 'react-icons/hi2';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Dashboard", "Compare Rates", "Partnerships"];

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative">

      {/* Logo */}
      <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2">
        <Image
          src="/logo-light.svg"
          alt="Youcare logo"
          width={140}
          height={36}
          priority
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex gap-2">
        {navItems.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 rounded-full font-medium ${
              item === "Dashboard"
                ? "bg-[#084040] text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Desktop Profile */}
      <div className="hidden sm:flex items-center gap-3">
        <Link
          href="/login"
          aria-label="Log out"
          className="p-2 rounded-full bg-red-100 hover:bg-red-500 text-red-500 hover:text-white transition"
        >
          <HiPower size={12} />
        </Link>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 mt-3 w-full bg-white rounded-2xl shadow-lg p-4 sm:hidden z-50 space-y-4">

          {/* Mobile Nav Items */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                className={`px-4 py-3 rounded-xl text-left font-medium ${
                  item === "Dashboard"
                    ? "bg-[#084040] text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <hr className="border-slate-200" />

          {/* Mobile Profile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/avatar.png"
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-sm font-medium text-slate-700">
                Seun
              </span>
            </div>

            <Link
              href="/login"
              aria-label="Log out"
              className="p-2 rounded-full bg-red-100 hover:bg-red-500 text-red-500 hover:text-white transition"
            >
              <HiPower size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}