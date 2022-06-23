import { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { FiArchive,FiGrid, FiExternalLink, FiBookOpen } from "react-icons/fi";
import { FaDiscord , FaInstagram, FaTwitter} from "react-icons/fa";
import { Header, Slider, Accordion, Footer, Group } from "@/src/components";

const Home: NextPage = () => {
  return (
    <Fragment>
      <div
        className={
          "w-full h-full bg-cover bg-no-repeat bg-center bg-fixed fixed -z-50 bg-gradient-to-r from-[#2E2D66] via-[#3A273F] to-[#181818]"
        }
      ></div>
      <Head>
        <title>FrontierX</title>
        <meta name="description" content="Lorem ipsum..." />
        <link rel="icon" href="/eye.png" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
      <Header />
      <div className="h-1.5 mb-10 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <Slider />
      <Group />
      <div className=" min-h-[350px]">
        <div className="flex justify-center w-full flex-wrap items-start min-h-full mb-4">
          <div className="flex flex-col w-11/12 md:w-2/5">
            <Accordion title={<><FiGrid className="mr-2"/>Lorem ipsum</>}>
              <Fragment>
                <p className="text-[16px] text-white mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="grid grid-cols-2 gap-5">
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                    <FiExternalLink className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FaDiscord className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FaInstagram className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FaTwitter className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                </div>
              </Fragment>
            </Accordion>
          </div>
          <div className="flex flex-col w-11/12 md:w-2/5">
           <Accordion title={<><FiGrid className="mr-2"/>Lorem ipsum</>}>
              <div className="flex flex-wrap gap-1 md:gap-2 h-[250px] overflow-y-scroll scrollbar-custom justify-center">
                {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15].map(
                  (el: any, ind: number) => (
                    <div
                      key={"keyy" + ind}
                      className="hover:border-2 hover:border-red-900 bg-[#0D0D0D] p-2 md:p-4 text-center flex flex-col justify-center w-[130px] md:w-[150px] h-[100px]"
                    >
                      <h5 className="text-[14px] text-white hover:text-red-800 font-medium mb-2">
                        Background
                      </h5>
                      <p className="text-white mb-2 text-[17px]">
                        Lorem ipsum.
                      </p>
                      <p className="text-[14px] text-white hover:text-red-800">
                        2 %
                      </p>
                    </div>
                  )
                )}
              </div>
            </Accordion>
            <Accordion title={<><FiGrid className="mr-2"/>Lorem ipsum</>}>
              <Fragment>
                <p className="text-[16px] text-white mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className="grid grid-cols-2 gap-5">
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FiExternalLink className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FaDiscord className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FiArchive className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                  <Link href={"s"}>
                    <span className="w-30  !text-[14px] text-white hover:text-red-800">
                      <FiArchive className="inline text-[22px] mr-2" />
                      Lorem ipsum
                    </span>
                  </Link>
                </div>
              </Fragment>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
