'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AuthSidebar() {
  return (
    <div className="relative hidden lg:block">
      <Image
        src="/auth-bg1.jpg"
        alt="Testimonial"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute top-6 left-6 z-20 ">
        <Link href="/" aria-label="Go to homepage">
          <Image
            className="dark:invert w-[220px] lg:w-[180px] h-auto"
            src="/logo-white.svg"
            alt="logo"
            width={150}
            height={38}
            priority
          />
        </Link>
      </div>

      <div className="absolute bottom-25 left-8 right-8 z-20 text-white">
        <h1 className="text-4xl lg:text-5xl font-black">
          Because every penny counts.
        </h1>
        <p className="mt-3 text-sm opacity-75">
          Compare live exchange rates from trusted providers in one place.
        </p>
      </div>
    </div>
  );
}