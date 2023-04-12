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
		title: 'Геокарта Крыма: виртуальный гид',
		description: '',
	},
	{
		photo: 'phone',
		side: 'left',
		title: 'Геокарта Крыма: CSM-система',
		description: '',
	},
	{
		photo: 'computer',
		side: 'right',
		title: 'Геокарта Крыма: Пещера “Таврида” - виртуальный гид',
		description:
			'Мобильное приложение с дополненной и виртуальной реальностью, рассказывающее и показывающее жизнь обитателей пещеры 15 тыс лет назад. Анимированные 3D модели доисторических животных оживляют историю в твоем приложении',
	},
	{
		photo: 'phone',
		side: 'left',
		title: 'Геокарта Крыма: инфраструктура безопасной передачи данных',
		description: '',
	},
];
function ProjectList() {
	const history = useNavigate();
	return (
		<section className='projectList'>
			<h2 className='projectList__title  '>Проекты</h2>
			{arr.map(element => {
				return Project(element, history);
			})}
		</section>
	);
}

export default ProjectList;
