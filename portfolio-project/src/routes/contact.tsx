import React, { FunctionComponent } from 'react';
import ContactForm from '../components/contact-form/contact-form';
import './contact.scss';

const Contact: FunctionComponent = () => {
	return (
		<main id="contact">
			<div id="content">
				<section>
				<h3 className="large-header">LET'S CONNECT!</h3>
					<ContactForm />
				</section>
			</div>
		</main>	
	);
}

export default Contact;