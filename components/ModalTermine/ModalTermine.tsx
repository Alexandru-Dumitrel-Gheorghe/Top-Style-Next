"use client";
import { useState, useRef } from "react";
import styles from "./ModalTermine.module.css";
import emailjs from "@emailjs/browser";
import {
  FaCheck,
  FaClock,
  FaEuroSign,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const services = [
  {
    category: "HERREN BEREICH",
    icon: <FaUser />,
    items: [
      {
        id: "service1",
        name: "Waschen, schneiden, stylen",
        duration: "25 Minuten",
        price: "27,00",
      },
      {
        id: "service2",
        name: "Bartrasur & Pflege",
        duration: "12 Minuten",
        price: "15,00",
      },
      {
        id: "service3",
        name: "All-inclusive Paket",
        description:
          "Waschen & Massage, Schneiden, Stylen, Bartrasur, Augenbrauen zupfen",
        duration: "45 Minuten",
        price: "49,00",
      },
      {
        id: "service4",
        name: "Kinderhaarschnitt",
        duration: "15 Minuten",
        price: "18,00",
      },
      {
        id: "service5",
        name: "Gesichtshaarentfernung mit Wachs",
        duration: "10 Minuten",
        price: "12,00",
      },
      {
        id: "service6",
        name: "Augenbrauen zupfen & formen",
        duration: "10 Minuten",
        price: "12,00",
      },
    ],
  },
  {
    category: "COLORATION",
    icon: <FaEuroSign />,
    items: [
      {
        id: "service7",
        name: "Damen-Farbe komplett",
        duration: "50 Minuten",
        price: "80,00",
      },
    ],
  },
];

export default function ModalTermine({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [step, setStep] = useState<"service" | "form">("service");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleServiceSelect = (service: any) => {
    setSelectedService(service);
  };

  const handleNextStep = () => {
    if (selectedService) setStep("form");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setStep("service");
          setSelectedService(null);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.text);
        alert(
          "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        {!isSuccess ? (
          <>
            <h2 className={styles.modalTitle}>
              <FaCalendarAlt className={styles.titleIcon} />
              {step === "service" ? "Dienstleistung wählen" : "Terminanfrage"}
            </h2>

            {step === "service" ? (
              <>
                <div className={styles.serviceCategories}>
                  {services.map((category) => (
                    <div key={category.category} className={styles.category}>
                      <h3 className={styles.categoryTitle}>
                        {category.icon}
                        {category.category}
                      </h3>
                      <div className={styles.serviceList}>
                        {category.items.map((service) => (
                          <div
                            key={service.id}
                            className={`${styles.serviceCard} ${
                              selectedService?.id === service.id
                                ? styles.selected
                                : ""
                            }`}
                            onClick={() => handleServiceSelect(service)}
                          >
                            <div className={styles.serviceHeader}>
                              <h4 className={styles.serviceName}>
                                {service.name}
                              </h4>
                              {selectedService?.id === service.id && (
                                <FaCheck className={styles.selectedIcon} />
                              )}
                            </div>
                            {service.description && (
                              <p className={styles.serviceDescription}>
                                {service.description}
                              </p>
                            )}
                            <div className={styles.serviceMeta}>
                              <span className={styles.serviceDuration}>
                                <FaClock /> {service.duration}
                              </span>
                              <span className={styles.servicePrice}>
                                <FaEuroSign /> {service.price} €
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className={`${styles.primaryButton} ${
                    !selectedService ? styles.disabled : ""
                  }`}
                  onClick={handleNextStep}
                  disabled={!selectedService}
                >
                  Weiter zur Terminanfrage
                </button>
              </>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={styles.bookingForm}
              >
                <input
                  type="hidden"
                  name="service"
                  value={selectedService?.name}
                />
                <input
                  type="hidden"
                  name="duration"
                  value={selectedService?.duration}
                />
                <input
                  type="hidden"
                  name="price"
                  value={selectedService?.price}
                />

                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.inputLabel}>
                    <FaUser className={styles.inputIcon} />
                    <span>Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ihr vollständiger Name"
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.inputLabel}>
                    <FaEnvelope className={styles.inputIcon} />
                    <span>E-Mail</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Ihre E-Mail-Adresse"
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.inputLabel}>
                    <FaPhone className={styles.inputIcon} />
                    <span>Telefon</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Ihre Telefonnummer"
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="date" className={styles.inputLabel}>
                    <FaCalendarAlt className={styles.inputIcon} />
                    <span>Bevorzugtes Datum</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={styles.inputField}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.inputLabel}>
                    <span>Besondere Wünsche</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Haben Sie besondere Wünsche oder Anmerkungen?"
                    className={styles.textareaField}
                    rows={3}
                  ></textarea>
                </div>

                <div className={styles.selectedServiceInfo}>
                  <h4>Ausgewählte Dienstleistung:</h4>
                  <p>
                    <strong>{selectedService?.name}</strong> -{" "}
                    {selectedService?.duration} ({selectedService?.price} €)
                  </p>
                </div>

                <div className={styles.formActions}>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => setStep("service")}
                  >
                    Zurück
                  </button>
                  <button
                    type="submit"
                    className={styles.primaryButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Wird gesendet..." : "Termin anfragen"}
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h3>Vielen Dank für Ihre Anfrage!</h3>
            <p>
              Wir haben Ihre Terminanfrage erhalten und melden uns
              schnellstmöglich bei Ihnen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
