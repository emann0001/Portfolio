import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20" id="about">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-start">
        
        {/* Left Title */}
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold uppercase tracking-wide">About Me</h2>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <h3 className="text-lg md:text-xl font-semibold">
            I am a front-end developer based in Sydney. <br />
            Has Mechanical Engineering background.
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background.
            Likes to focus on accessibility when developing. Passionate and curious about solving problems.
            Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I’m not programming, I enjoy playing football, photography and playing Valorant.
            Learning more to improve skill.
          </p>
          <a
            href="#"
            className="text-xs text-lime-400 uppercase font-semibold hover:underline"
          >
            More about me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
