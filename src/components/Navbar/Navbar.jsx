import { useState } from "react";
import Link from "../Link/Link";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open ? <RxCross2 /> : <BiMenu />}
      </div>
      <ul className={`${open ? "" : "hidden"} md:flex md:space-x-5`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
