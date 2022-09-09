/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-scroll";

export default function BacktoTopButton() {
  return (
    <Link
      to="content"
      spy={true}
      smooth={true}
      id="backtotop" className="fixed z-50 cursor-pointer hidden justify-center items-center bottom-4 p-4 right-4 h-14 w-14 bg-primary rounded-full shadow-lg shadow-dark/50 hover:animate-pulse">
      <span className="block h-5 w-5 rotate-45 border-t-2 border-l-2 mt-2" />
    </Link>
  );
}
