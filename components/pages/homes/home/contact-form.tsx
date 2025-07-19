'use client';
import React, { useState } from 'react';
import Count from '../../common/count';
import bgImage from "../../../../public/assets/img/contact/contact-bg.png";
import image1 from "../../../../public/assets/img/contact/contact.png";
import image2 from "../../../../public/assets/img/contact/contact-2.jpg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Types pour le formulaire
interface FormData {
    firstName: string;
    phone: string;
    email: string;
    interest: string;
}

interface FormStatus {
    loading: boolean;
    success: boolean;
    error: string;
}

// Schéma zod pour le formulaire de contact
const contactSchema = z.object({
    firstName: z.string().min(2, "Le prénom est requis"),
    phone: z.string().min(6, "Le téléphone est requis"),
    email: z.string().email("Email invalide"),
    interest: z.string().min(2, "L'intérêt est requis"),
});
type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC = () => {
    // États du formulaire
    const [status, setStatus] = useState<FormStatus>({
        loading: false,
        success: false,
        error: ''
    });
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState<{loading: boolean, success: boolean, error: string}>({loading: false, success: false, error: ""});

    // react-hook-form
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: '',
            phone: '',
            email: '',
            interest: ''
        }
    });

    // Soumission du formulaire
    const onSubmit = async (data: ContactFormData) => {
        setStatus({ loading: true, success: false, error: '' });
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                setStatus({ loading: false, success: true, error: '' });
                reset();
            } else {
                setStatus({ loading: false, success: false, error: result.message || 'Erreur lors de l\'envoi' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Erreur de connexion' });
        }
    };

    // Ajout du handler newsletter
    const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewsletterStatus({ loading: true, success: false, error: "" });
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletterEmail }),
            });
            const result = await response.json();
            if (response.ok) {
                setNewsletterStatus({ loading: false, success: true, error: "" });
                setNewsletterEmail("");
            } else {
                setNewsletterStatus({ loading: false, success: false, error: result.message || 'Erreur lors de l\'inscription' });
            }
        } catch {
            setNewsletterStatus({ loading: false, success: false, error: 'Erreur de connexion' });
        }
    };

    return (
        <>
            <div className="contact__one section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-end gy-4 justify-content-between">
                        <div className="col-xl-6">
                            <div className="contact__one-title">
                                <span className="subtitle-one">Rejoignez-nous</span>
                                <h2>Participez à la Révolution Tech Africaine</h2>
                                <p className="mt-3">
                                    Étudiants, entrepreneurs, institutions, partenaires... Ensemble, 
                                    créons l'avenir numérique de l'Afrique.
                                </p>
                            </div>
                            
                            {/* Messages de statut */}
                            {status.success && (
                                <div className="alert alert-success mb-3">
                                    Message envoyé avec succès ! Nous vous contacterons bientôt.
                                </div>
                            )}
                            {status.error && (
                                <div className="alert alert-danger mb-3">
                                    {status.error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="contact__one-form">
                                <div className="contact__one-form-top">
                                    <input
                                        type="text"
                                        placeholder="Prénom..."
                                        {...register("firstName")}
                                        required
                                        disabled={status.loading}
                                        className={errors.firstName ? "border-red-500" : ""}
                                    />
                                    {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                                    <input
                                        type="tel"
                                        placeholder="Votre Téléphone..."
                                        {...register("phone")}
                                        required
                                        disabled={status.loading}
                                        className={errors.phone ? "border-red-500" : ""}
                                    />
                                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                                </div>
                                <input
                                    type="email"
                                    placeholder="Votre E-mail..."
                                    className={`w-100 ${errors.email ? "border-red-500" : ""}`}
                                    {...register("email")}
                                    required
                                    disabled={status.loading}
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                                <select
                                    {...register("interest")}
                                    className={`w-100 mt-3 p-3 border rounded ${errors.interest ? "border-red-500" : ""}`}
                                    required
                                    disabled={status.loading}
                                >
                                    <option value="">Sélectionnez votre intérêt...</option>
                                    <option value="formation">Formation YIRI Academy</option>
                                    <option value="digitalisation">Digitalisation d'entreprise</option>
                                    <option value="partenariat">Partenariat stratégique</option>
                                    <option value="conference">Participation aux conférences</option>
                                    <option value="concours">Concours d'innovation</option>
                                    <option value="autre">Autre</option>
                                </select>
                                {errors.interest && <span className="text-red-500 text-xs">{errors.interest.message}</span>}
                                <button
                                    type="submit"
                                    className="btn-two w-100 mt-3"
                                    disabled={status.loading || isSubmitting}
                                >
                                    {status.loading || isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            Rejoindre l'Aventure
                                            <i className="fas fa-chevron-right"></i>
                                        </>
                                    )}
                                </button>
                            </form>
                            {/* Newsletter */}
                            <div className="newsletter-box mt-5 p-4 bg-light rounded shadow-sm">
                                <h5 className="mb-2">Recevez nos actualités</h5>
                                <form onSubmit={handleNewsletter} className="flex flex-col md:flex-row gap-2">
                                    <input
                                        type="email"
                                        placeholder="Votre email pour la newsletter..."
                                        value={newsletterEmail}
                                        onChange={e => setNewsletterEmail(e.target.value)}
                                        required
                                        className="form-control"
                                        disabled={newsletterStatus.loading}
                                    />
                                    <button type="submit" className="btn btn-primary" disabled={newsletterStatus.loading}>
                                        {newsletterStatus.loading ? 'Inscription...' : 'Je m\'inscris'}
                                    </button>
                                </form>
                                {newsletterStatus.success && <div className="alert alert-success mt-2">Inscription réussie !</div>}
                                {newsletterStatus.error && <div className="alert alert-danger mt-2">{newsletterStatus.error}</div>}
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact__one-right">
                                <div className="row gy-4 align-items-end">
                                    <div className="col-xl-8 col-lg-4 col-md-6 col-sm-6">
                                        <img src={image1.src} alt="Contact" />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="contact__one-counter-img">
                                            <img src={image2.src} alt="Experience" />
                                        </div>
                                        <div className="contact__one-counter">
                                            <div className="counter-only">
                                                <h3 className="counter"><Count number={200}/></h3>
                                                <h3>+</h3>
                                            </div>
                                            <span>Jeunes à former</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default ContactForm;