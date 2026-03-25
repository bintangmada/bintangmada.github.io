import { motion } from 'framer-motion';

const About = ({ data }) => {
    const { about, ui } = data;

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{ui.aboutMe}</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex-1 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800"
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{ui.descTitle}</h3>
                        {about.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}

                        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
                                {ui.downloadCv}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 w-full lg:w-auto mt-8 lg:mt-0"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">{ui.skillsTitle}</h3>
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap gap-3">
                            {about.skills.map((skill, index) => (
                                <motion.span key={index} variants={fadeInUp} className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors cursor-default">
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">{ui.focusTitle}</h3>
                            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
                                {about.focusAreas.map((area, index) => (
                                    <motion.div key={index} variants={fadeInUp} className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 shadow-sm">
                                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white">{area.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{area.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
