import logo from '../images/LOGO.svg';
import burger from '../images/burger.svg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
	const [openBurger, setOpenBurger] = useState(false);
	return (
		<header className='header'>
			<img src={logo} alt='Логотип' className='header__logo'></img>

			<nav className={`header__navigation ${openBurger ? 'open' : ''}`}>
				<ul className='header_links'>
					<li className='header_link'>
						<NavLink
							onClick={() => {
								setOpenBurger(false);
							}}
							className='header_text'
							to='/'
						>
							главная
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink
							onClick={() => {
								setOpenBurger(false);
							}}
							className='header_text'
							to='/about'
						>
							о нас
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink
							onClick={() => {
								setOpenBurger(false);
							}}
							className='header_text'
							to='/programs'
						>
							Программы
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink
							onClick={() => {
								setOpenBurger(false);
							}}
							className='header_text'
							to='/projects'
						>
							проекты
						</NavLink>
					</li>
					<li className='header_link'>
						<NavLink
							onClick={() => {
								setOpenBurger(false);
							}}
							className='header_text'
							to='/contacts'
						>
							контакты
						</NavLink>
					</li>
				</ul>
			</nav>
			<button
				onClick={() => {
					setOpenBurger(!openBurger);
				}}
				className={`header__burger`}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			{/* <img src={burger} alt='Меню' className='header__burgerr'></img> */}
		</header>
	);
}

export default Header;
