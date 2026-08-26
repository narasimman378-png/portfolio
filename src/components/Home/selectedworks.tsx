function SelectedWorks() {
  const work = [
    {
      id: "1",
      sub: "1",
      heading: "Custom WordPress Feature Suite",
      phara:
        "Designed and integrated specialized client-facing website modules—such as video consultation tools, review displays, and LMS components—into custom WordPress themes. Delivered smooth UX and seamless API integrations aligned with business operations..",
    },
    {
      id: "2",
      sub: "2",
      heading: "High-Performance WordPress Themes",
      phara:
        "Fully responsive, SEO-oriented themes with a strong focus on Core Web Vitals and accessibility consistently moving sites from roughly 40% scores to 85%+ PageSpeed and accessibility on client builds.",
    },
    {
      id: "3",
      sub: "3",
      heading: "Healthcare & SaaS Optimization",
      phara:
        "Led performance and SEO initiatives for healthcare sites with 90+ PageSpeed and accessibility targets, plus structured SEO and asset optimization through lazy loading, caching, and media compression.",
    },
    {
      id: "4",
      sub: "4",
      heading: "Plugins, Templates & React UI Kits",
      phara:
        "Custom WordPress plugins for product-specific needs, 12+ tailored responsive templates with page builders, and reusable React templates that cut turnaround time by about 30%.",
    },
  ];

  return (
    <section className="mx-10 my-5" data-reveal>
      <h2 className="text-left text-3xl text-[#0A2947] md:text-5xl">
        Our Selected <br /> Work
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 my-10 lg:grid-cols-4">
        {work.map((item, index) => (
          <div className="d border-r-1 px-5" key={item.id} data-reveal style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}>
            <h1 className="text-left text-[#0A2947] text-2xl mb-5">[{item.sub}]</h1>
            <h2 className="text-left text-[#0A2947] text-[25px] font-bold mb-5 leading-relaxed">{item.heading}</h2>
            <p className="text-left text-[#0A2947] text-[14px]">{item.phara}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SelectedWorks;
