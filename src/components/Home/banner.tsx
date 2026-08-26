import Image from "../../assets/atom.png"

function Banner() {
  return (
    <section className="bg-one" id="Home" data-reveal="fade">
      <div className="">
        <div className="grid grid-cols-1 overlay md:grid-cols-1 px-10 py-20 lg:grid-cols-2">
          <div className="main-content mt-5 mb-5 md:mx-10 my-10" data-reveal="left">
            <h2 className="text-3xl text-left font-bold mb-2 text-transparent [-webkit-text-stroke:0.8px_white] md:text-6xl">
              Hi I'm Narasimman
            </h2>
            <h3 className="text-white text-sm text-left animate-typing md:text-2xl min-h-[1.5em]">
              {/* CSS will inject the text here */}
            </h3>
            <p className="text-white text-left mt-3">
              Elevating brands through immersive WordPress experiences. I build engaging, growth-focused websites that turn visitors into loyal customers.
            </p>

            <div className="btns grid justify-items-start mt-5 gap-5 md:flex">
              <a href="/narasimman-2026-resume.pdf" download="narasimman-2026-resume.pdf">
                <button className="btn-1 bg-white text-black text-sm px-4 py-2 cursor-pointer font-bold rounded-sm transition-transform duration-300 hover:-translate-y-1 md:px-5 md:py-4">
                  Download My CV →
                </button>
              </a>
              <a href="tel:6374262388">
                <button className="btn-2 border-2 border-amber-50 px-5 py-3 cursor-pointer font-bold text-white rounded-sm transition-transform duration-300 hover:-translate-y-1">
                  Call To Now →
                </button>
              </a>
            </div>
          </div>
          <div className="hero-compass">
           <img className="w-100" src={Image} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
