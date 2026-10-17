import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "../../hooks/useTranslation";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../constants";
import Section, { Reveal } from "../ui/Section";

type Field = "name" | "email" | "message";
type FormData = Record<Field, string>;
type FormErrors = Partial<Record<Field, string>>;

const EMPTY_FORM: FormData = { name: "", email: "", message: "" };

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("contact.form.validation.name_required");
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t("contact.form.validation.name_min_length");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.validation.email_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.form.validation.email_invalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("contact.form.validation.message_required");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("contact.form.validation.message_min_length");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name as Field;
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setSubmitStatus("success");
      setFormData(EMPTY_FORM);
      setErrors({});
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 6000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phoneClean}`,
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: t("hero.location"),
    },
  ];

  const inputClass = (field: Field) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-white placeholder:text-ink-500 transition-colors focus:bg-white/[0.05] focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-500/60 focus:ring-red-500/40"
        : "border-white/10 focus:border-accent/50 focus:ring-accent/20"
    }`;

  const renderField = (field: Field, multiline = false) => (
    <div className={multiline ? "sm:col-span-2" : undefined}>
      <label
        htmlFor={field}
        className="mb-2 block text-sm font-medium text-ink-200"
      >
        {t(`contact.form.${field}`)}
      </label>
      {multiline ? (
        <textarea
          id={field}
          name={field}
          rows={5}
          value={formData[field]}
          onChange={handleChange}
          placeholder={t(`contact.form.${field}_placeholder`)}
          aria-invalid={!!errors[field]}
          aria-describedby={errors[field] ? `${field}-error` : undefined}
          className={`${inputClass(field)} resize-none`}
        />
      ) : (
        <input
          id={field}
          name={field}
          type={field === "email" ? "email" : "text"}
          autoComplete={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={t(`contact.form.${field}_placeholder`)}
          aria-invalid={!!errors[field]}
          aria-describedby={errors[field] ? `${field}-error` : undefined}
          className={inputClass(field)}
        />
      )}
      {errors[field] && (
        <p
          id={`${field}-error`}
          className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
        >
          <AlertCircle size={14} />
          {errors[field]}
        </p>
      )}
    </div>
  );

  return (
    <Section
      id="contact"
      index="05"
      label={t("contact.label")}
      title={t("contact.title")}
      subtitle={t("contact.subtitle")}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
        <Reveal className="card flex flex-col p-6 sm:p-8">
          <ul className="space-y-2">
            {contactInfo.map((info) => {
              const content = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-accent">
                    <info.icon size={17} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-500">
                      {info.title}
                    </span>
                    <span className="block truncate text-ink-100">
                      {info.value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={info.title}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/[0.04]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-2">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex gap-2 border-t border-white/[0.07] pt-6">
            {SOCIAL_LINKS.filter((link) => link.id !== "email").map(
              (social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <social.icon size={16} />
                  {social.label}
                </a>
              ),
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="card p-6 sm:p-8">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="grid gap-5 sm:grid-cols-2"
          >
            {renderField("name")}
            {renderField("email")}
            {renderField("message", true)}

            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary !px-6 !py-3 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {t(isSubmitting ? "contact.form.sending" : "contact.form.send")}
              </button>

              <AnimatePresence>
                {submitStatus !== "idle" && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-2 text-sm ${
                      submitStatus === "success"
                        ? "text-accent"
                        : "text-red-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle2 size={16} />
                    ) : (
                      <AlertCircle size={16} />
                    )}
                    {t(`contact.form.${submitStatus}`)}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
