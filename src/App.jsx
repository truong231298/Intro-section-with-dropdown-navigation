import bgDesktop from "/images/image-hero-desktop.png"
import bgMobile from "/images/image-hero-mobile.png"
import iconData from '/images/client-databiz.svg'
import iconAudi from '/images/client-audiophile.svg'
import iconMeet from '/images/client-meet.svg'
import iconMaker from '/images/client-maker.svg'
import logo from '/images/logo.svg'
import iconMenu from '/images/icon-menu.svg'
import Navbar from "./components/Navbar"


export default function App() {
  return (
    <>
      <header className="p-4 m-4 flex items-center justify-between">
        <div className="flex flex-row gap-24">
          <img src={logo} alt="" />
          <div className="absolute md:static right-0 top-14 md:top-auto bg-white md:shadow-none w-1/2 md:w-auto
          h-full">
            <Navbar />
          </div>

        </div>

        <img src={iconMenu} alt="" className="md:hidden" />
        <div className="hidden md:flex gap-4">
          <button className=" text-MediumGray hover:border-2 px-3 py-2 rounded-lg border-AlmostBlack">Login</button>
          <button className=" text-MediumGray hover:border-2 px-3 py-2 rounded-lg border-AlmostBlack"> Register</button>
        </div>

      </header>

      <body className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-4 p-8">
        {/* impormation body */}
        <section className="flex flex-col gap-4 max-w-sm items-center md:items-baseline">
          <h1 className="font-semibold text-2xl lg:text-4xl"> Make remote work</h1>
          <p className="text-MediumGray">Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.</p>
          <button className="bg-AlmostBlack text-white px-4 py-2 rounded-lg max-w-40">Learn more</button>

          <div className="flex flex-row gap-4">
            <img src={iconData} alt="" className="w-16" />
            <img src={iconAudi} alt="" className="w-16" />
            <img src={iconMeet} alt="" className="w-16" />
            <img src={iconMaker} alt="" className="w-16" />
          </div>
        </section>
        <section className="max-w-sm rounded-lg hidden md:block">
          <img src={bgDesktop} alt="" className="w-full object-cover" />

        </section>
        <section className="w-full md:hidden">
          <img src={bgMobile} alt="" />
        </section>
      </body>

    </>
  )
}