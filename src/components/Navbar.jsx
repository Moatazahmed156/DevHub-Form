import logo from "../../public/Logo.png";
import { FaThList } from "react-icons/fa";

function Navbar({ openList }) {
  return (
    <div className="flex justify-between items-center w-full fixed px-32 py-2 bg-[#222222] z-[1000] max-md:px-8">
      <img src={logo} className="size-24 max-md:size-20" />
      <ul className="flex min-w-[40%] gap-8 justify-end  text-gray-300 text-xl max-md:hidden">
        <li>
          <a
            href="https://180daraga.com/"
            className=" hover:text-white hover:underline hover:underline-offset-8"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="https://180daraga.com/events"
            className=" hover:text-white hover:underline hover:underline-offset-8"
          >
            Events
          </a>
        </li>
        <li>
          <a
            href="https://180daraga.com/team"
            className=" hover:text-white hover:underline hover:underline-offset-8"
          >
            Team Hierarchy
          </a>
        </li>
        <li>
          <a
            href="https://180daraga.com/blogs"
            className=" hover:text-white hover:underline hover:underline-offset-8"
          >
            Blogs
          </a>
        </li>
      </ul>
      <button
        className="hidden text-white text-3xl max-md:block"
        onClick={openList}
      >
        <FaThList />
      </button>
    </div>
  );
}
export default Navbar;
