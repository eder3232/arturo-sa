import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex h-16 items-center justify-center border-b-2">
      <div className="container flex  items-center justify-between">
        <Link href="/">artukings</Link>
        {/* <div>items</div> */}
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
