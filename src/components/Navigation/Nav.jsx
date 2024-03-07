import NavBottom from "./NavBottom";
import NavTop from "./NavTop";

export default function Nav() {
  return (
    <div className="nav bg-black h-[120vh] md:h-fit md:top-0 w-screen md:w-[100%] flex flex-col">
      <NavTop />
      <NavBottom />
    </div>
  );
}
