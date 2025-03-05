import { ImCancelCircle } from "react-icons/im";
import logo from "../../public/Logo.png";
function List({ closeList }) {
  return (
    <div className="h-full flex flex-col gap-32 p-2 items-center w-full fixed bg-[#222222] z-[1000]">
      <div className="header flex justify-between w-full">
        <img src={logo} className="size-20 ml-6" />
        <button className="text-white text-4xl mr-6" onClick={closeList}>
          <ImCancelCircle />
        </button>
      </div>
      <ul className="flex flex-col w-[100%] gap-8 justify-center items-center text-gray-300 text-xl">
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
    </div>
  );
}
export default List;
