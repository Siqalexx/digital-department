import AboutUs from './AboutUs';
import Banners from './Banners';
import News from './News';
import Preview from './Preview';

function Main() {
	return (
		<main className='main'>
			<Preview></Preview>
			<AboutUs></AboutUs>
			<Banners></Banners>
			<News></News>
		</main>
	);
}

export default Main;
