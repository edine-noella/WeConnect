
import Navbar from "../components/Navbar"
import {  BsYoutube, BsInstagram , BsFilePdfFill, BsLink } from 'react-icons/bs'
import Footer from "../components/Footer"
import { useState } from 'react'
import './challenge.css'
import PropTypes from 'prop-types';


function ChallengeCard({ number, title, content }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
        
    <div className=" mb-12">
    <div
      className={`flex ml-60 w-8/12 pt-5 card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-none w-24 mr-12 pl-10">
        <h1 className="text-4xl text-gray-500">{number}</h1>
      </div>
      <div className="flex-initial w-9/12">
        <h1 className="font-bold text-gray-800 text-xl pb-4 custom-montserrat-font">
          {title}
        </h1>
        <p className="custom-montserrat-font text-md text-gray-600">{content}</p>
      

      <div className="flex pb-4 pt-4">
                  <div className="flex-initial ">
                  <a href="https://www.youtube.com/@LuminaryHub-wo3rx/videos" rel="social media" >  <BsYoutube className=" text-2xl text-gray-900 bg-white "/></a>
                  </div>
                  <div className="flex-initial ">
                    <a href="https://www.instagram.com/alu_luminaryhub/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" rel="social media" > <BsInstagram className=" text-2xl text-gray-900 bg-white pl-2 "/></a>
                  </div>
                  <div className="flex-initial ">
                  <a href="https://www.instagram.com/alu_luminaryhub/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" rel="social media" > <BsFilePdfFill className=" text-2xl text-gray-900 bg-white pl-2 "/></a>
                  </div>
                  <div className="flex-initial ">
                    <a href="https://www.instagram.com/alu_luminaryhub/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" rel="social media" > <BsLink className=" text-2xl text-gray-900 bg-white pl-2 "/></a>
                  </div>
                 
                  </div>

                  </div>
    </div>
    </div>
  );
}

function ChallengePage() {
 

  const cards = [
    {
      number: '01',
      title: 'Elevator Pitch',
      content:
        'Through our inaugural challenge, we seized the opportunity to not only introduce ourselves and our team but also to articulate our mission and aspirations as a collective think tank. This initial endeavor has been instrumental in fostering a robust team dynamic, enhancing our cohesion, and nurturing a shared vision. The experience has served as a catalyst, propelling us forward and significantly bolstering our team spirit and collaborative ethos.',
    },
    
    {
      number: '02',
      title: 'Discover Africa',
      content:
        'This immersive challenge has been a journey of self-discovery, enabling us to share our unique narratives and uncover the rich tapestry of Africa. Through engaging with others, we have delved deeper into our roots, unraveling the diverse cultural intricacies of our continent. The invaluable teachings from Luanda Magele have been a beacon, imparting profound knowledge that has enriched our understanding of Africa’s multifaceted heritage.',
    },

    {
        number: '03',
        title: 'Help Lab',
        content:
          'During this challenge, a profound realization dawned upon us regarding the significance of community support and altruism. Engaging in serving and preparing food at a local school cafeteria was a heartwarming experience that left an indelible mark on us. It was not merely a charitable act but a memorable occasion where we found joy and fulfillment in extending a helping hand to others. This endeavor underscored the immense value of giving back to the community while creating cherished memories along the way.',
      },

      {
        number: '04',
        title: 'Hunt For Treasure',
        content:
          'Throughout this expedition, our travels took us on a meaningful journey interviewing MTN agents, allowing us to immerse ourselves in their world. These encounters shed light on the diverse array of challenges they face daily, offering invaluable insights into their experiences. Armed with this firsthand knowledge, our mission evolved into becoming advocates for these individuals, dedicated to championing their cause and amplifying their voices. This expedition served as a pivotal moment in our quest to better understand and advocate for the needs of MTN agents.',
      },

      {
        number: '05',
        title: 'Launch Your Mission V2',
        content:
          'This culmination stands as the pinnacle of our E-lab journey, encapsulating our mission, achievements, and the trajectory we&quota;ve forged. It symbolizes the milestones we&quota;ve reached and the uncharted paths we continue to explore, signifying the remarkable growth we&quota;ve undergone. As a testament to our dedication and progress, this deliverable serves as a testament to our commitment to a journey of continuous advancement and excellence.',
      },
   
  ];

  return (
    <div>
         <div className="pt-12 pb-10 ">
         <Navbar />
         </div>
    <div className="pb-12">
    
      {cards.map((card, index) => (
        <ChallengeCard
          key={index}
          number={card.number}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>

    <Footer />
    </div>
  );
}

export default ChallengePage;

ChallengeCard.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };