'use client';

import AuthSidebar from '../components/AuthSidebar';
import ForgotPasswordForm from '../components/ForgotPasswordForm';

export default function ForgotPassword() {
  return (
        <>
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
                <AuthSidebar />
                <ForgotPasswordForm />
            </section>
        </>
    );
}