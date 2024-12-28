import AboutMeBio from '../components/about/AboutMeBio';
import { motion } from 'framer-motion'; 

const About = () => {
	return (
      <div className='mt-30' >
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>
      </div>
	);
};

export default About;
