import React from "react";
import "../Styles/WhyWeAre.css";

const WhyWeAre = () => {
  const whyweare = [
    {
      id: 1,
      imageUrl:
        "https://ucarecdn.com/8f3afa94-412c-4f99-a27b-6fa296bfdfb1/emojismilyremovebgpreview.png",
      title: " million +",
      para: "Happy customers across 10,000+ experiences",
    },
    {
      id: 2,
      imageUrl:
        "https://ucarecdn.com/c4e32aa7-0d9a-4162-a0d0-fa51f4c26ee5/redstarremovebgpreview.png",
      title: "4.4/5",
      para: "5,000+ verified reviews with 90% excellent score",
      //   role: "CTO, Company B"
    },
    {
      id: 3,
      imageUrl:
        "https://ucarecdn.com/bb9f019c-8d5e-4ed5-a281-01c92fb47c7d/earthsaveremovebgpreview.png",
      title:
        "In the Media",
      para: "Featured and recommended by the best brands",
      //   role: "Designer, Company C"
    },
    {
      id: 4,
      imageUrl:
        "https://ucarecdn.com/c3132a9f-8e6a-4b8e-be90-fc707500d664/smilycareremovebgpreview.png",
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
