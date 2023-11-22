import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.jpg"
import BannerImage2 from "../assets/Images/aboutus2.jpg"
import BannerImage3 from "../assets/Images/aboutus3.jpg"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-brown-900">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
           -------------------
            <HighlightText text={" "} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-white lg:w-[95%]">
              ----------------------------------------------------------------------------------------
              ----------------------------------------------------------------------------------------
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-10 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-9 lg:gap-3">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-brown-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#e68e5b] via-[#e85151] to-[#e9aa51] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                About FilmHarbour
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
                FilmHarbour is about giving entertainment to people for low of cost and this idea came out of a vision of offering people quality entertainment to their home-screens.So, grab your popcorn, settle into your favorite chair, and let FilmHarbour be your gateway to the enchanting world of movies – where every frame tells a story, and every story is an adventure waiting to unfold.
              </p>
              <p className="text-base font-medium text-white lg:w-[95%]">
                But that's not all – our site is a dynamic hub of film culture, offering exclusive interviews with industry insiders, in-depth retrospectives on legendary directors, and thought-provoking essays that delve into the socio-cultural impact of cinema. Stay ahead of the curve with our comprehensive coverage of film festivals.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Aim
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
                It's about the stories behind them. Immerse yourself in exclusive interviews with filmmakers, behind-the-scenes features, and in-depth retrospectives that provide a deeper understanding of the cinematic landscape. Stay on the pulse of the industry with up-to-the-minute news, coverage of film festivals, and insightful editorials that explore the evolving nature of cinema.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Aim
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
              The mission of FilmHarbour is to be the ultimate online destination for movie enthusiasts, offering a dynamic and immersive platform that goes beyond traditional film websites. Our goal is to cultivate a community that celebrates the art of storytelling through cinema and fosters a deep appreciation for the diverse narratives that shape our cultural landscape. FilmHarbour is dedicated to providing a comprehensive and user-friendly experience, with a curated selection of films spanning genres, eras, and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-brown-900 text-white">
        {/* Reviews from Other Watchers */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other watchers
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default About
