import { Link } from "react-router-dom"
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs"
const Footer = () => {
  return (
    <div
      className="container max-w-full bg-black/70 relative pt-16 pb-16 lg:pt-32 lg:pb-32"
      style={{ zIndex: 100 }}
    >
      <div className="mx-auto max-w-page_lg grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-32 footer">
        <div>
          <div className="flex items-center justify-center lg:justify-start my-4">
            <div>
              <img className="w-[100px]" src="/Images/cdgi-logo.png" />
            </div>
          </div>
          <div className="text-xs flex flex-col items-center lg:items-start">
            <div>CTDC, CDGI Indore</div>
            <div>CDGI Indore - Campus, Indore</div>
            <div>PIN - 452011</div>
          </div>
        </div>

        <div className="flex flex-col items-center my-4 justify-center font-hero">
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div className="mt-2">
            <Link to="/team">Team</Link>
          </div>
        </div>

        <div className="my-4 flex flex-col items-center justify-center">
          <div className="font-semibold text-xl">Support</div>
          <div className="mt-2">
            <a href="mailto:aniruddh.dubge@cdgi.edu.in">Student Co-ordinator</a>
          </div>
          <div className="mt-2">
            <a href="mailto:shreyas.pagare@cdgi.edu.in">Faculty Co-ordinator</a>
          </div>
        </div>
        <div className="my-4 flex flex-col items-center lg:items-end justify-center">
          <div className="font-semibold text-xl">Social</div>
          <div className="flex mt-4">
            <a
              className="ml-4 text-xl"
              target="_blank"
              href="https://www.instagram.com/hackwave"
            >
              <span className="text-pink-500 cursor-pointer">
                <BsInstagram />
              </span>
            </a>
          </div>
          <div className="mt-8 lg:text-right text-xs">
            © Copyright - 2024 Hackwave CDGI all rights reserved
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 h-16 flex items-center justify-center">
        <div className="text-white text-xs">
          Made with 💖 by{" "}
          <a
            className="text-pink-500"
            href="https://www.instagram.com/ani__x_/"
            target="_blank"
          >
            Aniruddh
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
