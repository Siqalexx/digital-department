import React from 'react';

function QuestionItem({ heading, children }) {
	const [isOpen, setOpen] = React.useState(false);

	function toggleOpen() {
		setOpen(prev => !prev);
	}

	return (
		<div className='question__item'>
			<div className='question__heading'>
				<div className='question__title'>{heading}</div>
				<button className='question__expand' type='button' onClick={toggleOpen}>
					{isOpen ? '-' : '+'}
				</button>
			</div>
			{isOpen && <div className='question__content'>{children}</div>}
		</div>
	);
}

function Questions() {
	const questionList = [
		{
			heading: 'Как записаться?',
			content:
				'Запись на программы цифровой кафедры ведется через ЭОС Университета (личный кабинет) и студенческий офис.',
		},
		{
			heading: 'Какую дополнительную квалификацию я получу?',
			content: `По программам Web-разработка - “Web-разработка (JavaScript, HTML, CSS)“
				 Технологии ИИ и анализа данных - “Специалист по искусственному интеллекту“
				 Проектирование в CAD - системах - “Создание, использование и сопровождение информационной модели ОКС“`,
		},
		{
			heading: 'Когда я получу диплом о цифровой переподготовке?',
			content:
				'Диплом о профессиональной переподготовке выдается вместе с дипломом о высшем образовании (бакалавра или специалиста) после окончания освоения основной образовательной программы',
		},
	];

	return (
		<section className='questions'>
			<h3 className='questions__title'>вопросы</h3>
			<div className='questions__list'>
				{questionList.map((q, i) => (
					<QuestionItem key={i} heading={q.heading}>
						{q.content}
					</QuestionItem>
				))}
			</div>
		</section>
	);
}

export default Questions;
