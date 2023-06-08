import React, { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const accordionItems = [
    {
      title: "Y-a-t-il des frais supplémentaires pour la livraison ?",
      content:
        "Il n'y a aucun frais supplémentaires à régler, tout est compris dans le tarif pour mint ton NFT.",
    },
    {
      title: "Quels sont les délais de livraison ?",
      content:
        "Une semaine après la fermeture de la boutique, ce délai comprend la mise en production, réception, livraison.",
    },
    {
      title: "Est-ce que je recois un mail de confirmation ?",
      content:
        "Vous recevrez un mail de confirmation lorsque la boutique fermera ses portes.",
    },
    {
      title:
        "Si j'ai fais une erreur en remplissant le formulaire, je peux faire machine arrière ?",
      content:
        "Bien-sur ! Contactez-nous au plus vite pour que nous puissions modifier vos informations.",
    },
    {
      title: "En cas de désistement comment me faire rembourser ?",
      content:
        "Malheureusement cette fonctionnalité n'est pas disponible pour le moment, si vous avez mint & burn votre NFT nous ne pourrons rien faire dans l'immédiat.",
    },
    {
      title: "Comment seront stockées mes données ?",
      content:
        "Les données seront supprimées dès lors que nous mettons en livraison les articles, pour tout problème concernant ta commande merci de nous contacter via Twitter ou Discord.",
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#0D0D0D" }}>
        <h1
          style={{
            backgroundColor: "#0D0D0D",
            textAlign: "center",
            paddingTop: "5rem",
            paddingBottom: "3rem",
            width: "100%",
            color: "white",
            fontWeight: "bold",
          }}
        >
          FAQ
        </h1>
        <div
          className="my-accordion-container"
          style={{
            width: "65%",
            margin: "0 auto",
            paddingBottom: "8rem",
          }}
        >
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div
                className="accordion-item"
                key={index}
                style={{ border: "1px solid #0D0D0D" }}
              >
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeIndex === index ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => handleAccordionClick(index)}
                    style={{
                      backgroundColor: "#0D0D0D",
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      textDecoration: "none"
                    }}
                  >
                    {item.title}
                  </button>
                </h2>
                {activeIndex === index && (
                  <div
                    className="accordion-content"
                    style={{
                      backgroundColor: "#0D0D0D",
                      color: "#6c757d",
                      paddingLeft: "3rem",
                    }}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
