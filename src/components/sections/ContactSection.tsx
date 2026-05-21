"use client";

import { useConvexContactEnabled } from "@/components/providers/ConvexContactProvider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { api } from "@cvx/_generated/api";

type ToastKind = "success" | "error" | null;

function ConvexContactForm() {
  const submitContact = useMutation(api.contact.submit);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ToastKind>(null);
  const [submitting, setSubmitting] = useState(false);
  const [fieldErr, setFieldErr] = useState<string | null>(null);

  const parsed = useMemo(
    () => ({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    }),
    [email, message, name],
  );

  const validate = (): string | null => {
    if (parsed.name.length < 2) return "Enter a name (min 2 characters).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parsed.email)) {
      return "Use a valid email address.";
    }
    if (parsed.message.length < 12) {
      return "Share a slightly longer note (minimum 12 characters).";
    }
    return null;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setFieldErr(err);
      setStatus("error");
      return;
    }
    setFieldErr(null);
    setSubmitting(true);
    try {
      await submitContact(parsed);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.form
      layout
      onSubmit={onSubmit}
      className="surface-glass relative overflow-hidden rounded-[2.42rem] p-[10px]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[-2px] bg-gradient-to-r from-blue-400/42 via-purple-600/62 to-purple-900/94 opacity-[0.93] blur-2xl"
      />
      <div className="relative rounded-[2.06rem] border border-[var(--border)] bg-black/90 p-[2.28rem] sm:p-[3.06rem]">
        <div className="grid gap-[1.6rem] sm:grid-cols-2">
          <label className="block text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
            Name
            <input
              className="mt-[0.8rem] w-full rounded-[1.62rem] border border-[var(--border)] bg-white/6 px-[1.2rem] py-[14px] text-[16px] text-[var(--fg)] outline-none transition focus-visible:ring-2 focus-visible:ring-sky-500/80"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              disabled={submitting}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="block text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
            Email
            <input
              className="mt-[0.8rem] w-full rounded-[1.62rem] border border-[var(--border)] bg-white/6 px-[1.2rem] py-[14px] text-[16px] text-[var(--fg)] outline-none transition focus-visible:ring-2 focus-visible:ring-sky-500/80"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="founder@company.com"
              value={email}
              disabled={submitting}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <label className="mt-[1.7rem] block text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">
          Message
          <textarea
            className="mt-[0.8rem] min-h-[10.94rem] w-full resize-none rounded-[1.62rem] border border-[var(--border)] bg-white/6 px-[1.2rem] py-[14px] text-[17px] text-[var(--fg)] outline-none transition focus-visible:ring-2 focus-visible:ring-sky-500/80"
            name="message"
            placeholder="Project scope, budget range, timelines, inspirations..."
            value={message}
            disabled={submitting}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>

        <div className="mt-[1.86rem] flex flex-wrap items-center gap-[1rem]">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-[0.7rem] rounded-full bg-gradient-to-r from-[#4d8dff] via-[#5c73ff] to-[#9747FF] px-[2.54rem] py-[13px] text-[13px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_18px_40px_-10px_rgba(59,130,246,0.65)] outline-none disabled:opacity-[0.94]"
          >
            {submitting ? (
              <>
                <Loader2 aria-hidden className="h-[1.22rem] w-[1.22rem] animate-spin" />
                Sending
              </>
            ) : (
              "Send message"
            )}
          </button>
          <p className="text-[14px] text-muted">
            Messages are saved in Convex.
          </p>
        </div>

        <AnimatePresence mode="sync">
          {status ? (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={cn(
                "mt-[2.06rem] rounded-[1.4rem] border px-[1.5rem] py-[13px] text-[15px]",
                status === "success"
                  ? "border-emerald-400/48 bg-emerald-500/10 text-emerald-100"
                  : "border-red-500/50 bg-red-900/42 text-red-100",
              )}
              role={status === "success" ? "status" : "alert"}
            >
              {status === "success"
                ? "Thanks — I will follow up shortly."
                : fieldErr ??
                  "Submission failed. Check Convex deployment URL and redeploy backend."}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.form>
  );
}

export function ContactSection() {
  const convexReady = useConvexContactEnabled();

  return (
    <section id="contact" className="relative scroll-mt-36 py-24 sm:scroll-mt-32 sm:py-28">
      <SectionHeader
        eyebrow="Contact"
        title="Have an ambitious build in mind?"
        subtitle="Brief the vision—I will tailor a pragmatic path from prototype to hardened release."
      />
      {convexReady ? (
        <div className="relative mx-auto max-w-6xl px-6">
          <ConvexContactForm />
        </div>
      ) : null}
    </section>
  );
}
