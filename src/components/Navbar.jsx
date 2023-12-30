import Image from "next/image";
import React from "react";
import Logo from "@/images/Logo(2).png";
import Notification from "@/images/Notifications.png";
import UserImg from "@/images/user_image.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 h-28 text-white bg-primary">
      <Image alt="img" src={Logo} width={50} />
      <div className="flex items-center">
        <Image alt="img" src={Notification} width={25} className="mr-10" />
        <div className="profile flex items-center gap-4">
          <Image
            alt="img"
            src={UserImg}
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="">
            <h3 className="text-large  font-semibold">Lisa</h3>
            <h5 className="text-large">Operator</h5>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
