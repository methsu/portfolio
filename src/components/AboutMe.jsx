import React from 'react';
import aboutImage from '../assets/about.jpeg';

const AboutMe = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-gray-900 to-black py-20 md:py-28 min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500 rounded-full opacity-5 blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-500 rounded-full opacity-5 blur-[120px]"></div>
      
      <div className="container mx-auto px-5 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-yellow-400 uppercase tracking-[0.15em] text-sm mb-3">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 playfair-display">
            Who Am I
          </h2>
          <div className="h-[2px] w-16 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          {/* Image Column */}
          <div className="w-full lg:w-5/12">
            <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-none">
              {/* Image with frame */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Thiyaana Vidanaarachchi" 
                  className="w-full object-cover h-[480px] lg:h-[560px]" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-white text-xl font-light playfair-display">Thiyaana Vidanaarachchi</h3>
                  <p className="text-yellow-400 text-sm mt-1">Full Stack Developer</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-5 -left-5 right-5 bottom-5 border border-yellow-500/20 rounded-xl"></div>
              <div className="absolute -z-10 top-5 left-5 -right-5 -bottom-5 bg-yellow-500/10 rounded-xl"></div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full lg:w-7/12 lg:pl-4 xl:pl-8">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl md:text-3xl text-white font-bold playfair-display mb-4">
                  Hello, I'm <span className="text-yellow-400">Thiyaana</span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A passionate Full Stack Developer and UI/UX Designer with a focus on creating elegant, user-centered digital experiences that balance form and function.
                </p>
              </div>
              
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Date of Birth</span>
                    <span className="text-white">April 10, 2003</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Email</span>
                    <a href="mailto:thiyaana.vidanaarachchi@gmail.com" className="text-white hover:text-yellow-400 transition-colors">thiyaana.vidanaarachchi@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Phone</span>
                    <a href="tel:+94777327904" className="text-white hover:text-yellow-400 transition-colors">+94777327904</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center text-yellow-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Location</span>
                    <span className="text-white">Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-px w-6 bg-yellow-400 mr-3"></div>
                  <h4 className="text-xl text-white font-semibold">About Me</h4>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm a passionate Full Stack Developer and UI/UX Designer with a knack for creating elegant, user-centered digital experiences. With a blend of technical expertise and creative intuition, I transform complex problems into intuitive solutions.
                  </p>
                  <p>
                    My journey in tech began with a curiosity about how digital experiences shape our daily lives. This curiosity evolved into a deep passion for crafting seamless interfaces and robust backend systems that not only meet user needs but exceed their expectations.
                  </p>
                </div>
              </div>
              
              
              
              {/* CTA */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  Download CV
                </a>
                <a 
                  href="https://www.linkedin.com/in/thiyaana-vidanaarachchi/" 
                  className="inline-flex items-center bg-transparent border border-white/20 hover:border-yellow-400 text-white hover:text-yellow-400 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;