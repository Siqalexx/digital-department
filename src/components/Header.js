import logo from '../images/LOGO.svg';
import burger from '../images/burger.svg';
function Header() {
	return (
		<header className='header'>
			<img src={logo} alt='Логотип' className='header__logo'></img>
			<nav className='header__navigation'>
				<ul className='header_links'>
					<li className='header_link'>
						<a className='header_text' href='#aboutUs'>
							о нас
						</a>
					</li>
					<li className='header_link'>
						<a
							onClick={() => alert('В разработке')}
							className='header_text'
							href='#'
						>
							Программы
						</a>
					</li>
					<li className='header_link'>
						<a
							onClick={() => alert('В разработке')}
							className='header_text'
							href='#'
						>
							проекты
						</a>
					</li>
					<li className='header_link'>
						<a
							onClick={() => alert('В разработке')}
							className='header_text'
							href='#'
						>
							контакты
						</a>
					</li>
				</ul>
			</nav>
			<img src={burger} alt='Меню' className='header__burger'></img>
		</header>
	);
}

export default Header;
