"use client";

import { useState } from "react";
import Link from "next/link";
import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main>
      <AnnouncementBar />
      <Navbar />

      <section style={{ background: "var(--bg)", padding: "120px 0" }}>
        <div className="w-full max-w-[480px] mx-auto" style={{ padding: "0 40px" }}>

          <p
            className="text-[9px] tracking-[0.35em] uppercase mb-5 text-center"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
          >
            My Account
          </p>
          <h1
            className="mb-14 text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "var(--text)",
              lineHeight: 1.1,
            }}
          >
            Log In
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[10px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-3 px-0 outline-none text-[13px] bg-transparent border-b"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--text)",
                  fontWeight: 300,
                  borderColor: "var(--border)",
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-[10px] tracking-[0.18em] uppercase"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-3 px-0 outline-none text-[13px] bg-transparent border-b"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--text)",
                  fontWeight: 300,
                  borderColor: "var(--border)",
                }}
              />
            </div>

            <div className="flex justify-end mt-1">
              <Link
                href="#"
                className="text-[10px] tracking-[0.12em] uppercase hover:opacity-50 transition-opacity"
                style={{ fontFamily: "var(--font-sans)", color: "var(--text-light)", fontWeight: 400 }}
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 text-[11px] tracking-[0.28em] uppercase font-normal hover:bg-black hover:text-white transition-all duration-300 mt-4"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--text)",
                border: "1px solid var(--text)",
                background: "transparent",
              }}
            >
              Log In
            </button>
          </form>

          <p
            className="text-center mt-10 text-[12px]"
            style={{ fontFamily: "var(--font-sans)", color: "var(--text-mid)", fontWeight: 300 }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="#"
              className="underline hover:opacity-50 transition-opacity"
              style={{ color: "var(--text)" }}
            >
              Create one
            </Link>
          </p>

        </div>
      </section>

      <Footer />
    </main>
  );
}
