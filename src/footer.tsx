import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className="foots bg-line bg-footer px-10 py-10 text-[black]"
      id="Contact"
    >
      <div className="">
        <div className="">
          <div className="persnol_Info grid aligns justify-between gap-6 md:grid lg:flex">
            <div className="address">
              <p className="text-3xl md:text-4xl w-full text-black text-left w-100">
                Ready to build <br />
                something great?
              </p>
            </div>
            <div className="emailPart">
              <span className="text-left text-[black] block">Let's Talk</span>
              <p className="text-sm text-[black] text-left underline md:text-2xl">
                <a href="mailto:narasimman378@gmail.com" target="_black">
                  narasimman378@gmail.com
                </a>
              </p>
              <p className="text-sm text-[black] text-left underline md:text-2xl">
                <a href="tel:+91 6374262388">+91 6374262388</a>
              </p>
            </div>
          </div>
          <div className="sayConts py-5 px-0">
            <a href="https://wa.me/+916374262388/?text=" target="_blank">
              <h2 className="text-5xl font-bold text-black text-right uppercase md:text-8xl">
                Say <span className="text-[#bd1111]">Hello!</span>
              </h2>
            </a>
          </div>
        </div>
      </div>
      <div className="copyRightSec mt-5">
        <hr className="pb-10 text-[#d7d7d7bc]" />
        <div className="grid justify-between md:flex gap-5">
          <div className="social-links grid gap-5 text-[black] md:flex">
            <div className="LinkedIn border-1 border-[#2702028a] rounded-[50px] py-2 px-2">
              <a
                href="https://www.linkedin.com/in/narasimman-balasubramani-614bb6185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                → LinkedIn
              </a>
            </div>
            <div className="Github border-1 border-[#2702028a] rounded-[50px] py-2 px-2">
              <a href="https://github.com/narasimman378-png" target="_blank">
                → GitHub
              </a>
            </div>
            <div className="faceBook border-1 border-[#2702028a] rounded-[50px] py-2 px-2">
              <a href="#">→ FaceBook</a>
            </div>
            <div className="inSta border-1 border-[#2702028a] rounded-[50px] py-2 px-2">
              <a
                href="https://www.instagram.com/narasimman_1999?igsh=ZDdid2tnZTlscjVk"
                target="_blank"
              >
                → Instagram
              </a>
            </div>
            <div className="X border-1 border-[#2702028a] rounded-[50px] py-2 px-2">
              <a href="https://x.com/viji_vikram" target="_blank">
                → X
              </a>
            </div>
          </div>
          <div className="Year">
            <h2 className="text-black">Copyright @2025</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
