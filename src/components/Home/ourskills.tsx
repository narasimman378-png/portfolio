import HTMLImg from "../../assets/html.png";
import CSSImg from "../../assets/css.png";
import JavascriptImg from "../../assets/js.png";
import ReactImg from "../../assets/react.png";
import BootstrapImg from "../../assets/bootstrap.png";
import WordPressImg from "../../assets/wordpress.png";
import PHPImg from "../../assets/php.png";
import WoocommerecImg from "../../assets/social.png";

function OurSkills() {
  const Skills = [
    {
      id: WordPressImg,
      name: "WordPress",
      persentage: "80%",
    },
    {
      id: HTMLImg,
      name: "HTML",
      persentage: "100%",
    },
    {
      id: CSSImg,
      name: "CSS",
      persentage: "100%",
    },
    {
      id: JavascriptImg,
      name: "JavaScript",
      persentage: "60%",
    },
    {
      id: ReactImg,
      name: "React",
      persentage: "70%",
    },
    {
      id: BootstrapImg,
      name: "Bootstrap",
      persentage: "80%",
    },
    {
      id: WoocommerecImg,
      name: "Woo Commerce",
      persentage: "70%",
    },
    {
      id: PHPImg,
      name: "PHP",
      persentage: "60%",
    },
  ];
  return (
    <section className="bg-Four">
      <div className="px-10 py-10 md:p-20">
        <h2 className="text-left text-3xl text-[white] mb-4 animate-fade-in-up md:text-5xl">Our Skills</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {Skills.map((item) => (
            <div className="animate-fade-in-up cards gap-5 aligns flex p-5 mt-5 shadow-sm rounded-2xl bg-[#ffffff0e]">
              <img src={item.id} className="w-10" alt="" />
              <div className="">
                <h5 className="text-left text-white">{item.name}</h5>
                <p className="text-left text-white text-sm md:text-2xl">
                  {item.persentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurSkills;
