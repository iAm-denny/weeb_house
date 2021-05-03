import React from "react";
import Image from "next/image";
import Link from "next/link";

function Librray() {
  return (
    <div className="container pt-24 pb-14 bg-secondary">
      <div>
        <h1 className="text-4xl font-bold tracking-widest text-center text-white uppercase">
          weebyhouse
        </h1>
      </div>
      <div className="flex flex-wrap pl-24 pr-24 sm:justify-center md:justify-between mt-9">
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

                <div className="absolute right-0 bottom-1">
                  {index % 2 == 0 ? (
                    <Image src="/images/test4.png" width={100} height={100} />
                  ) : (
                    <Image src="/images/test2.png" width={100} height={100} />
                  )}
                </div>
              </div>
              <div className="items-center w-56 pt-3 pl-2 mt-3 text-white rounded-r-3xl max-h-56 bg-primary">
                <div className="font-bold text-md">demon slayer </div>
                <div className="mt-1 text-sm font-light">
                  Episode 24 - Completed
                </div>
                <div className="mt-12 text-sm font-light">
                  Action, Adventure, Demons, Comedy
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Librray;
