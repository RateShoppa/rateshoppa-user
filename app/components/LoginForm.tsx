'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Log in to access the latest exchange rates and keep more of your money.
        </p>

        <form className="mt-8 space-y-5">
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
                {showPassword
                  ? <HiOutlineEyeOff size={20} />
                  : <HiOutlineEye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end text-sm">
            <Link href="/forgot-password" className="text-[#084040] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Log in button (applied as requested) */}
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="w-full py-3 font-semibold bg-[#084040] text-[#B6EA25] rounded-lg hover:bg-[#96c80e] hover:text-[#084040] transition"
          >
            Log in
          </button>
        </form>

        <div className="flex justify-center mt-5">
          Don’t have an account?
          <Link href="/signup" className="text-[#084040] hover:underline ml-1">
            Create account
          </Link>
        </div>

      </div>
    </div>
  );
}