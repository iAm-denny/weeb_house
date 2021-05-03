import React from "react";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className="fixed left-0 flex justify-center w-10 h-screen border-0 border-r border-primary">
        <div className="pt-10">
          <Image src="/assets/humburger.svg" width={26} height={26} />
          <div className="flex items-center justify-center">
            <div className="mt-5 ">
              <Image src="/assets/user.svg" width={23} height={23} />
            </div>

            {/* <div className="pt-3 pl-1 ">
              <Image src="/assets/arrow_down.svg" width={12} height={9} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="absolute flex items-center right-10 top-3 ">
        <form className="flex items-center justify-between pt-1 pb-1 pl-3 pr-3 text-white border-2 rounded-full w-60 border-primary">
          <input
            type="text"
            className="text-sm bg-transparent outline-none"
            placeholder="search..."
          />
          <button className="pt-1 focus:outline-none">
            <Image src="/assets/search.svg" width={18} height={18} />
          </button>
        </form>
      </div>
    </>
  );
}

export default Header;
