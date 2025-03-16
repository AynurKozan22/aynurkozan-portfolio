const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-gray-lite  dark:text-color-910 leading-7">
                Experienced Frontend Developer & UI/UX Designer with expertise
                in JavaScript (ES6+), React.js, Next.js, and React Native.
                Skilled in Micro Frontend Architecture, SFCC, Redux, Context
                API, and modern UI libraries like TailwindCSS, Bootstrap, and
                Material UI. Passionate about performance optimization, scalable
                architectures, and interactive user experiences. Proficient in
                Figma, Adobe Creative Suite (Photoshop, Illustrator, XD) for
                crafting visually stunning, user-friendly designs. Also
                experienced in Webpack, Vite, Parcel, Babel, and API
                integrations (REST, GraphQL, JSON, XML). Always eager to build
                high-performance, maintainable, and engaging applications.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                Feel free to explore my work and reach out for collaboration or
                opportunities. Thanks for visiting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
