import { Avatar } from "antd";
import { BsFillPersonFill } from "react-icons/bs";
import "./shared.css";
const user = "I";
const color = "#f56a00";

const ProfileIcon = () => {
  return (
    <>
      <button className="rounded-full border-transparent h-8 w-8 bg-green-400">
        <BsFillPersonFill />
      </button>
      <span className="text-white">Ishit</span>
    </>
  );
};

export default ProfileIcon;
