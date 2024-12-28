import profileImage from '../../images/profile.jpg';

const AboutMeBio = () => {

	return (
		<div className="flex items-center sm:gap-10 mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
					>
						I am a passionate and dedicated front-end developer with strong skills in HTML, CSS, JavaScript, and React. I specialize in creating responsive, user-friendly web interfaces and building reusable, high-quality components. My goal is to continually improve as a developer, deepen my expertise, and eventually grow into a senior full-stack developer role.

I have a strong passion for learning and consistently seek out new technologies and tools to enhance my development skills. I am eager to work on challenging projects that push my limits and allow me to deliver impactful solutions.
					</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
