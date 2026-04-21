import bgImg from "../../assets/atom-red.png"

function SelectedWorks() {
    const Work = [
        {
            id: "1",
            heading: "Custom WordPress Dashboard Suite",
            phara: "Designed and shipped internal-style dashboards on WordPress: Google Review, Video Consultant, Custom Service, and LMS — reusable components, clear UX, and integrations aligned with client operations."
        },
        {
            id: "2",
            heading: "High-Performance WordPress Themes",
            phara: "Fully responsive, SEO-oriented themes with a strong focus on Core Web Vitals and accessibility — consistently moving sites from roughly 40% scores to 85%+ PageSpeed and accessibility on client builds."
        },
        {
            id: "3",
            heading: "Healthcare & SaaS Optimization",
            phara: "Led performance and SEO initiatives for healthcare sites (90+ PageSpeed & accessibility targets), plus structured SEO and asset optimization — lazy loading, caching, and media compression where it matters."
        },
        {
            id: "4",
            heading: "Plugins, Templates & React UI Kits",
            phara: "Custom WordPress plugins for product-specific needs; 12+ tailored responsive templates with page builders; reusable React templates that cut turnaround time by about 30%."
        }
    ];
  return (
    <section className="bg-[#fffef2]">
        
      <div className="grid grid-cols-1 px-10 py-10 md:grid-cols-2 p-20 gap-10">
        <h2 className="text-left text-3xl text-[black] animate-fade-in-up [animation-delay:100ms] md:text-5xl">Our Selected <br /> Work</h2>
        {Work.map((item) => (
        <div className="conte p-5 rounded-xl border-2 border-[#9b1414] animate-fade-in-up [animation-delay:100ms] md:p-10">
          <h1 className="text-left mb-3 text-[black] md:text-2xl">{item.heading}</h1>
          <p className="text-left text-sm mb-3 text-[black]">
            {item.phara}
          </p>
        </div>
        ))}
        <div className="bgImg">
          <img className="w-60 opacity-30 h-auto block m-auto" src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SelectedWorks;
