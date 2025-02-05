import {Linkedin, Mail, Phone} from 'lucide-react';
import {useState} from 'react';
import Button from './commons/Button';
import Container from './commons/Container';

const ContactForm = () => {
	const [showPhone, setShowPhone] = useState(false);
	const [showEmail, setShowEmail] = useState(false);

	return (
		<Container id="contact" className="text-center md:bg-gray-50 my-20 lg:my-40 md:dark:bg-gray-800">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 dark:text-white">Me Contacter</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-300">N'hésitez pas à me contacter via les moyens suivants !</p>
			</div>
			<div className="max-w-4xl mx-auto mt-10 grid gap-10 md:gap-6 grid-cols-1 md:grid-cols-3">
				<div className="flex flex-col items-center text-gray-900 dark:text-white">
					<div className="rounded-xl bg-gray-200 dark:bg-gray-700 w-16 h-16 flex items-center justify-center mb-5">
						<Mail className="w-8 h-8" />
					</div>
					{showEmail ? (
						<Button variant="secondary" href="mailto:willdonn17@gmail.com" className="text-gray-900 dark:text-white">
							willdonn17@gmail.com
						</Button>
					) : (
						<Button
							variant="secondary"
							onClick={() => setShowEmail(true)}
							className="flex flex-col items-center text-gray-900 dark:text-white"
						>
							Cliquez pour voir
						</Button>
					)}
				</div>
				<div className="flex flex-col items-center text-gray-900 dark:text-white">
					<div className="rounded-xl bg-gray-200 dark:bg-gray-700 w-16 h-16 flex items-center justify-center mb-5">
						<Phone className="w-8 h-8" />
					</div>
					{showPhone ? (
						<Button variant="secondary" href="tel:+33651799643" className="text-gray-900 dark:text-white">
							+33 6 51 79 96 43
						</Button>
					) : (
						<Button
							variant="secondary"
							onClick={() => setShowPhone(true)}
							className="flex flex-col items-center text-gray-900 dark:text-white"
						>
							Cliquez pour voir
						</Button>
					)}
				</div>

				<div className="flex flex-col items-center text-gray-900 dark:text-white justify-center">
					<div className="rounded-xl bg-gray-200 dark:bg-gray-700 w-16 h-16 flex items-center justify-center mb-5">
						<Linkedin className="w-8 h-8" />
					</div>
					<Button
						variant="secondary"
						href="https://www.linkedin.com/in/william-donnette-a997a4192/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-900 dark:text-white"
					>
						LinkedIn
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default ContactForm;
