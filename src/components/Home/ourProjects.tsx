import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import Arrow from "../../assets/arrows.png";
import ProOne from "../../assets/project-1.png";
import ProTwo from "../../assets/project-2.png";
import ProTwoTwoT from "../../assets/max-co.png";
import ProTwoTwoX from "../../assets/travelaway.png";
import ProTwoTwo from "../../assets/prothreetwo.png";
import ProThree from "../../assets/project-3.png";
import ProFour from "../../assets/project-4.png";
import ProFive from "../../assets/project-5.png";
import ProSix from "../../assets/project-6.png";
import ProSeven from "../../assets/project-7.png";
import ProEight from "../../assets/project-8.png";
import ProNine from "../../assets/project-9.png";
import ProTen from "../../assets/project-10.png";
import ProOneAlt from "../../assets/aaraspaces.png";
import ProTwoAlt from "../../assets/bareea.png";
import ProThreeAlt from "../../assets/sivasri.png";
import ProFourAlt from "../../assets/srimurugan.png";
import ProFiveAlt from "../../assets/sudhangrapics.png";

const projects = [
  {
    id: 1,
    expo: "01",
    title: "Sri Ramakrishna Hospital",
    desc: "Hospital and Healthcare",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.sriramakrishnahospital.com/",
    img: ProFour,
  },

  {
    id: 2,
    expo: "02",
    title: "Her RCM",
    desc: "Healthcare",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://herrcm.com/",
    img: ProOne,
  },

  {
    id: 3,
    expo: "03",
    title: "Max Vserv IT Solutions",
    desc: "Information Technologies",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://maxvservit.netlify.app/",
    img: ProTwoTwo,
  },

  {
    id: 4,
    expo: "04",
    title: "Travel Do",
    desc: "Travel & Tourism",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://tideway-travel.vercel.app/",
    img: ProTwoTwoX,
  },

  {
    id: 5,
    expo: "05",
    title: "MaxVserv & Co.",
    desc: "Real Estate",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://maxvservco.vercel.app/",
    img: ProTwoTwoT,
  },

  {
    id: 6,
    expo: "06",
    title: "Yaggna Group",
    desc: "Event Management and Coprate Company",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.yaggnagroup.com/",
    img: ProTwo,
  },

  {
    id: 7,
    expo: "07",
    title: "Gastro Care Coimbatore",
    desc: "Hospital and Healthcare",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.gastrocarecoimbatore.com/",
    img: ProThree,
  },

  {
    id: 8,
    expo: "08",
    title: "Health Basix",
    desc: "Healthcare",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.healthbasix.com/",
    img: ProFive,
  },

  {
    id: 9,
    expo: "09",
    title: "Sri Daksha Property Developers",
    desc: "Builders and Property Developers",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://sreedaksha.com/",
    img: ProSix,
  },

  {
    id: 10,
    expo: "10",
    title: "Ayyappa Technical Innovates",
    desc: "Fire and Safty Management",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://atinnovates.in/",
    img: ProSeven,
  },

  {
    id: 11,
    expo: "11",
    title: "Sri Daksha Landshapers",
    desc: "Builders and Property Developers",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://sreedaksha.com/",
    img: ProEight,
  },

  {
    id: 12,
    expo: "12",
    title: "Kumaraguru Property Developers",
    desc: "Builders and Property Developers",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.kumaraguruproperties.com/",
    img: ProNine,
  },

  {
    id: 13,
    expo: "13",
    title: "Sunset Flight Club",
    desc: "Travel and Tourism",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.sunsetflightclub.co.uk/",
    img: ProTen,
  },

  {
    id: 14,
    expo: "14",
    title: "Aaraspaces",
    desc: "Builders and Property Developers",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://www.aaraspaces.com/",
    img: ProOneAlt,
  },

  {
    id: 15,
    expo: "15",
    title: "Bareea",
    desc: "Organic Products Store",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://bareea.com/",
    img: ProTwoAlt,
  },

  {
    id: 16,
    expo: "16",
    title: "Siva Sri Groups",
    desc: "Builders and Property Developers",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://sivasrigroup.com/",
    img: ProThreeAlt,
  },

  {
    id: 17,
    expo: "17",
    title: "Sri Murugan Thirumana Mahal",
    desc: "Marriage and Event Management",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://srimuruganthirumanamahal.com/",
    img: ProFourAlt,
  },

  {
    id: 18,
    expo: "18",
    title: "Sudhan Graphics",
    desc: "Labels and Graphics products",
    phara:
      "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.",
    link: "https://sudhangraphics.co/",
    img: ProFiveAlt,
  },
];

function OurProjects() {
  return (
    <section className="OverSer bg-[#d5edff] px-10 py-10 rounded-2xl" id="Ourprojects">
      <div className="grid grid-cols-1 gap-10">
        <div className="conts_sec">
          <h2 className="text-3xl text-left text-[#0A2947] leading-snug md:text-5xl lg:text-5xl">
            Our Projects
          </h2>
        </div>
        <div className="slude">
          <Swiper
            modules={[Pagination, Navigation, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 5000,
            }}
            speed={1000}
            breakpoints={{
              767: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1080: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="serv bg-white px-2 py-2 rounded-4xl">
                  <img className="rounded-4xl" src={item.img} alt="" />
                  <div className="conts px-5 py-5">
                    <p className="text-left text-4xl text-black mb-2 text-transparent [-webkit-text-stroke:0.8px_black]">{item.expo}</p>
                    <h1 className="text-[#000] text-left text-xl font-medium">{item.title}</h1>
                    <p className="text-left text-[#312f2f] mt-2 mb-5 text-sm">
                      {item.desc}
                    </p>
                    <div className="divs block  items-baseline text-left text-sm text-black w-35 py-2 ">
                      <Link to={item.link} className="flex align_middle gap-2">
                        
                        Visit Site
                        <img className="w-10" src={Arrow} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
