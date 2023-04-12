import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Circle from './Circle';
function toProject(title, history) {
	history(`/projects/${title}`);
}

function Project({ side, title, description, photo }, history) {
	return (
		<div className='project'>
			<div className={`project__content ${photo}`}>
				<Circle personalCircle='bigCircle' />
				<Circle personalCircle='smallCircle' />
			</div>
			<div className={`project__info ${side}`}>
				<h2 className='project__title'>{title}</h2>
				<p className='project__description'>{description}</p>
				{/* <Button
					onClickl={() => toProject(title, history)}
					className='project__button-upper'
					text='Подробнее'
				/> */}
			</div>
			{/* <Button
				onClickl={() => toProject(title, history)}
				className='project__button-under'
				text='Подробнее'
			/> */}
		</div>
	);
}
const arr = [
	{
		photo: 'computer',
		side: 'right marg',
		// title: 'Геокарта Крыма: виртуальный гид',
		title: 'Технологии ИИ и анализа данных',
		description: `Программа  на базовом уровне. Для более глубокого изучения включаются модули использования, конфигурирования и программирование в в системах управления контентом (CMS) на языке программирования PHP.
На программе обучаются студенты как ИТ-специальностей, так и не ИТ-специальностей
`,
	},
	{
		photo: 'phone',
		side: 'left',
		// title: 'Геокарта Крыма: CSM-система',
		title: 'Проектирование в CAD-системах',
		description: `Программа Проектирование в CAD-системах включает получение навыков работы по созданию 3D моделей зданий. Построенные модели являются основой для получения основных архитектурных чертежей необходимых при проектировании.
На программе обучаются студенты не ИТ-специальностей.
`,
	},
	// {
	// 	photo: 'computer',
	// 	side: 'right',
	// 	title: 'Геокарта Крыма: Пещера “Таврида” - виртуальный гид',
	// 	description:
	// 		'Мобильное приложение с дополненной и виртуальной реальностью, рассказывающее и показывающее жизнь обитателей пещеры 15 тыс лет назад. Анимированные 3D модели доисторических животных оживляют историю в твоем приложении',
	// },
	{
		// photo: 'phone',
		photo: 'computer',
		// side: 'left',
		side: 'right',
		title: 'Web-разработка',
		description: `Программа Web-разработка включает получение навыков работы с JavaScript, HTML, CSS на базовом уровне. Для более глубокого изучения включаются модули использования, конфигурирования и программирование в в системах управления контентом (CMS) на языке программирования PHP.
На программе обучаются студенты как ИТ-специальностей, так и не ИТ-специальностей.
`,
	},
];
function ProjectList() {
	const history = useNavigate();
	return (
		<section className='projectList'>
			<h2 className='projectList__title  '>Программы</h2>
			{arr.map(element => {
				return Project(element, history);
			})}
		</section>
	);
}

export default ProjectList;
