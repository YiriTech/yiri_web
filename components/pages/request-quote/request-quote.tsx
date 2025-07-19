"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z.email("Email invalide"),
  number: z.string().min(6, "Numéro requis"),
  company: z.string().min(2, "Entreprise requise"),
  website: z.string().url("URL invalide"),
  services: z.array(z.string()).min(1, "Sélectionnez au moins un service"),
  message: z.string().min(5, "Message requis"),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  { id: "academy", label: "Yiri Academy" },
  { id: "conference", label: "Yiri Conférence" },
  { id: "thinktank", label: "Yiri Think Tank" },
  { id: "digital", label: "Yiri Digital" },
];

const RequestQuoteMain = () => {
  const [status, setStatus] = useState<{ success: boolean; error: string }>({ success: false, error: "" });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      company: "",
      website: "",
      services: [],
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setStatus({ success: false, error: "" });
    try {
      const response = await fetch('/api/request-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus({ success: true, error: "" });
        reset();
      } else {
        setStatus({ success: false, error: result.message || "Erreur lors de l'envoi" });
      }
    } catch {
      setStatus({ success: false, error: "Erreur de connexion" });
    }
  };

  return (
    <div className="request-quote__area section-padding">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 rounded-lg shadow-md max-w-6xl mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="">
              <label htmlFor="first-name">Prénom *</label>
              <input type="text" id="first-name" placeholder="Votre prénom" {...register("firstName")} className={errors.firstName ? "border-red-500" : ""} />
              {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
            </div>
            <div className="">
              <label htmlFor="last-name">Nom *</label>
              <input type="text" id="last-name" placeholder="Votre nom" {...register("lastName")} className={errors.lastName ? "border-red-500" : ""} />
              {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
            </div>
            <div className="">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Votre email" {...register("email")} className={errors.email ? "border-red-500" : ""} />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>
            <div className="">
              <label htmlFor="number">Téléphone *</label>
              <input type="text" id="number" placeholder="Votre numéro" {...register("number")} className={errors.number ? "border-red-500" : ""} />
              {errors.number && <span className="text-red-500 text-xs">{errors.number.message}</span>}
            </div>
            <div className="">
              <label htmlFor="company">Entreprise/Organisation *</label>
              <input type="text" id="company" placeholder="Votre entreprise" {...register("company")} className={errors.company ? "border-red-500" : ""} />
              {errors.company && <span className="text-red-500 text-xs">{errors.company.message}</span>}
            </div>
            <div className="">
              <label htmlFor="website">Site web *</label>
              <input type="text" id="website" placeholder="https://votre-site.com" {...register("website")} className={errors.website ? "border-red-500" : ""} />
              {errors.website && <span className="text-red-500 text-xs">{errors.website.message}</span>}
            </div>
          </div>
          <div className="request-quote__area-service-input mt-4">
            <span>Quels services souhaitez-vous ? *</span>
            <div className="flex flex-wrap gap-4 mt-2">
              {SERVICES.map((srv) => (
                <div className="request-quote__area-service-input-single flex items-center gap-2" key={srv.id}>
                  <input type="checkbox" id={srv.id} value={srv.label} {...register("services")} />
                  <label htmlFor={srv.id}>{srv.label}</label>
                </div>
              ))}
            </div>
            {errors.services && <span className="text-red-500 text-xs block mt-1">{errors.services.message as string}</span>}
          </div>
          <label htmlFor="message" className="mb-2 mt-4 block">Message *</label>
          <textarea id="message" placeholder="Décrivez votre besoin..." {...register("message")} className={errors.message ? "border-red-500" : ""} rows={4}></textarea>
          {errors.message && <span className="text-red-500 text-xs block">{errors.message.message}</span>}
          <button type="submit" className="btn-two mt-6 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
          </button>
          {status.success && <div className="alert alert-success mt-4">Votre demande a bien été envoyée !</div>}
          {status.error && <div className="alert alert-danger mt-4">{status.error}</div>}
        </form>
      </div>
    </div>
  );
};

export default RequestQuoteMain;