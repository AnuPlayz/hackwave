import "./Home.css"
import Sponcer from "../../Components/Sponcers/Sponcer"
import SponcerCard from "../../Components/Sponcers/SponcerCard"

function Home() {
  return (
    <>
      <div className="mx-auto max-w-page_lg md:px-8 px-4 overflow-hidden">
        <section id="animate-1">
          <div className="relative h-screen w-full">
            <div className="text-5xl mt-8 md:text-8xl max-[350px]:text-4xl md:mt-[-100px] font-semibold font-hero absolute top-1/2 left-0">
              <div>HackWave</div>
            </div>
            <div className="text-5xl max-[350px]:text-3xl md:mt-12 mt-24 md:text-7xl font-medium absolute top-1/2">
              <div>National Hackathon, </div>
              <div>
                <span className="gradient-text">CDGI</span> Indore
              </div>
              <div className="text-2xl mt-4">27th Apr - 29th Apr, 2024</div>
              <a href="https://bit.ly/hackwave" target="_blank">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="relative px-10 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Register Now
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="font-hero text-3xl font-semibold md:text-5xl mt-10 text-center md:text-center">
              What to expect ?
            </div>
            <div className="max-w-[1000px] text-xl rounded-2xl mx-auto mt-28 mb-28 py-8 px-2 bg-[#000006] bg-opacity-80 text-center">
              Witness the collision of genius minds and cutting-edge technology
              at CDGI Indore's most electrifying{" "}
              <span className="gradient-text">Hackathon - HackWave</span>
              , a rendevous with the future! Get ready to dive into the sea of
              data & algorithms, <span className="text-slate-200">AL and Machine Learning</span>, bytes and bits, zeroes &
              ones. Let your imagination and innovation take flight in this
              celebration of brilliance and creativity.
            </div>
          </div>
        </section>

        <section>
          <div className="relative w-full" id="animate-2">
            <div className="w-full h-28"></div>
            <div className="w-full md:w-1/2">
              <div className="font-hero text-4xl font-semibold md:text-5xl text-center md:text-left">
                About us
              </div>
              <div className="text-xl mt-4 rounded-2xl p-8 bg-black bg-opacity-80">
                <div>
                  HackWave provides an excellent platform for aspiring
                  technologists to showcase their skills and serves as an ideal
                  launchpad for innovative ideas. With a diverse range of
                  events, competitions, workshops, and expert lectures, the
                  hackathon aims to reignite the enthusiasm for technology and
                  business among the nation's brightest minds. Beyond the
                  technical aspects, CDGI ensures a vibrant and enjoyable
                  experience with a variety of cultural events. All are invited
                  to join this technocultural festival for a blend of learning
                  and fun!
                </div>
              </div>
            </div>
            <div className="w-full h-28"></div>
          </div>
          <div className="w-full h-[200px]" id="animate-3"></div>
          <div className="w-full h-[800px]"></div>
        </section>

        <section className="relative">
          <div id="animate-4">
            <div className="text-4xl md:text-5xl font-semibold font-hero text-center">
              Our Sponsors
            </div>
            <div className="mt-10">
              <Sponcer title={"Main Sponsors"}>
                <SponcerCard imageUrl={"/Images/mascot.png"} />
                <SponcerCard imageUrl={"/Images/mascot.png"} />
                <SponcerCard imageUrl={"/Images/mascot.png"} />
                <SponcerCard imageUrl={"/Images/mascot.png"} />
                <div className="font-hero text-4xl font-semibold md:text-5xl text-center md:text-left">
                  Interested in sponsoring? <span className="gradient-text"><a href="https://wa.me/917489607974" target="_blank">Contact us!</a></span>
                </div>
              </Sponcer>
            </div>
          </div>
        </section>

        <section className="relative">
          <div id="animate-5" className="w-full h-[800px]"></div>
          <div className="w-full h-[200px]"></div>
          <div id="animate-6">
            <div className="w-full relative">
              <div className="font-hero top-[50px] text-4xl text-center font-semibold relative max-[880px]:top-[348px]">
                What you get
              </div>
              <div className="flex flex-wrap justify-around mt-96 px-8">
                <div
                  className="max-w-[400px] 
                    rounded-lg 
                    p-4 my-8 
                    relative
                    bg-pink-600/80
                    pink-shadow
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Experience
                  </div>
                  <div className="mt-8 text-[1.1rem] text-center">
                    Participate in events designed to bring out the best in you
                  </div>
                </div>
                <div
                  className="
                    max-w-[400px] 
                    rounded-lg  
                    p-4 
                    my-8 
                    relative 
                    overflow-hidden
                    bg-amber-500/80
                    yellow-shadow
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Networking
                  </div>
                  <div className="mt-8 text-[1.1rem] text-center">
                    Connect with and exchange ideas with participants and also
                    the tech speakers
                  </div>
                </div>
                <div
                  className="
                    max-w-[400px] 
                    rounded-lg 
                    p-4 
                    my-8 
                    relative
                    bg-violet-600/80
                    violet-shadow 
                  "
                >
                  <div className="font-hero text-xl font-semibold text-center">
                    Goodies
                  </div>
                  <div className="mt-8 text-[1.1rem] text-center">
                    Each participant gets goodies! If you manage to win an
                    event, you can get even better ones!
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a href="https://bit.ly/hackwave" target="_blank">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span className="relative px-10 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Register Now
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full h-[100px]"></div>
        </section>
      </div>
    </>
  )
}

export default Home
