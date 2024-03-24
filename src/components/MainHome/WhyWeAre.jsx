import React from "react";
import "../Styles/WhyWeAre.css";

const WhyWeAre = () => {
  const whyweare = [
    {
      id: 1,
      imageUrl:
        "https://ucarecdn.com/77a0233e-a4cb-4e3a-b061-238e743bd52c/emojismily.jpg",
      title: "20 million +",
      para: "Happy customers across 10,000+ experiences",
    },
    {
      id: 2,
      imageUrl:
        "https://ucarecdn.com/c67c531e-63ae-4128-9ff0-e6a574593a59/redstar.jpg",
      title: "4.4/5",
      para: "5,000+ verified reviews with 90% excellent score",
      //   role: "CTO, Company B"
    },
    {
      id: 3,
      imageUrl:
        "https://ucarecdn.com/b6697d6c-3fb0-430b-9a98-e55e3d3c7e22/earthsave.jpg",
      title:
        "In the Media",
      para: "Featured and recommended by the best brands",
      //   role: "Designer, Company C"
    },
    {
      id: 3,
      imageUrl:
        "https://ucarecdn.com/e6d87329-61d7-4826-be30-5e414bce7a49/smilycare.jpg",
      title:
        "24 x 7 Help Center",
      para: "Have a question? Live chat with local experts anywhere, anytime",
      //   role: "Designer, Company C"
    },
  ];

  return (
    <div className="whyweare-container" id="whywe">
      <h2>We are Here for you</h2>
      <div className="whyweare">
        {whyweare.map((whyweare) => (
          <div key={whyweare.id} className="whywe">
            <div className="whyweare-img">
              <img src={whyweare.imageUrl} alt={whyweare.title} />
            </div>
            <p>{whyweare.title}</p>
            <cite>
              {whyweare.para}, {whyweare.role}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeAre;
