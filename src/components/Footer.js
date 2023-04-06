import logo from '../images/logo-footer.svg';
function Footer() {
	return (
		<footer id='footer' className='footer'>
			<img src={logo} alt='Логотип' className='footer__logo'></img>
			<div className='footer-info'>
				<h2 className='footer-info__title'>КФУ...</h2>
				<p className='footer-info__subtitle'>
					пр. Академика Вернадского, д. 4, каб. 334А
				</p>
				<p className='footer-info__subtitle'>8 (3652) 54 57 34</p>
				<p className='footer-info__subtitle'>
					Режим работы:
					<br /> Пн-пт: 10:00- 21:00
					<br /> Сб-Вс: выходной
				</p>
			</div>
			<ul className='footer_links'>
				<li className='footer_link'>о нас</li>
				<li className='footer_link'>проекты</li>
				<li className='footer_link'>портфолио</li>
				<li className='footer_link'>контакты</li>
			</ul>
			<div className='footer-contacts'>
				<h3 className='footer-contacts__text'>
					Контакты:
					<br />
					<br /> digitalkaf@cfuv.ru <br />8 (3652) 54 57 34
				</h3>
			</div>
		</footer>
	);
}

export default Footer;
