import React from "react";

export const Footer = () => {
  return (
    <section className=" py-10" id="footer">
      <div className="m-auto sm:w-[90%] md:w-[60%] flex items-center justify-between">
        <div>
          <h1 className="text-white ">
            <span className="text-zinc-100 font-semibold tracking-widest">
              Portfolio:
            </span>{" "}
            Edren von Cabonegro | BSIT
          </h1>
          <i className="fa-brands fa-react text-white font-bold text-3xl"></i>
        </div>

        <div>
          <div className="mt-6 flex items-center sm:justify-center xl:justify-start ">
            <a
              className="text-white"
              href="https://www.linkedin.com/in/edren-cabonegro/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin text-3xl "></i>
            </a>
            <a
              className="text-white"
              href="https://github.com/edrenskill/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-github text-3xl ml-5"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
