function AbouTmE() {
  return (
    <>
      <section className="py-10 px-10 animate-fade-in-up bg-[#FFF] md:p-20 bg-[#FFF]" id="AboutMe">
        <div className="grid justify-between aligns md:grid lg:flex">
          <div className="content">
            <h2 className="text-left text-3xl font-bold text-black mb-5 animate-fade-in-up [animation-delay:100ms] md:text-5xl">
              About Me
            </h2>
            <p className="text-left text-sm text-black w-75 animate-fade-in-up [animation-delay:220ms] md:w-150 lg:w-200">
              I am a dedicated Developer with 4+ years of experience in WordPress and React.js. Based in Coimbatore, I bridge the gap between complex ideas and high-performance digital solutions. My expertise spans custom WordPress dashboards, scalable React applications, and SEO-optimized platforms. I specialize in site optimization, consistently hitting 85%+ on Google PageSpeed Insights, and delivering clean, scalable code for industries ranging from healthcare to real estate.
            </p>
          </div>
          <div className="btns animate-slide-in-up [animation-delay:320ms] mt-5 flex justify-end md:flex justify-start">
            <a href="#Ourprojects"><button className="bg-black text-white py-3 px-5 rounded-sm cursor-pointer transition-transform duration-300 hover:-translate-y-1">
              See My Work
            </button></a>
          </div>
        </div>
      </section>
      <section className="bg-2 bg-[#FFF]">
        <div className="">
          <div className="grid grid-cols-2 overlay-one py-40 px-40">
            <div className="main-content mx-10 my-10"></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AbouTmE;
