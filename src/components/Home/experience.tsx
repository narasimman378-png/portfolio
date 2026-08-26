function Experience() {
  const exp = [
    {
      id: "01-06-2020 to 31-04-2021",
      work: "Web Desinger",
      company: "Gravity Inno Solutions",
      phara:
        "As a Web Designer at Gravity Inno Solutions, I focused on creating visually engaging and highly functional digital experiences. My role bridged the gap between creative design and technical implementation.",
    },
    {
      id: "15-10-2021 to 31-01-2024",
      work: "WordPress Developer",
      company: "Technox Technologies",
      phara:
        "As a WordPress Developer, I specialized in building, customizing, and maintaining high-performance websites. I focused on delivering scalable solutions that combined clean code with excellent user experiences.",
    },
    {
      id: "05-02-2024 to 10-04-2026",
      work: "WordPress Developer",
      company: "Bright Bridge Infotech Pvt Ltd",
      phara:
        "In this role, I specialized in building modern, high-performance web applications by combining the flexibility of WordPress with the power of React.js. I focused on creating seamless, dynamic user interfaces and robust backend integrations.",
    },
  ];
  return (
    <section
      className="py-10 px-10 bg-[#fff] md:p-20 bg-[#fff]"
      id="Experience"
      data-reveal
    >
      <div className="grid md:flex justify-between">
        <h2 className="text-left text-[#0A2947] text-3xl pb-4 font-bold md:text-4xl lg:text-5xl">
          Work Experience
        </h2>
        <hr />
        <h2 className="text-left text-[#0A2947] text-4xl pt-4 font-bold md:text-4xl lg:text-5xl">
          4 <span className="expan">+</span> Years
        </h2>
      </div>
      {exp.map((item, index) => (
        <div
          className="grid mt-10 md:mt-20"
          data-reveal
          style={
            { "--reveal-delay": `${index * 120}ms` } as React.CSSProperties
          }
        >
          <div className="grid grid-cols-1 justify-between text-left text-[#0A2947] aligns md:grid-cols-2">
            <div className="company">
              <div className="aligns gap-5">
                <span className="text-sm text-bold text-[#000] drop-shadow-sm">
                  {item.id}
                </span>
                <h1 className="text-3xl text-bold text-[#0A2947] my-5 lg:text-3xl md:text-2xl">
                  {item.work}
                </h1>
                <h3 className="text-md text-bold text-[#0A2947] my-5">
                  {item.company}
                </h3>
              </div>
            </div>
            <div className="AboutProject">
              <p className="pb-5 md:pb-5 leading-relaxed">{item.phara}</p>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
export default Experience;
