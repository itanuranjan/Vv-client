import React from 'react';
import '../Styles/CardGallary.css'; // Import CSS file for styling

const CardGallery = () => {
  // Data for the cards
  const cardsData = [
    {
      alt: "Mythrill",
      coverImageSrc: "https://ucarecdn.com/8e179fba-fa81-46b2-b051-f0486aa9e593/darshanpatelfJPcAkseFMunsplash.jpg",
      characterSrc: "https://ucarecdn.com/cddb6992-4749-4648-a568-bafe9e323609/hanumanremovebgpreview.png"
    },
    {
      alt: "Mythrill",
      coverImageSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      characterSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      alt: "Mythrill",
      coverImageSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      characterSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      alt: "Mythrill",
      coverImageSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      characterSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      alt: "Mythrill",
      coverImageSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      characterSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      alt: "Mythrill",
      coverImageSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      characterSrc: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    // Add more card data as needed
  ];

  return (
    <div className="card-gallery">
      <div className="card-row">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            alt={card.alt}
            coverImageSrc={card.coverImageSrc}
            characterSrc={card.characterSrc}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ alt, coverImageSrc, characterSrc }) => {
  return (
    <div className="gallary-card">
        <div className="wrapper">
          <img src={coverImageSrc} className="cover-image" alt="" />
        </div>
        <img src={characterSrc} className="character" alt="" />
      
    </div>
  );
};

export default CardGallery;
