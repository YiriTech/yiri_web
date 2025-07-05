'use client';
import React, { useState } from 'react';
import Count from '../../common/count';
import bgImage from "../../../../public/assets/img/contact/contact-bg.png";
import image1 from "../../../../public/assets/img/contact/contact.png";
import image2 from "../../../../public/assets/img/contact/contact-2.jpg";

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

const ContactForm: React.FC = () => {
    // États du formulaire
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        phone: '',
        email: '',
        interest: ''
    });

    const [status, setStatus] = useState<FormStatus>({
        loading: false,
        success: false,
        error: ''
    });

    // Gestion des changements d'input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Soumission du formulaire
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Reset status
        setStatus({ loading: true, success: false, error: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: '' });
                // Reset form
                setFormData({ firstName: '', phone: '', email: '', interest: '' });
            } else {
                setStatus({ loading: false, success: false, error: result.message || 'Erreur lors de l\'envoi' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Erreur de connexion' });
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

                            <form onSubmit={handleSubmit} className="contact__one-form">
                                <div className="contact__one-form-top">
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        placeholder="Prénom..." 
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        disabled={status.loading}
                                    />
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        placeholder="Votre Téléphone..." 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        disabled={status.loading}
                                    />
                                </div>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="Votre E-mail..." 
                                    className="w-100" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status.loading}
                                />
                                <select 
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-100 mt-3 p-3 border rounded"
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
                                <button 
                                    type="submit" 
                                    className="btn-two w-100 mt-3"
                                    disabled={status.loading}
                                >
                                    {status.loading ? (
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