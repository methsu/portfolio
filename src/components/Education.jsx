import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science hons in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      location: "Malabe, Sri Lanka",
      period: "2023 - 2027",
      description: "Focused on software engineering, data structures, algorithms, and machine learning. Graduated with honors and completed a thesis on modern web technologies."
    },
    {
      id: 2,
      degree: "Early Childhood Teaching Diploma",
      institution: "Inspire",
      location: "Mirihana, Sri Lanka",
      period: "2023 - 2026",
      description: "Completed a diploma in Early Childhood Education, focusing on child development, teaching methodologies, and classroom management. Gained practical experience through internships in local schools."
    },
    {
      id: 3,
      degree: "High School ",
      institution: "Lyceum International School",
      location: "Nugegoda, Sri Lanka ",
      period: "2014 - 2021",
      description: "Graduated with distinction in Mathematics, Physics, and Computer Science. Participated in national science competitions."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Education</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg">
            My academic journey and qualifications
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
            
            {/* Education items */}
            {educationData.map((item, index) => (
              <div key={item.id} className="relative mb-16 last:mb-0">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-gray-800 z-10"></div>
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} relative`}>
                  {/* Content Box */}
                  <div className="bg-gray-800/70 p-6 rounded-xl shadow-xl border border-gray-700 hover:border-white transition duration-300">
                    <span className="inline-block p-3 bg-gray-900 rounded-lg mb-4">
                      <FaGraduationCap className="text-white text-2xl" />
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                    <h4 className="text-lg text-gray-300 font-medium mb-3">{item.institution}</h4>
                    
                    <div className="flex items-center text-gray-400 mb-1">
                      <FaCalendarAlt className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{item.location}</span>
                    </div>
                    
                    <p className="text-gray-300">{item.description}</p>
                  </div>

                  {/* Arrow for desktop */}
                  <div className={`hidden md:block absolute top-6 w-4 h-4 bg-gray-800 transform rotate-45 border border-gray-700
                    ${index % 2 === 0 ? 'right-[calc(-0.5rem-1px)]' : 'left-[calc(-0.5rem-1px)]'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;