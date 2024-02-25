import React from "react";
import image from "../image/about.jpg";

const Aboutus = () => {
  return (
    <div class="sm:flex items-center max-w-screen-xl">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img
            src={image}
            alt="image"
            className="mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20"
          />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span class="text-indigo-600">Me</span>
          </h2>
          <div>
            <p class="mb-6">
              As a dedicated web developer, I bring a wealth of experience in
              crafting dynamic and user-friendly web solutions. Proficient in
              HTML, CSS, JavaScript, and React, I specialize in creating
              interactive and responsive websites that captivate users and drive
              engagement. With a keen eye for design and a passion for clean,
              efficient code, I strive to deliver high-quality projects that
              exceed expectations. Whether it's implementing elegant UI designs,
              optimizing site performance, or troubleshooting complex issues, I
              approach each task with precision and creativity. Continuously
              staying abreast of the latest web technologies and best practices,
              I am committed to pushing the boundaries of innovation and
              delivering exceptional digital experiences.
            </p>
            <h3 class="text-lg font-bold mb-2">Skills:</h3>
            <ul class="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

