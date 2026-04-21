function MyEducations() {
  return (
    <section className="bg-3 animate-fade-in" id="Education">
      <div className="">
        <div className="grid grid-cols-1 overlay-Two py-15 px-15 md:grid-cols-2 p-20">
          <div className="main-content animate-fade-in-up pb-5 md:pb-0">
            <h2 className="text-white text-3xl text-left font-bold mb-2 animate-fade-in-up [animation-delay:120ms] md:text-6xl">
              15 Years
            </h2>
            <h3 className="text-white text-2xl text-left animate-fade-in-up [animation-delay:220ms]">
              Completed Educations
            </h3>
          </div>
          <div className="educations text-left text-white">
            <div className="flex gap-5 animate-fade-in-up [animation-delay:120ms]">
              <span className="text-2xl my-3 text-[#ffffff] md:text-4xl">01.</span>
              <div className="fx">
                <h2 className="my-3 text-sm md:text-2xl">
                Kamalanathan Memorial Higher Secondary School - Coimbatore
              </h2>
              <p className="my-3 text-sm md:text-sm">Course : Accountancy and Computer Science</p>
              <p className="text-sm md:text-sm">Year : 2014 - 2016</p>
              </div>
            </div>
            <hr className="my-5 animate-fade-in-up [animation-delay:120ms]" />
            <div className="flex gap-5 animate-fade-in-up [animation-delay:120ms]">
              <span className="text-2xl my-3 text-[#ffffff] md:text-4xl">02.</span>
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
