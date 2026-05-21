import { motion } from 'framer-motion';

const Experience = ({ data }) => {
    const { experiences, ui } = data;

    return (
        <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{ui.experience}</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="flex flex-col md:flex-row gap-6 md:gap-12 group"
                        >
                            <div className="md:w-1/3 flex flex-col md:items-end">
                                <span className="inline-block px-4 py-1.5 bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-bold rounded-full shadow-sm">
                                    {exp.duration}
                                </span>
                            </div>

                            <div className="relative md:w-2/3 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300">
                                <div className="absolute top-8 -left-4 w-8 h-8 bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded-full border-4 border-white dark:border-gray-950 hidden md:flex">
                                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                                <h4 className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.company}</h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
