import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './components/Projects';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Main></Main>} />

				<Route
					path='/about'
					element={
						<h1
							style={{ margin: '300px', fontSize: '100px', color: '#5e4dcd' }}
						>
							Страница "О нас" в разработке
						</h1>
					}
				/>
				<Route
					path='/programs'
					element={
						<h1
							style={{ margin: '300px', fontSize: '100px', color: '#5e4dcd' }}
						>
							Страница "Программы" в разработке
						</h1>
					}
				/>
				<Route path='/projects' element={<Projects />} />
				<Route
					path='/contacts'
					element={
						<h1
							style={{ margin: '300px', fontSize: '100px', color: '#5e4dcd' }}
						>
							Страница "Контакты" в разработке
						</h1>
					}
				/>
				<Route
					path='*'
					element={
						<h1
							style={{ margin: '300px', fontSize: '100px', color: '#5e4dcd' }}
						>
							404 ERROR
						</h1>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
