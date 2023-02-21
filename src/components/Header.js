import logo from '../images/LOGO.svg';
import burger from '../images/burger.svg';
function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='Логотип' className='header__logo'></img>
			<nav className='header__navigation'>
				<ul className='header_links'>
					<li className='header_link'>о нас</li>
					<li className='header_link'>проекты</li>
					<li className='header_link'>портфолио</li>
					<li className='header_link'>контакты</li>
				</ul>
			</nav>
			<img src={burger} alt='Меню' className='header__burger'></img>
		</header>
	);
}

export default Header;
