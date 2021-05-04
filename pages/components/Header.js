import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [advSearch, setAdvSearch] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <>
      <div className="fixed left-0 flex w-10 h-screen border-0 border-r border-primary">
        <div className="pt-10 ">
          <div
            className="grid w-10 h-10 place-items-center hover:bg-primary"
            onMouseOver={() => setAdvSearch(true)}
            onMouseOut={() => setAdvSearch(false)}
          >
            {/* <Image src="/assets/humburger.svg" width={26} height={26} /> */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.83594 12.1875H3.35156C1.50348 12.1875 0 10.684 0 8.83594V3.35156C0 1.50348 1.50348 0 3.35156 0H8.83594C10.684 0 12.1875 1.50348 12.1875 3.35156V8.83594C12.1875 10.684 10.684 12.1875 8.83594 12.1875ZM3.35156 1.625C2.39952 1.625 1.625 2.39952 1.625 3.35156V8.83594C1.625 9.78798 2.39952 10.5625 3.35156 10.5625H8.83594C9.78798 10.5625 10.5625 9.78798 10.5625 8.83594V3.35156C10.5625 2.39952 9.78798 1.625 8.83594 1.625H3.35156Z"
                fill={advSearch ? "#fff" : "#D84339"}
              />
              <path
                d="M22.6484 12.1875H17.1641C15.316 12.1875 13.8125 10.684 13.8125 8.83594V3.35156C13.8125 1.50348 15.316 0 17.1641 0H22.6484C24.4965 0 26 1.50348 26 3.35156V8.83594C26 10.684 24.4965 12.1875 22.6484 12.1875ZM17.1641 1.625C16.212 1.625 15.4375 2.39952 15.4375 3.35156V8.83594C15.4375 9.78798 16.212 10.5625 17.1641 10.5625H22.6484C23.6005 10.5625 24.375 9.78798 24.375 8.83594V3.35156C24.375 2.39952 23.6005 1.625 22.6484 1.625H17.1641Z"
                fill={advSearch ? "#fff" : "#D84339"}
              />
              <path
                d="M19.9062 26C16.5462 26 13.8125 23.2663 13.8125 19.9062C13.8125 16.5461 16.5462 13.8125 19.9062 13.8125C23.2663 13.8125 26 16.5461 26 19.9062C26 23.2663 23.2663 26 19.9062 26ZM19.9062 15.4375C17.4422 15.4375 15.4375 17.4422 15.4375 19.9062C15.4375 22.3703 17.4422 24.375 19.9062 24.375C22.3703 24.375 24.375 22.3703 24.375 19.9062C24.375 17.4422 22.3703 15.4375 19.9062 15.4375Z"
                fill={advSearch ? "#fff" : "#D84339"}
              />
              <path
                d="M8.83594 26H3.35156C1.50348 26 0 24.4965 0 22.6484V17.164C0 15.316 1.50348 13.8125 3.35156 13.8125H8.83594C10.684 13.8125 12.1875 15.316 12.1875 17.164V22.6484C12.1875 24.4965 10.684 26 8.83594 26ZM3.35156 15.4375C2.39952 15.4375 1.625 16.212 1.625 17.164V22.6484C1.625 23.6005 2.39952 24.375 3.35156 24.375H8.83594C9.78798 24.375 10.5625 23.6005 10.5625 22.6484V17.164C10.5625 16.212 9.78798 15.4375 8.83594 15.4375H3.35156Z"
                fill={advSearch ? "#fff" : "#D84339"}
              />
            </svg>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid w-10 h-10 mt-5 hover:bg-dark place-items-center">
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
