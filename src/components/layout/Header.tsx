import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className='display-flex mx-auto text-center mt-5'>
      <Link href={"/"} className=' text-md mx-5 bg-slate-100 p-2 rounded-md font-bold shadow-md'>
        input
      </Link>
      <Link href={"search"} className=' text-md mx-5 bg-slate-100 p-2 rounded-md font-bold shadow-md'>
        search
      </Link>
    </div>
  );
};

export default Header;
