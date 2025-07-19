"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import FormArea from "./form";
import Header from "@/components/layout/headers/header/Header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

const contactSchema = z.object({
    firstName: z.string().min(2, "Le prénom est requis"),
    email: z.email("Email invalide"),
    phone: z.string().min(6, "Le téléphone est requis"),
    subject: z.string().min(2, "Le sujet est requis"),
    message: z.string().min(5, "Le message est requis"),
});
type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        }
    });
    const [status, setStatus] = React.useState<{ success: boolean; error: string }>({ success: false, error: "" });

    const onSubmit = async (data: ContactFormData) => {
        setStatus({ success: false, error: "" });
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: data.firstName,
                    email: data.email,
                    phone: data.phone,
                    interest: data.subject, // on mappe subject sur interest pour la compatibilité
                    message: data.message
                }),
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
        <>
            <SEO pageTitle="Contactez-nous" />        
            <Header variant="three" />
            <BreadCrumb title="Contactez-nous" innerTitle="Contactez-nous" />
            <div className="contact__two section-padding">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-6">
                            <div className="contact__two-content">
                                <div className="contact__two-title">
                                    <span className="subtitle-one">Contactez-nous</span>
                                    <h2>Rejoignez la Révolution Tech Africaine</h2>
                                    <p>Vous êtes un jeune passionné de tech, une entreprise en quête de digitalisation, ou un partenaire souhaitant soutenir notre mission ? Contactez-nous pour participer à la transformation numérique de l'Afrique.</p>
                                </div>
                                <div className="contact__two-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" placeholder="Prénom" {...register("firstName")} className={errors.firstName ? "border-red-500" : ""} />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </div>
                    </div>
                    <div className="col-md-6 md-mb-30">
                        <div className="contact__form-area-item">
                            <input type="email" placeholder="Email" {...register("email")} className={errors.email ? "border-red-500" : ""} />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="col-md-6 mb-30">
                        <div className="contact__form-area-item">
                            <input type="tel" placeholder="Téléphone" {...register("phone")} className={errors.phone ? "border-red-500" : ""} />
                            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <input type="text" placeholder="Sujet" {...register("subject")} className={errors.subject ? "border-red-500" : ""} />
                            {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
                        </div>
                    </div>
                    <div className="col-md-12 mb-30">
                        <div className="contact__form-area-item">
                            <textarea placeholder="Message" {...register("message")} className={errors.message ? "border-red-500" : ""}></textarea>
                            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact__two-right-form-item">
                            <button className="btn-one" type="submit" disabled={isSubmitting}> {isSubmitting ? "Envoi..." : "Envoyer"} </button>
                        </div>
                    </div>
                    {status.success && <div className="alert alert-success mt-3">Message envoyé avec succès !</div>}
                    {status.error && <div className="alert alert-danger mt-3">{status.error}</div>}
                </div>
            </form>       
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact__two-contact-info">
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-1.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Email</h4>
                                        <span>contact@yiri.tech</span>
                                        <span>info@yiri.tech</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-2.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Réseaux Sociaux</h4>
                                        <span>LinkedIn : YIRI TECH AFRICA</span>
                                        <span>Twitter : @YiriTechAfrica</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon//service-3.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Horaires</h4>
                                        <span>Lundi - Vendredi : 9h - 18h</span>
                                        <span>Samedi : 9h - 13h</span>
                                    </div>
                                </div>
                                <div className="contact__two-single-info">
                                    <div className="contact__two-single-info-icon">
                                        <img src="assets/img/icon/service-4.png" alt="image" />
                                    </div>
                                    <div className="contact__two-single-info-content">
                                        <h4>Localisation</h4>
                                        <span>Conakry, Guinée</span>
                                        <span>Rabat, Maroc</span>
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterOne />
            <ScrollToTop />
        </>
    );
};

export default ContactUs;