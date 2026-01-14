'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

export default function LoginForm() {
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
          Forgot your password?
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Enter your email address and we’ll send you a secure reset link.
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

          {/* Submit */}
          <button className="w-full py-3 mt-1 font-semibold bg-[#084040] text-[#B6EA25] rounded-lg hover:bg-[#96c80e] hover:text-[#084040] transition">
            Reset Password
          </button>
        </form>

        <div className="flex justify-center mt-5">
          <Link href="/login" className="text-[#084040] hover:underline ml-1">
            Return to Log in
          </Link>
        </div>

        
      </div>
    </div>
  );
}