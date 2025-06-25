import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10">
            {/* Contact Info - Enlarged */}
            <div className="bg-black/80 p-10 rounded-xl backdrop-blur-sm shadow-2xl border border-gray-800">
              <h3 className="text-3xl font-bold mb-8 text-gray-100 text-center">Contact Information</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/70 transition duration-300">
                  <div className="bg-gray-800 p-4 rounded-full mb-4">
                    <FiMail className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 mb-2 font-medium">Email</p>
                  <a href="mailto:thiyaana.vidanaarachchi@gmail.com" className="hover:text-white transition text-lg break-all">
                    thiyaana.vidanaarachchi@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/70 transition duration-300">
                  <div className="bg-gray-800 p-4 rounded-full mb-4">
                    <FiPhone className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 mb-2 font-medium">Phone</p>
                  <a href="tel:+94710752339" className="hover:text-white transition text-lg">
                    +94777327904
                  </a>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/70 transition duration-300">
                  <div className="bg-gray-800 p-4 rounded-full mb-4">
                    <FiMapPin className="text-white text-2xl" />
                  </div>
                  <p className="text-gray-400 mb-2 font-medium">Location</p>
                  <p className="text-lg">Colombo, Sri Lanka</p>
                </div>
              </div>
              
              <div className="mt-16">
                <h4 className="text-2xl font-bold mb-6 text-center">Connect With Me</h4>
                <div className="flex justify-center space-x-8">
                  <a 
                    href="https://www.linkedin.com/in/thiyaana-vidanaarachchi-974a1a353/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-700 p-4 rounded-full transition duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-white text-2xl" />
                  </a>
                  <a 
                    href="https://github.com/methsu"
                    className="bg-gray-800 hover:bg-gray-700 p-4 rounded-full transition duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-white text-2xl" />
                  </a>
                  <a 
                    href="#"
                    className="bg-gray-800 hover:bg-blue-500 p-4 rounded-full transition duration-300 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-white text-2xl" />
                  </a>
                  <a 
                    href="#"
                    className="bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 p-4 rounded-full transition duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-white text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;