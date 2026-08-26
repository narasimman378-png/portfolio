// import Image from "../../assets/atom.png"

function MyEducations() {
  return (
    <section className="mx-10 my-10" id="Education" data-reveal>
      <div className="overlay">
        <div className="grid grid-cols-1 overlay-Two py-15 px-15 md:grid-cols-1 p-20 lg:grid-cols-2">
          <div className="main-content pb-5 md:pb-0 md:mb-5" data-reveal="left">
            <h2 className="text-[white] text-3xl text-left font-bold mb-2 md:text-6xl">
              15 Years
            </h2>
            <h3 className="text-[white] text-2xl text-left">
              Completed Educations
            </h3>
          </div>
          <div className="educations text-left text-[white]">
            <div className="flex gap-5" data-reveal="right" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
              <span className="text-2xl my-3 text-[white] md:text-4xl">01.</span>
              <div className="fx">
                <h2 className="my-3 text-sm md:text-2xl">
                Kamalanathan Memorial Higher Secondary School - Coimbatore
              </h2>
              <p className="my-3 text-sm md:text-sm">Course : Accountancy and Computer Science</p>
              <p className="text-sm md:text-sm">Year : 2014 - 2016</p>
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex gap-5" data-reveal="right" style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
              <span className="text-2xl my-3 text-[white] md:text-4xl">02.</span>
              <div className="fx">
                <h2 className="my-3 text-sm md:text-2xl">
                Kongu Nadu Collage of Arts and Science - Coimbatore
              </h2>
              <p className="my-3 text-sm md:text-sm">Course : BCA - Computer Applications</p>
              <p className="text-sm md:text-sm">Year : 2016 - 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MyEducations;
