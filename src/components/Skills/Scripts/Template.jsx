import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Template(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="text-white mx-auto w-[100%]" data-aos="fade-left">
      <h2 className="text-2xl">{props.heading}</h2>
      <hr className="font-bold my-3 border-3 border-white" />
      <div className="text-white">
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
          {props.list.map((item, index) => {
            return (
              <div className="flex flex-col items-center justify-between gap-2">
                <img
                  src={item.img}
                  className="w-[75px] h-[75px] justify-center"
                />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
