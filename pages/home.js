import React from "react";
import Image from "next/image";
import Link from "next/link";

function Librray(props) {
  const { mobileView } = props;
  return (
    <div className="container pt-24 pb-14 bg-secondary">
      <div>
        <h1 className="text-4xl font-bold tracking-widest text-center text-white uppercase">
          weebyhouse
        </h1>
      </div>
      <div className="grid gap-4 pl-24 pr-24 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-9">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <Link href="/description">
            <div className="relative flex max-w-2xl mt-10 cursor-pointer">
              <div>
                <Image
                  src={
                    index % 2 == 0 ? "/images/test3.png" : "/images/test.png"
                  }
                  width={100}
                  height={250}
                  className="object-cover w-full rounded-l-3xl"
                />

                <div className="absolute w-16 right-16 bottom-8 sm:right-36 md:right-1 lg:right-0 sm:bottom-20 md:bottom-14 lg:bottom-14 sm:w-20 md:w-20 lg:w-24 sm:h-1">
                  {index % 2 == 0 ? (
                    <img src="images/test4.png" />
                  ) : (
                    <img src="images/test2.png" />
                  )}
                  {/* {index % 2 == 0 ? (
                    <Image
                      src="/images/test4.png"
                      width={mobileView ? 40 : 100}
                      height={mobileView ? 40 : 100}
                    />
                  ) : (
                    <Image
                      src="/images/test2.png"
                      width={100}
                      height={100}
                      className="sm:w-9"
                    />
                  )} */}
                </div>
              </div>
              <div className="items-center w-56 pt-3 pl-2 mt-3 text-white rounded-r-3xl max-h-56 bg-primary">
                <div className="font-bold text-md">
                  demon slayer <br />
                  <span className="mt-1 text-sm font-light">
                    Episode 24 - Completed
                  </span>{" "}
                </div>

                <br />
                {mobileView ? (
                  <div className="-mt-3 text-sm font-light">
                    Action, Adventure, Demons, Comedy
                  </div>
                ) : (
                  <div className="mt-5 text-sm font-light">
                    Action, Adventure, Demons, Comedy
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Librray;
