'use client';

import AuthSidebar from '../components/AuthSidebar';
import LoginForm from '../components/SignupForm';

export default function Signup() {
  return (
        <>
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                <AuthSidebar />
                <SignupForm />
            </section>
        </>
    );
}