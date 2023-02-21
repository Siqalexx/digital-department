import Header from './components/Header';
import Main from './components/Main';

function App() {
	return (
		<div className='app'>
			<Header></Header>
			<Main></Main>
			<div style={{ width: '100%', height: '1000px' }}></div>
		</div>
	);
}

export default App;
