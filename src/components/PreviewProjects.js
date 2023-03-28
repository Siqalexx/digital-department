function PreviewProjects() {
	return (
		<section className='previewProjects'>
			<div className='previewProjects__image'>
				<div className='previewProjects__figure'></div>
				<div className='previewProjects__info'>
					<h1 className='previewProjects__title'>Web-разработка</h1>
					<p className='previewProjects__subtitle'>
						Программа Web-разработка включает получение навыков работы с
						JavaScript, HTML, CSS на базовом уровне. Для более глубокого
						изучения включаются модули использования, конфигурирования и
						программирование в в системах управления контентом (CMS) на языке
						программирования PHP. На программе обучаются студенты как
						ИТ-специальностей, так и не ИТ-специальностей.
					</p>
				</div>
				<div className='previewProjects__students'>
					<div className='previewProjects__students-block'>
						<div className='previewProjects__container-students'></div>
						<p className='previewProjects__count-students'>16 преподавателей</p>
					</div>
					<div className='previewProjects__students-block'>
						<div className='previewProjects__element'></div>
						<div className='previewProjects__element'></div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PreviewProjects;
