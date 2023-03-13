import logo from '../images/LOGO.svg';
import burger from '../images/burger.svg';
import { NavLink } from 'react-router-dom';
function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='Логотип' className='header__logo'></img>
			<nav className='header__navigation'>
				<ul className='header_links'>
					<li className='header_link'>
						<NavLink className='header_text' to='/'>
							главная
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink className='header_text' to='/about'>
							о нас
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink className='header_text' to='/programs'>
							Программы
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink className='header_text' to='/projects'>
							проекты
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink className='header_text' to='/contacts'>
							контакты
						</NavLink>
					</li>
				</ul>
			</nav>
			<img src={burger} alt='Меню' className='header__burger'></img>
		</header>
	);
}

export default Header;
