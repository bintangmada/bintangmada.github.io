import { motion } from 'framer-motion';

const Contact = ({ data }) => {
  const { personal, ui } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(subject || `Pesan dari Website Portofolio - ${name}`)}&body=${encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{ui.contactTitle}</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
            {ui.contactDesc}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-12 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800"
        >
          
          <div className="md:w-2/5 md:bg-blue-600 md:text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 md:text-white text-gray-900 dark:text-white">{ui.contactInfo}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 shrink-0 md:text-blue-200 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <div>
                    <p className="font-medium text-sm md:text-blue-200 text-gray-500 dark:text-gray-300">{ui.email}</p>
                    <p className="md:text-white text-gray-900 dark:text-white font-semibold">{personal.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 shrink-0 md:text-blue-200 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <div>
                    <p className="font-medium text-sm md:text-blue-200 text-gray-500 dark:text-gray-300">{ui.location}</p>
                    <p className="md:text-white text-gray-900 dark:text-white font-semibold">{personal.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block mt-12 opacity-50">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="59.5" stroke="currentColor" strokeDasharray="4 4"/>
                <circle cx="60" cy="60" r="39.5" stroke="currentColor" strokeDasharray="4 4"/>
                <circle cx="60" cy="60" r="19.5" stroke="currentColor" strokeDasharray="4 4"/>
              </svg>
            </div>
          </div>

          <div className="md:w-3/5 p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{ui.fullName}</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white" placeholder={ui.namePlaceholder} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{ui.email}</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{ui.subject}</label>
                <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white" placeholder={ui.subjectPlaceholder} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{ui.message}</label>
                <textarea id="message" name="message" required rows="5" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-900 dark:text-white resize-none" placeholder={ui.messagePlaceholder}></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
              >
                {ui.sendMessage}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
