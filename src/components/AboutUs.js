import video from '../images/video.mp4';
import photo from '../images/video_photo.png';
function AboutUs() {
	return (
		<section id='aboutUs' className='aboutUs'>
			<div className='aboutUs__video-container'>
				<video poster={photo} controls className='aboutUs__video'>
					<source
						src={'https://www.youtube.com/watch?v=WCgCQTyhjYE'}
						type='video/mp4'
					></source>
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
					университет имени В.И. Вернадского стал участников проекта «Цифровые
					кафедры». Проект «Цифровые кафедры» реализуется как составляющая часть
					федерального проекта «Развитие кадрового потенциала ИТ-отрасли»
					национальной программы «Цифровая экономика Российской Федерации», и
					направлен на получения дополнительной квалификации по ИТ-профилю для
					студентов всех Институтов КФУ. Программы цифровой кафедры направлены
					на получение профессиональных компетенций в области цифровых навыков
					использования и освоения новых цифровых технологий по направлениям
					цифровой экономики. В 2022 году на программы было зачислено более 1400
					студентов.
				</p>
				{/* <button
					onClick={() => alert('В разработке')}
					className='aboutUs__button'
				>
					Подробнее
				</button> */}
			</div>
			<div className='aboutUs__cells'>
				<div className='aboutUs__ellips_big aboutUs__ellips_big_cells'></div>
				<div className='aboutUs__ellips_small aboutUs__ellips_small_cells'></div>
				<div className='aboutUs__cell'>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>о нас</h3>
					<p className='aboutUs__cell-description'>
						Университет реализует 5 программа профессиональной переподготовки,
						которые входят в три направления: Web-разработка (для ИТ и не ИТ
						специалистов), Технологии искусственного интеллекта и анализа данных
						(для ИТ и не ИТ специалистов) и Проектирование в CAD-системах. Объем
						каждой программы составляет 324 часа и срок реализации 10 месяцев.
					</p>
				</div>
				<div className='aboutUs__cell'>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>о нас</h3>
					<p className='aboutUs__cell-description'>
						В реализации программ по цифровой кафедре принимают участие опытные
						специалисты-практики из сфер деятельности согласно содержанию
						программ. Участи индустриальных партнеров обеспечивает реальную
						практическую подготовку, которая выводит студентов в реалии цифровых
						технологий в профессиональных областях.
					</p>
				</div>

				<div className='aboutUs__cell'>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>о нас</h3>
					<p className='aboutUs__cell-description'>
						Высокое качество подготовки специалистов по программам цифровой
						кафедры гарантируется внешней независимой оценкой качества -
						ассесмент-центра Университета Иннополис. Студенты, начавшие обучение
						в 2022, успешно прошли входной и промежуточный ассесмент.
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
