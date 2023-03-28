function PreviewProgramms({ title }) {
	return (
		<section className='previewProgramms'>
			<div className='programms-bar'>
				<div className='programms-bar__small'></div>
			</div>
			<div className='previewProgramms__image'>
				<div className='previewProgramms__figure'></div>
				<div className='previewProgramms__info'>
					<h1 className='previewProgramms__title'>{title}</h1>
					<p className='previewProgramms__subtitle'>
						Программа Web-разработка включает получение навыков работы с
						JavaScript, HTML, CSS на базовом уровне. Для более глубокого
						изучения включаются модули использования, конфигурирования и
						программирование в в системах управления контентом (CMS) на языке
						программирования PHP. На программе обучаются студенты как
						ИТ-специальностей, так и не ИТ-специальностей.
					</p>
				</div>
			</div>
		</section>
	);
}

export default PreviewProgramms;
