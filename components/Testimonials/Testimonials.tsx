import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alexandru Gheorghe",
      source: "Google",
      rating: 5,
      date: "vor 7 Jahren",
      content: "Top, nettes Personal, immer wieder gerne!",
    },
    {
      id: 2,
      name: "Nol Haziri",
      source: "Google",
      rating: 5,
      date: "vor 4 Monaten",
      content:
        "Super freundliches Team, professionelle Beratung und ein perfektes Ergebnis. Ich bin jedes Mal rundum zufrieden. Absolut empfehlenswert!",
    },
    {
      id: 3,
      name: "Denny Grätz",
      source: "Google",
      rating: 5,
      date: "vor 6 Monaten",
      content:
        "Ich gehe seit Jahren mit meinem Sohn zu diesem Salon. Wir wurden immer top und super zufrieden bedient! Haarschnitt war immer nach unseren Vorstellungen.",
    },
  ];

  return (
    <section
      className={styles.testimonialsSection}
      style={{
        background: `linear-gradient(135deg, var(--primary-light) 0%, var(--gray-light) 100%)`,
        padding: "var(--space-xxl) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dekorative Elemente */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "var(--accent-gold-light)",
          opacity: "0.2",
          filter: "blur(30px)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "var(--accent-gold)",
          opacity: "0.1",
          filter: "blur(40px)",
        }}
      ></div>

      <div
        className={styles.container}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className={styles.sectionHeader}
          style={{
            textAlign: "center",
            marginBottom: "var(--space-xxl)",
          }}
        >
          <h2
            style={{
              color: "var(--primary-dark)",
              fontFamily: "var(--font-secondary)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "var(--space-md)",
              position: "relative",
              display: "inline-block",
            }}
          >
            <span
              style={{
                position: "absolute",
                bottom: "-15px",
                left: "0",
                width: "100%",
                height: "4px",
                background: `linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light))`,
                borderRadius: "2px",
              }}
            ></span>
            Was unsere Kunden sagen
          </h2>

          <p
            style={{
              color: "var(--gray-medium)",
              fontFamily: "var(--font-main)",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            Vertrauen Sie den Erfahrungen unserer zufriedenen Kunden. Lesen Sie
            ehrliche Bewertungen über unseren Service.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "var(--space-xl)",
            padding: "0 var(--space-md)",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{
                background: "var(--primary-light)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-xl)",
                boxShadow: "var(--shadow-lg)",
                transition: "var(--transition-medium)",
                position: "relative",
                overflow: "hidden",
                borderTop: `4px solid var(--accent-gold)`,
                transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
                zIndex: 1,
              }}
              className={styles.testimonialHover}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  fontSize: "5rem",
                  color: "var(--accent-gold-light)",
                  opacity: "0.1",
                  fontFamily: "var(--font-secondary)",
                  lineHeight: 1,
                }}
              >
                "
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "var(--space-md)",
                }}
              >
                <div
                  style={{
                    color: "var(--accent-gold)",
                    fontSize: "1.3rem",
                    letterSpacing: "2px",
                  }}
                >
                  {"★".repeat(testimonial.rating)}
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      background: "var(--gray-light)",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "var(--space-sm)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--gray-medium)"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </span>
                  <span
                    style={{
                      color: "var(--gray-medium)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {testimonial.source}
                  </span>
                </div>
              </div>

              <p
                style={{
                  color: "var(--gray-dark)",
                  fontFamily: "var(--font-main)",
                  lineHeight: "var(--line-height-base)",
                  marginBottom: "var(--space-xl)",
                  fontSize: "1.05rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {testimonial.content}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px dashed var(--gray-light)",
                  paddingTop: "var(--space-md)",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-gold-light) 100%)`,
                    marginRight: "var(--space-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary-light)",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3
                    style={{
                      color: "var(--primary-dark)",
                      fontFamily: "var(--font-secondary)",
                      marginBottom: "var(--space-xs)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--gray-medium)",
                      fontSize: "0.85rem",
                    }}
                  >
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
