import Hart from "../assets/img/Hart.jpeg";


const Companies = () => {
  const companyLogos = [
    { name: "Hartalkar Innovation", imgUrl: Hart },
  ];

  return (
    <section className="bg-[#121212] py-24 w-full px-6">
      
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] px-8 py-16 md:px-16 text-center">
        
        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
          The companies that I have worked with →
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          
          {companyLogos.map((company, index) => (
            <a
              href="https://www.hartalkarinnovations.com/"
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

    </section>
  );
};

export default Companies;