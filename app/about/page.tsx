/* eslint-disable @next/next/no-img-element */

const About = () => {


  return (
    <>


      <section id="about-me" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 transform hover:scale-105 transition-transform duration-500  text-green-700">
              About Me
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              I'm Laiba Gohar, a front-end developer dedicated to crafting seamless user
              experiences. With [2 years] of experience, I specialize in responsive design and
              creating intuitive interfaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center flex justify-center items-center flex-col gap-2 md:text-left">
              <img
                src="/cards/green1.jpg"
                alt="Adil"
                className="rounded-full mx-auto md:mx-0 shadow-2xl transition-transform transform hover:scale-110 duration-500"
              />
              <h3 className="text-3xl text-center font-semibold mt-6  text-green-700">Laiba Gohar</h3>
              <p className="text-lg text-center  text-green-700">Front-end developer</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-green-700">WORK EXPERIENCE
              </h3>
              <p className="text-lg text-gray-800 mb-6">
                Front-end Developer
                Dedicated and motivated Front-End Developer with two
                year of professional experience. and have been
                working as a Web Developer at Online Study since
                November 2021. During my time at Online Study, I have
                successfully completed projects various other
                websites. I possess strong skills in creating websites
                and have a keen eye for detail and design. proficient in
                Web Development HTML | CSS | JavaScript | Tailwind
                CSS | Bootstrap a strong work ethic, always striving to
                deliver high-quality work in a timely manner. I am
                seeking opportunities to further developer. my skills
                and contribute to a dynamic team in a challenging
                professional environment.

              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="#"
                  className="bg-green-700 hover:bg-green-900 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                >
                  Join Me On This Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
