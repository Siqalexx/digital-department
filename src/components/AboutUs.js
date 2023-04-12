import video from '../images/video.mp4';
import photo from '../images/video_photo.png';
function AboutUs() {
	return (
		<section id='aboutUs' className='aboutUs'>
			<div className='aboutUs__video-container'>
				<video poster={photo} controls className='aboutUs__video'>
					<source src={video} type='video/mp4'></source>
					Тег video не поддерживается вашим браузером.
				</video>
			</div>
			<div className='aboutUs__ellips_big'></div>
			<div className='aboutUs__ellips_medium'></div>
			<div className='aboutUs__ellips_small'></div>
			<div className='aboutUs__info'>
				<h2 className='aboutUs__title'>о нас</h2>
				<p className='aboutUs__description'>
					В рамках стратегического проекта «Приоритет 2030» Крымский федеральный
					университет имени В.И. Вернадского стал участником проекта «Цифровые
					кафедры». Проект «Цифровые кафедры» реализуется как составляющая часть
					федерального проекта «Развитие кадрового потенциала ИТ-отрасли»
					национальной программы «Цифровая экономика Российской Федерации», и
					направлен на получение дополнительной квалификации по ИТ-профилю для
					студентов всех Институтов КФУ. <br />
					Программы цифровой кафедры направлены на формирование профессиональных
					компетенций в области цифровых навыков использования и освоения новых
					цифровых технологий для цифровой экономики. В 2022 году на программы
					было зачислено более 1400 студентов.
				</p>
				{/* <button
					onClick={() => alert('В разработке')}
					className='aboutUs__button'
				>
					Подробнее
				</button> */}
			</div>
			<div className='aboutUs__cells'>
				<div className='aboutUs__cell'>
					<div className='aboutUs__ellips_big aboutUs__ellips_big_cells'></div>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>Программы</h3>
					<p className='aboutUs__cell-description'>
						Университет реализует 5 программ профессиональной переподготовки,
						которые охватывают три направления: Web-разработка (для ИТ и не ИТ
						специалистов), Технологии искусственного интеллекта и анализа данных
						(для ИТ и не ИТ специалистов) и Проектирование в CAD-системах. Объем
						каждой программы составляет 324 часа со сроком реализации 10
						месяцев.
					</p>
				</div>
				<div className='aboutUs__cell'>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>Партнеры</h3>
					<p className='aboutUs__cell-description'>
						Среди партнеров: ООО “Консоль-строй”, ООО “ФеймДев” (ИТ компания),
						ООО “АйДиЭсВорлд” (ИТ-компания), ООО ТуБи Софт (ИТ-конмпания)
					</p>
				</div>

				<div className='aboutUs__cell'>
					<div className='aboutUs__ellips_small aboutUs__ellips_small_cells'></div>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>Руководитель</h3>
					<p className='aboutUs__cell-description'>
						Цифровой кафедрой Университета руководит Королев Олег Леонидович,
						к.э.н., доцент кафедры бизнес-информатики и математического
						моделирования Физико-технического института. Стаж педагогической
						деятельности - более 20 лет, опыт работы в ИТ отрасли - более 10 лет
						от разработчика до менеджера продуктов и архитектора систем.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
