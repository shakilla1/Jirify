import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../../assets/images/digital-marketing/socialmedia.jpg";
import img2 from "../../assets/images/digital-marketing/socialmedia_mobile2.jpg";

const SocialMedia = () => {
    return (
        <div className="section">
      <div className="relative h-[650px] md:h-[500px]">
        <Image
          className="hidden md:block w-full right-4 top-[-40px] absolute"
          src={img1}
          alt=""
        />
        <Image
          className="md:hidden block w-full right-28 top-10 absolute"
          src={img1}
          alt=""
        />
        <div className="main-container">
          <div className="absolute top-[210px] md:top-[100px] md:w-4/6 w-full px-6 md:px-0">
            <h1 className="font-bold text-xl mb-4">Social Media</h1>
            <h1 className="text-[35px] md:text-[62px] font-extrabold md:font-bold leading-[56px] text-[#252628] mb-2">
                Stand out and connect on social media
            </h1>
            <p className="text-2xl font-normal text-[#56575b] mb-2">
            Brand every post, comment and message. Branded Bitly links stand out and inspire trust in your audience, attracting more clicks.
            </p>
            <button
              style={{ transition: "background 100ms linear" }}
              className="text-xl py-[18px] mt-10 px-[30px] w-full md:w-44 bg-[#2a5bd7] rounded-md text-[#fff]"
            >
              Start for Free
            </button>
            <Link
              className="block text-[#1468a0] hover:text-[#13285e] pl-10"
              href="/"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SocialMedia;