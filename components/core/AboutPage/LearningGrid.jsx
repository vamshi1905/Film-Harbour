import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
  {
    order: -1,
    heading: "Your Universe of ",
    highliteText: "Cinematic Wonders!",
    description:
      "Welcome to a cinematic journey where every click opens a door to a world of stories waiting to be explored.",
    BtnText: "Start your Movie Marathon!",
    BtnLink: "/signup",
  },
  {
    order: 1,
    heading: "Movies based on your choice",
    description:
      "The latest and best movies are available for a very low cost!",
  },
  {
    order: 2,
    heading: "Our Languages and Genres",
    description:
      "FilmHarbour contains 4 different languages and 7+ genres of movies.",
  },
  {
    order: 3,
    heading: "Variety of movies",
    description:
      "FilmHarbour brings to you different tastes of movies of your choice.",
  },
  {
    order: 4,
    heading: `Rating and Review System`,
    description:
      "FilmHarbour brings you the ratings and reviews of every movie.",
  },
  {
    order: 5,
    heading: "No compromise on quality",
    description:
      "FilmHarbour brings you the best quality content available at a low price.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-yellow-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-yellow-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-white font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-white font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
