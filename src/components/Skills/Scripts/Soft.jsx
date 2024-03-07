import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Soft() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="text-white mx-auto w-[100%]" data-aos="fade-left">
      <h2 className="text-2xl">Soft Skills</h2>
      <hr className="font-bold my-3 border-3 border-white" />
      <div className="list flex flex-row list-none gap-10 text-white">
        <ul className="list-disc ml-[40px] md:ml-[30px]">
          <li>Fast Learner</li>
          <li>Adaptability</li>
          <li>Communication Skills</li>
          <li>Hard Working</li>
        </ul>
      </div>
    </div>
  );
}
