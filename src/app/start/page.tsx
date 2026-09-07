"use client";

import { useState, type FormEvent } from "react";
import {
  address,
  email,
  officeHours,
  phone,
  phoneHref,
  phoneLabel,
  supportNote,
} from "@/lib/data";

export default function StartPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <h1 className="display max-w-[16ch]">
          Let’s talk about your <span className="gold">IT.</span>
        </h1>
        <p className="lede mt-6">
          Whether you are looking for a new IT partner, moving infrastructure to the cloud, adding Sophos protection, or simply need someone to take ownership of your technology, our team can help you work out where to start.
        </p>
      </section>
      <section className="section split">
        {sent ? (
          <p className="text-[1.4rem]">Thanks — OurCloud will be in touch.</p>
        ) : (
          <form className="grid max-w-[520px] gap-5" onSubmit={onSubmit}>
            <label className="grid gap-1 text-[0.88rem] text-[var(--fg-soft)]">
              Name
              <input name="name" required className="border-0 border-b border-[var(--fg)] bg-transparent py-3 outline-none" />
            </label>
            <label className="grid gap-1 text-[0.88rem] text-[var(--fg-soft)]">
              Email
              <input
                type="email"
                name="email"
                required
                className="border-0 border-b border-[var(--fg)] bg-transparent py-3 outline-none"
              />
            </label>
            <label className="grid gap-1 text-[0.88rem] text-[var(--fg-soft)]">
              What should we talk about?
              <select
                name="need"
                defaultValue="partner"
                className="border-0 border-b border-[var(--fg)] bg-transparent py-3 outline-none"
              >
                <option value="partner">A new IT partner</option>
                <option value="managed-it">Managed IT</option>
                <option value="cloud">Cloud & hosting</option>
                <option value="data-centre">Data centre</option>
                <option value="sophos">Sophos</option>
                <option value="consulting">Consulting</option>
                <option value="other">Something else</option>
              </select>
            </label>
            <label className="grid gap-1 text-[0.88rem] text-[var(--fg-soft)]">
              Tell us what is going on
              <textarea
                name="message"
                rows={4}
                className="border-0 border-b border-[var(--fg)] bg-transparent py-3 outline-none"
              />
            </label>
            <button className="cta cta-solid w-fit" type="submit">
              Talk to OurCloud
            </button>
          </form>
        )}
        <div>
          <p className="kicker">Contact OurCloud</p>
          <p className="lede">
            <a href={phoneHref}>
              {phoneLabel} ({phone})
            </a>
            <br />
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p className="lede mt-6">
            {address}
            <br />
            {officeHours}
            <br />
            {supportNote}
          </p>
          <p className="mt-6 text-[0.95rem] text-[var(--fg-soft)]">
            [VERIFY WITH OURCLOUD] Confirm any additional office locations or support channels before publishing.
          </p>
        </div>
      </section>
    </>
  );
}
