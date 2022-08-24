import Header from './components/Header/Header';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RecoilRoot } from 'recoil';
import Home from './components/Home/Home';
import Projects from 'components/Projects/Projects';
import Studies from 'components/Studies/Studies';
import Contact from 'components/Contact/Contact';
import Footer from 'components/Footer/Footer';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<RecoilRoot>
		<Header />
        <Home />
        <Projects />
        <Studies />
        <Contact />
        <Footer />
	</RecoilRoot>
);
