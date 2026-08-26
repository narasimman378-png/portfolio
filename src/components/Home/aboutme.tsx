import ImgOne from "../../assets/mainab.webp";
import ImgTwo from "../../assets/mainabtwo.webp";

function AbouTmE() {
  return (
    <>
      <section className="py-10 px-10 md:p-20" id="AboutMe" data-reveal>
        <div className="grid justify-between aligns md:grid lg:flex">
          <div className="content">
            <h2 className="text-left text-3xl font-bold text-[#0A2947] mb-5 md:text-5xl">
              About Me
            </h2>
            <p className="text-left text-sm text-[#0A2947] w-75 md:w-150 lg:w-200 leading-relaxed">
              I am a dedicated Developer with 4+ years of experience in WordPress Development and intermediate expertise in React.js. Based in Coimbatore, I bridge the gap between complex ideas and high-performance digital solutions. My expertise spans custom WordPress dashboards, scalable React applications, and SEO-optimized platforms. I specialize in site optimization, consistently hitting 85%+ on Google PageSpeed Insights, and delivering clean, scalable code for industries ranging from healthcare to real estate.
            </p>
          </div>
          <div className="btns mt-5 flex justify-end md:flex justify-start">
            <a href="#Ourprojects"><button className="bg-[#0A2947] text-white py-3 px-5 rounded-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1">
              See My Work
            </button></a>
          </div>
        </div>
      </section>
      <section className="" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          <div className="grid grid-cols-2">
            <div className="main-content mx-5 my-5">
              <img src={ImgOne} alt="" className="rounded-2xl" />
            </div>
            <div className="main-content mx-5 my-5">
              <img src={ImgTwo} alt="" className="rounded-2xl" />
            </div>
          </div>
      </section>
    </>
  );
}
export default AbouTmE;
