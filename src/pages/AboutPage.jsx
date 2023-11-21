import edine from '../assets/edine.jpeg';
import marie from '../assets/marie.webp';
import gloria from '../assets/gloria.jpeg';
import bosire from '../assets/bosire.webp';
import divine from '../assets/divine.jpeg';
import chloe from '../assets/chloe.png';
import Navbar from "../components/Navbar"
// import Footer from '../components/Footer';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 
import './about.css';



function AboutPage() {
    const [highlightedIndex, setHighlightedIndex] = useState(2);

    const teamMembers = [
      { image: marie, name: 'Marie' },
      { image: gloria, name: 'Gloria' },
      { image: edine, name: 'Edine' },      
      { image: divine, name: 'Divine' },
      { image: bosire, name: 'Bosire' },
      { image: chloe, name: 'Chloe' },
    ];
  
    const handleNextClick = () => {
        const newIndex = (highlightedIndex + 1) % teamMembers.length;
        const indexOffset = 0.1 * teamMembers.length; // Adjust the offset based on the number of images
      
        // Update the highlighted index and apply the offset
        setHighlightedIndex(newIndex);
        document.querySelector('.highlighted').style.left = `${indexOffset * highlightedIndex}%`;
      };
      
      const handlePrevClick = () => {
        const newIndex = (highlightedIndex - 1 + teamMembers.length) % teamMembers.length;
        const indexOffset = 0.1 * teamMembers.length; // Adjust the offset based on the number of images
      
        // Update the highlighted index and apply the offset
        setHighlightedIndex(newIndex);
        document.querySelector('.highlighted').style.left = `${indexOffset * highlightedIndex}%`;
      };

  return (
    <div className="mt-2" >
        <Navbar />
        <div className="ml-60 mr-40 mt-6">

        <div className="pt-4 pb-4">
        <h1 className="font-bold text-lg text-gray-800 pb-6 "> Our Mission </h1>
        <p className="text-md text-gray-600">
        Our joined mission is to bring meaningful change by empowering Rwandan women through innovation, advocacy and collaboration. We&apos;re dedicated to establishing a dynamic women-based organization that supports and implements projects focused on women&apos;s empowerment.
        </p>
        </div>

        <div className="pt-4 pb-4">
        <h1 className="font-bold text-lg text-gray-800 pb-6"> Our Solution </h1>
        <p className="text-md text-gray-600">
        Our solution, &ldquo;We Connect, &rdquo; is an annual event designed to bridge the gap between talented women possessing valuable skills and potential, and institutions seeking to recognize and harness their abilities. This event will serve as a platform to facilitate connections for women, providing access to internships, employment opportunities, mentorship programs, as well as linking women with innovative ideas to potential investors.
        </p>
        </div>

        <div className="pt-4 ">
        <h1 className="font-bold text-lg text-gray-800 pb-6"> Get To Know Us </h1>
        <p className="text-md text-gray-600">
        We, a team of five young women and one young man, are first-year students at the African Leadership University. As members of the Think Tank Luminary Hub, we collaborate to brainstorm creative and effective solutions for current challenges. Throughout our college journey, we are committed to making a positive impact on our community while also focusing on personal and professional growth.
        </p>
        </div>

       

<div className="grid grid-cols-6  pt-6 relative">
          <BsChevronLeft
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-900 text-2xl"
          />
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`justify-center items-center text-center h-48 w-40 relative ${
                index === highlightedIndex ? 'highlighted' : 'darkened'
              }`}
              style={{
                marginLeft: index === 0 ? '10%' : '',
                marginRight: index === teamMembers.length - 1 ? '10%' : '',
                zIndex: index === highlightedIndex ? 1 : 0,
              }}
            >
              <img src={member.image} alt={`Person ${index}`} className="rounded-md pb-2 h-48 w-42" />
              <p1 className="text-gray-600 text-lg">{member.name}</p1>
            </div>
          ))}
          <BsChevronRight
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-900 text-2xl z-10"
          />
        </div>

        </div>
        
        {/* <Footer /> */}
    </div>
  )
}

export default AboutPage