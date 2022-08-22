import Header from './components/Header/Header';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { RecoilRoot } from 'recoil';
import Home from './components/Home/Home';
import Projects from 'components/Projects/Projects';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<RecoilRoot>
		<Header />
        <Home />
        <Projects />
	</RecoilRoot>
);
