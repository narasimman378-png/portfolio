import bgImg from "../../assets/atom-red.png";

function SelectedWorks() {
  const work = [
    {
      id: "1",
      heading: "Custom WordPress Dashboard Suite",
      phara:
        "Designed and shipped internal-style dashboards on WordPress: Google Review, Video Consultant, Custom Service, and LMS reusable components, clear UX, and integrations aligned with client operations.",
    },
    {
      id: "2",
      heading: "High-Performance WordPress Themes",
      phara:
        "Fully responsive, SEO-oriented themes with a strong focus on Core Web Vitals and accessibility consistently moving sites from roughly 40% scores to 85%+ PageSpeed and accessibility on client builds.",
    },
    {
      id: "3",
      heading: "Healthcare & SaaS Optimization",
      phara:
        "Led performance and SEO initiatives for healthcare sites with 90+ PageSpeed and accessibility targets, plus structured SEO and asset optimization through lazy loading, caching, and media compression.",
    },
    {
      id: "4",
      heading: "Plugins, Templates & React UI Kits",
      phara:
        "Custom WordPress plugins for product-specific needs, 12+ tailored responsive templates with page builders, and reusable React templates that cut turnaround time by about 30%.",
    },
  ];

  return (
    <section className="bg-[#fffef2]">
      <div className="grid grid-cols-1 gap-10 p-20 px-10 py-10 md:grid-cols-2">
        <h2 className="text-left text-3xl text-[black] animate-fade-in-up [animation-delay:100ms] md:text-5xl">
          Our Selected <br /> Work
        </h2>
        {work.map((item) => (
          <div
            key={item.id}
            className="conte rounded-xl border-2 border-[#9b1414] p-5 animate-fade-in-up [animation-delay:100ms] md:p-10"
          >
            <h1 className="mb-3 text-left text-[black] md:text-2xl">{item.heading}</h1>
            <p className="mb-3 text-left text-sm text-[black]">{item.phara}</p>
          </div>
        ))}
        <div className="bgImg">
          <img className="m-auto block h-auto w-60 opacity-30" src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SelectedWorks;
