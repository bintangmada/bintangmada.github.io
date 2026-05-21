import { motion } from 'framer-motion';

const Education = ({ data }) => {
  const { educations, ui } = data;

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{ui.education}</h2>
          <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-4 border-gray-200 dark:border-gray-800 ml-3 md:ml-0">
          {educations.map((edu, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 ml-8 md:ml-12 relative"
            >
              <div className="absolute w-6 h-6 bg-purple-600 rounded-full -left-[43px] border-4 border-white dark:border-gray-950"></div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold rounded-full mt-2 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4">{edu.institution}</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
