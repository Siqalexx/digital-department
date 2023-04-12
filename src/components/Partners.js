function Partner({ title, text, link }) {
	return (
		<div className='partner'>
			<h3 className='partner__title'>{title}</h3>
			<p className='partner__text'>
				{text}
				<br></br>
				<br></br>
				<a className='partner__link' href={link}>
					{link}
				</a>
			</p>
		</div>
	);
}
const data = [
	{
		title: 'ООО Инженерный центр Таврида',
		text: ` Компания занимает лидирующие позиции на рынке разработки корпоративных информационных систем класса ERP. Компания занимается проектированием и сопровождение цифровых решений для бизнеса. ООО ИЦ "Таврида" - компания, создающая ИТ решения для Вас.
Оказывает комплексные услуги по автоматизации деловых процессов в области: проектирования и внедрения систем электронного документооборота, учетных систем, инфраструктурных и интеграционных решений. Разрабатывает ПО под заказ.

`,
		link: 'https://ec-tavrida.ru/',
	},
	{
		title: 'ООО АйдиэсВорлд',
		text: `Компания участник Крымского ИТ кластера, на рынке более 20 лет. Компания реализовала более 300 успешных проектов в сфере разработки программного обеспечения. Компания сертифицирована на уровне А+ по версии RUWARD. Среди клиентов ВТБ, РНКБ, Redisson, Норникель, МГУ имени Ломоносова и другие.`,
		link: 'https://ideas-world.com/',
	},
	{
		title: 'ООО ТуБиСофт',
		text: `За 20 лет работы в Крыму компания реализовала более 1000 проектов, накопила огромный опыт в следующих направлениях: автоматизация бухгалтерского и управленческого учета, автоматизация учета в ресторанах, кафе, магазинах, гостиницах.

`,
		link: 'https://tobesoft.ru/',
	},
	{
		title: 'ООО Консоль-строй ЛТД',
		text: `С момента регистрации (8 июня 1993 год) фирме удалось достигнуть многого: в несколько раз увеличить объемы строительства и выйти на новый уровень технологий, организовать большое количество самостоятельных программ, обеспечить работой тысячи крымчан. С 1993 по 2017 год было введено в эксплуатацию более 600 объектов, общей площадью 2 млн. м кв. жилых и офисно-торговых помещений, а это далеко не маленькие объемы.`,
		link: '',
	},
];
function Partners() {
	return (
		<section className='partners'>
			<h2 className='partners__title'>Партнеры</h2>
			<div className='partners__cards'>
				{data.map((element, index) => {
					return Partner(element);
				})}
			</div>
		</section>
	);
}

export default Partners;
