import edine from '../assets/edine.jpeg';
import marie from '../assets/marie.webp';
import gloria from '../assets/gloria.png';
import bosire from '../assets/bosire.webp';
import chloe from '../assets/chloe.png';
import Navbar from "../components/navbar"
import Footer from '../components/Footer';


function AboutPage() {
  return (
    <div className="mt-10" >
        <Navbar />
        <div className="ml-60 mr-40 mt-6">

        <div className="pt-4 pb-4">
        <h1 className="font-bold text-2xl text-gray-800 pb-6 "> Our Mission </h1>
        <p className="text-xl text-gray-600">
        Our joined mission is to bring meaningful change by empowering Rwandan women through innovation, advocacy and collaboration. We&apos;re dedicated to establishing a dynamic women-based organization that supports and implements projects focused on women&apos;s empowerment.
        </p>
        </div>

        <div className="pt-4 pb-4">
        <h1 className="font-bold text-2xl text-gray-800 pb-6"> Our Solution </h1>
        <p className="text-xl text-gray-600">
        Our solution, &ldquo;We Connect, &rdquo; is an annual event designed to bridge the gap between talented women possessing valuable skills and potential, and institutions seeking to recognize and harness their abilities. This event will serve as a platform to facilitate connections for women, providing access to internships, employment opportunities, mentorship programs, as well as linking women with innovative ideas to potential investors.
        </p>
        </div>

        <div className="pt-4 ">
        <h1 className="font-bold text-2xl text-gray-800 pb-6"> Get To Know Us </h1>
        <p className="text-xl text-gray-600">
        We, a team of five young women and one young man, are first-year students at the African Leadership University. As members of the Think Tank Luminary Hub, we collaborate to brainstorm creative and effective solutions for current challenges. Throughout our college journey, we are committed to making a positive impact on our community while also focusing on personal and professional growth.
        </p>
        </div>

       

        <div className="grid grid-cols-6 gap-6 pt-6">

        <div className='justify-center items-center text-center h-52 w-44'>
             <img src={marie} alt='logo' className='rounded-md pb-2 h-50 w-44' />
             <p1 className="text-gray-600 text-lg ">Stella Iradukunda</p1>
          </div>

          <div className='justify-center items-center text-center h-52 w-44'>
             <img src={edine} alt='logo' className='rounded-md pb-2 h-50 w-44' />
             <p1 className="text-gray-600 text-lg ">Edine Mugisha</p1>
          </div>

          <div className='justify-center items-center text-center h-52 w-44'>
             <img src={gloria} alt='logo' className='rounded-md pb-2 h-48 w-44' />
             <p1 className="text-gray-600 text-lg ">Grolia Umutoni</p1>
          </div>
         

          <div className='justify-center items-center text-center h-52 w-44'>
             <img src="data:image/jpeg;base64,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" alt='logo' className='rounded-md pb-2 h-48 w-44' />
             <p1 className="text-gray-600 text-lg ">Divine Ikirezi</p1>
          </div>

          <div className='justify-center items-center text-center h-52 w-44'>
             <img src={bosire} alt='logo' className='rounded-md pb-2 h-48 w-44' />
             <p1 className="text-gray-600 text-lg ">Samuel Bosire</p1>
          </div>

          <div className='justify-center items-center text-center h-52 w-44'>
             <img src={chloe} alt='logo' className='rounded-md pb-2 h-48 w-44' />
             <p1 className="text-gray-600 text-lg ">Chloe Umutoni</p1>
          </div>

        </div>  

        </div>
        
        <Footer />
    </div>
  )
}

export default AboutPage