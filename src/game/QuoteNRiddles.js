import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TypeAnimation from 'react-type-animation';
import disk from '../img/disc.png';

const QuoteNRiddles = props => {

	const [userText, setUserText] = useState("")
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true)
			document.addEventListener("keydown", function(event) {
				if (event.keyCode > 64 && event.keyCode < 91)
					setUserText(t => t + event.key)
				else if (event.keyCode == 8 && userText != "")
					setUserText(t => t.slice(0, -1))
				else if (event.keyCode == 32)
					setUserText(t => t + " ")
			});
		}, 3000)
	}, [false])	

	return (
		<div className="App">
			<header className="pbody">
				<motion.div
					initial={{opacity:0}}
					animate={{opacity: 1}}
					transition={{ duration: 0.7, delay:0.5 }}
					style={{color: "black", width: '80%'}}
				>
					<div style={{color: "black", width: '100%'}}>
						<TypeAnimation
							cursor={!loaded}
							sequence={[
								2000,
								'The wicked flee',
								1000 * 60 * 15 ,
								'Are you still there?'
							]}
							wrapper="p"
							repeat={1}
						/>
						<p>{userText}</p>
					</div>
				</motion.div>
				
				{false && <img src={disk} className="loading App-logo" alt="logo" />}
			</header>
		</div>
	);
}

export default QuoteNRiddles;
