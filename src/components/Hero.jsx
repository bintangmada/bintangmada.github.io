import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    const { personal, ui } = data;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-950 pt-16">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="flex-1 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 variants={itemVariants} className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
                        {personal.greeting}
                    </motion.h2>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                        {ui.halo} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {personal.name}
                        </span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0">
                        {personal.shortDescription}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-600/25 flex items-center gap-2">
                            {ui.viewProjects}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                        <a href="#contact" className="px-8 py-3.5 rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                            {ui.contactMe}
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex-1 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
                        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-full border-4 border-white dark:border-gray-900 shadow-2xl overflow-hidden flex items-center justify-center relative z-10">
                            {personal.image && personal.image !== "" ? (
                                <img src={personal.image} alt={personal.name} className="w-full h-full object-cover" />
                            ) : (
                                <svg className="w-32 h-32 text-gray-400 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
