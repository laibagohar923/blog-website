import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" border-t mt-4 min-h-[80vh] text-[14px]  border-black/40 footerFont text-black p-10 flex justify-between flex-col">
      <div className="w-[100%] flex  justify-center items-center">
        <a href="/">
          <Image src="/image1.webp" alt="logo" width={100} height={80} />
        </a>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4  gap-12">
        <div>
          <h4 className="text-black font-light	 text-[18px]">THE BLOG</h4>
          <p className="mt-2 text-black/75">
            The Blog offers insightful articles, updates, and expert opinions on a variety of topics.
          </p>
        </div>

        <div className="">
          <h4 className=" text-black font-light	 text-[18px]">CONTACT US</h4>
          <p className="mt-2 text-black/75">laibagohar923@gmail.com</p>
          <p className=" text-black/75">+92 313 000 000</p>
        </div>

        <div>
          <h4 className="text-black font-light	 text-[18px] ">Links</h4>
          <ul className="mt-2 space-y-2 text-black/75">
            <li>Home</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-[200px] flex flex-col  flex-wrap">
          <h4 className=" text-black font-light	 text-[18px]">SUBSCRIBE</h4>
          <p className="mt-2 text-black/75 break-words">
            Get our weekly newsletter for latest blog news, exclusive blogs and
            deals, and more.
          </p>
          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your Email..."
              className="px-2 w-[150px] outline-none h-[40px]  rounded-[50px] text-gray-900"
            />
            <button className=" bg-blue-500 hover:bg-blue-600  h-[40px] text-[14px]  border border-white   px-2  rounded-[50px]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-[100%]  justify-center items-center  mt-10 text-black/75">
        <div className="flex w-[80%] text-[15px]  justify-between border-gray-700 border-t  items-center">
          <div>
            <p className="text-center text-sm">
              Copyright © 2024. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-6 mt-2 ">
            <a href="#" className="hover:text-gray-300">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-gray-300">
              Refund Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
