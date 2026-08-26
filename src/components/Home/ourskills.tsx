import HTMLImg from "../../assets/html.png";
import CSSImg from "../../assets/css.png";
import JavascriptImg from "../../assets/js.png";
import ReactImg from "../../assets/react.png";
import BootstrapImg from "../../assets/bootstrap.png";
import WordPressImg from "../../assets/wordpress.png";
import PHPImg from "../../assets/php.png";
import WoocommerecImg from "../../assets/social.png";
import ShopifyImg from "../../assets/shopify.png";
import ElementorImg from "../../assets/elementor.png";
import WpbeakImg from "../../assets/wpbakery-logo.png";
import ACFImg from "../../assets/images.png";
import TailwindImg from "../../assets/tailwindcss-mark.96ee6a5a (1).svg";
import GADSImg from "../../assets/logo.png";

function OurSkills() {
  const Skills = [
    {
      id: WordPressImg,
      name: "WordPress",
      // percentage: "80%",
    },
    {
      id: HTMLImg,
      name: "HTML",
      // percentage: "100%",
    },
    {
      id: CSSImg,
      name: "CSS",
      // percentage: "100%",
    },
    {
      id: JavascriptImg,
      name: "JavaScript",
      // percentage: "60%",
    },
    {
      id: ReactImg,
      name: "React",
      // percentage: "70%",
    },
    {
      id: BootstrapImg,
      name: "Bootstrap",
      // percentage: "80%",
    },
    {
      id: WoocommerecImg,
      name: "Woo Commerce",
      // percentage: "90%",
    },
    {
      id: PHPImg,
      name: "PHP",
      // percentage: "60%",
    },
    {
      id: ShopifyImg,
      name: "Shopify",
      // percentage: "70%",
    },
    {
      id: ElementorImg,
      name: "Elementor",
      // percentage: "90%",
    },
    {
      id: WpbeakImg,
      name: "WPBakery",
      // percentage: "50%",
    },
    {
      id: ACFImg,
      name: "ACF",
      // percentage: "80%",
    },
    {
      id: TailwindImg,
      name: "Tailwind",
      // percentage: "80%",
    },
    {
      id: GADSImg,
      name: "Google Ads",
      // percentage: "40%",
    },
  ];

  return (
    <div className="abFour">
      <section className="bg-Four" data-reveal>
      <div className="px-10 py-10 md:p-20">
        <h2 className="text-left text-3xl text-[white] mb-4 md:text-5xl">Our Skills</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {Skills.map((item, index) => (
            <div key={item.name} className="cards gap-5 aligns flex p-5 mt-5 shadow-sm rounded-2xl bg-[#f3fcff2a]" data-reveal style={{ "--reveal-delay": `${(index % 4) * 80}ms` } as React.CSSProperties}>
              <img src={item.id} className="w-10" alt={item.name} />
              <div className="">
                <h5 className="text-left text-white">{item.name}</h5>
                {/* <p className="text-left text-white text-sm md:text-2xl">
                  {item.percentage}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
    
  );
}

export default OurSkills;
