import React from "react";
import PageHeaderContent from '../../components/page-header-content';
import { BsInfoCircleFill } from "react-icons/bs";
import logo from "../../images/logo.png";
import kkr from "../../images/kkr.png";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Real Estate",
    image: logo,
    link: "http://vrkgreens.com/",
  },
  {
    id: 3,
    name: "Jobs portal",
    link: "http://kkrjobs.com/",
    image: kkr,
  },
];

const Portfolio = () => {
  const [filteredvalue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);


  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
