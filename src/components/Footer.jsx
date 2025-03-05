import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

function Footer() {
  return (
    <div className="Footer flex justify-between bg-[#222222] text-lg px-32 py-8 text-white max-md:flex-col max-md:p-8">
      <div className="left max-md:mb-8">
        <p>copyright © 2020-2025, 180Daraga. All Rights Reserved</p>
        <ul className="flex gap-2 mt-2">
          <li className="bg-[#3b5999] rounded text-white text-2xl p-1">
            <a href="https://www.facebook.com/180.Daraga">
              <TiSocialFacebook />
            </a>
          </li>
          <li className="bg-[#cd201f] rounded text-white text-2xl p-1">
            <a href="https://www.youtube.com/channel/UCy2pNwCwdCDBa557YSYzLOA">
              <TiSocialYoutube />
            </a>
          </li>
          <li className="bg-[#55acee] rounded text-white text-2xl p-1">
            <a href="https://twitter.com/180daraga">
              <TiSocialTwitter />
            </a>
          </li>
          <li className=" bg-[#e4405f] rounded text-white text-2xl p-1">
            <a href="https://www.instagram.com/180daraga">
              <TiSocialInstagram />
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <a href="mailto:180daraga.org@gmail.com">
          Email: <span className="underline">180daraga.org@gmail.com</span>
        </a>
        <br />
        <a href="tel:+201040564660">
          Tel: <span className="underline">+20 104 056 4660</span>
        </a>
      </div>
    </div>
  );
}
export default Footer;
