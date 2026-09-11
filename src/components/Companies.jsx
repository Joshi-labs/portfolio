import Hart from "../assets/img/comp/Hart.jpeg";
import Epam from "../assets/img/comp/EPAM.jpg";

const Companies = () => {
  const companyLogos = [
    {
      name: "Hartalkar Innovation",
      imgUrl: Hart,
      url: "https://www.hartalkarinnovations.com/",
    },
    {
      name: "EPAM Systems",
      imgUrl: Epam,
      url: "https://www.epam.com/",
    },
  ];

  return (
    <section className="py-14 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[0.5rem] px-8 py-16 md:px-16 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
            The companies that I have worked with →
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {companyLogos.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-24 w-55 rounded-xl overflow-hidden bg-white shadow-sm flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={company.imgUrl}
                  alt={company.name}
                  className="h-full w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;