'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center px-8 sm:px-14 py-12 bg-white w-full">
      <div className="mx-auto w-full max-w-md">

        {/* Mobile logo */}
        <div className="mb-10 block lg:hidden">
          <Link href="/" aria-label="Go to homepage">
            <Image
              className="dark:invert w-[220px] h-auto"
              src="/logo-light.svg"
              alt="logo"
              width={150}
              height={38}
              priority
            />
          </Link>
        </div>

        <h1 className="text-4xl font-semibold text-gray-900">
          Join Rateshoppa
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Create a free account to compare live exchange rates from trusted providers.
        </p>

        <form className="mt-8 space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
            className="w-full rounded-lg border px-4 py-3 focus:ring-1 focus:ring-[#084040]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
            className="w-full rounded-lg border px-4 py-3 focus:ring-1 focus:ring-[#084040]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
            className="w-full rounded-lg border px-4 py-3 focus:ring-1 focus:ring-[#084040]"
            />
          </div>

          {/* Password with toggle */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg border px-4 py-3 pr-12 focus:ring-1 focus:ring-[#084040]"
              />

              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <HiOutlineEyeOff size={20} /> : <HiOutlineEye size={20} />}

              </button>
            </div>
          </div>

          {/* Submit */}
          <button className="w-full py-3 mt-1 font-semibold bg-[#084040] text-[#B6EA25] rounded-lg hover:bg-[#96c80e] hover:text-[#084040] transition">
            Create Account
          </button>
        </form>

        <div className="flex justify-center mt-5">
          Already have an account?
          <Link href="/login" className="text-[#084040] hover:underline ml-1">
            Log in
          </Link>
        </div>

      </div>
    </div>
  );
}