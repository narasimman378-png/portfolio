import ProOne from "../../assets/project-1.png";
import ProTwo from "../../assets/project-2.png";
import ProThree from "../../assets/project-3.png";
import ProFour from "../../assets/project-4.png";
import ProFive from "../../assets/project-5.png";
import ProSix from "../../assets/project-6.png";
import ProSeven from "../../assets/project-7.png";
import ProEight from "../../assets/project-8.png";
import ProNine from "../../assets/project-9.png";
import ProTen from "../../assets/project-10.png";

const projects = [
  { id: 1, title: "Sri Ramakrishna Hospital", desc: "Hospital and Healthcare", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://www.sriramakrishnahospital.com/", img: ProFour },

  { id: 2, title: "Her RCM", desc: "Healthcare", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://herrcm.com/", img: ProOne },

  { id: 3, title: "Yaggna Group", desc: "Event Management and Coprate Company", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://www.yaggnagroup.com/", img: ProTwo },

  { id: 4, title: "Gastro Care Coimbatore", desc: "Hospital and Healthcare", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://www.gastrocarecoimbatore.com/", img: ProThree },

  { id: 5, title: "Health Basix", desc: "Healthcare", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://www.healthbasix.com/", img: ProFive },

  { id: 6, title: "Sri Daksha Property Developers", desc: "Builders and Property Developers", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://sreedaksha.com/", img: ProSix },

  { id: 7, title: "Ayyappa Technical Innovates", desc: "Fire and Safty Management", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://atinnovates.in/", img: ProSeven },

  { id: 8, title: "Sri Daksha Landshapers", desc: "Builders and Property Developers", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://sreedaksha.com/", img: ProEight },

  { id: 9, title: "Kumaraguru Property Developers", desc: "Builders and Property Developers", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://www.kumaraguruproperties.com/", img: ProNine },

  { id: 10, title: "Sunset Flight Club", desc: "Travel and Tourism", phara: "I design, train, and deploy AI models that turn data into real-world decisions from computer vision to large-scale systems.", link: "https://www.sunsetflightclub.co.uk/", img: ProTen },

];

function OurProjects() {
  return (
    <section className="px-6 md:px-10 py-10 bg-[#FFF]" id="Ourprojects">
      <h2 className="text-black text-left text-4xl mb-12 font-medium">
        Our Selected Projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            /* The 'sticky' class makes the cards stack. 
               'top-20' ensures they don't go off-screen.
            */
            className="sticky top-24 w-full bg-[#fffae5] rounded-[20px] overflow-hidden"
            style={{ marginTop: `${index * 20}px` }} // Optional: slight offset for the stack
          >
            <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[450px]">
              {/* Content Section */}
              <div className="py-12 px-8 md:px-16 flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-black text-left text-2xl leading-tight mb-4 md:text-2xl lg:text-4xl">
                    {project.title} <br />
                    <span className="text-[black] text-sm md:text-sm lg:text-2xl">{project.desc}</span>
                  </h1>
                </div>
                
                <div className="mt-12">
                   <p className="text-[black] text-sm text-left max-w-sm mb-8 hidden">
                    {project.phara}
                  </p>
                  <a href={project.link} target="_black"><button className="group cursor-pointer flex items-center gap-2 text-black border border-black/20 px-8 py-4 rounded-full hover:bg-[#610b0b] hover:text-white transition-all duration-300">
                    View Project
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button></a>
                </div>
              </div>

              {/* Image Section */}
              <div className="bg-[#620606fc] h-full flex items-center justify-center p-6 md:p-6  h-50 lg:p-12 h-full">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProjects;