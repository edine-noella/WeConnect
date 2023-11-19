import Navbar from "../components/navbar"
import Sidebar from "../components/Sidebar"
import picture from "../assets/picture.png"

function LandingPage() {
  return (
    <div className="relative">

        <Navbar />
        <Sidebar />

      <div className="flex justify-center items-center">
        <img src={picture} alt='logo' className='h-50 w-9/12' />
      </div> 

      <button className="bg-white text-primary font-bold py-4 px-14 rounded-md border border-primary ml-64 mt-4 font-bold text-xl">RSVP</button>

      <footer className="text-center text-xl text-gray-500">
        &copy; Copyright Lumary Hub 2023
      </footer>     
    </div>
  )
}

export default LandingPage
