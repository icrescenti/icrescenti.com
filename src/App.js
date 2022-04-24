import logo from './img/me.svg';
import disk from './img/disc.png';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
		<motion.div
			initial={{opacity:0}}
			animate={{opacity: 1}}
			transition={{ duration:1, delay:2 }}
		>
		<header className="pbody">
			<img src={logo} alt="logo" style={{width: '50vh', heigth: '50vh'}} draggable={false}/>
			<p style={{color: "black"}}>
				Howdy, Im Ivan a software developer
			</p>
			{false && <img src={disk} className="loading App-logo" alt="logo" />}
		</header>
      </motion.div>
    </div>
  );
}

export default App;
