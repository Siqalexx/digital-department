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
			heading: 'Lorem ipsum dolor sit amet?',
			content:
				'Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?',
		},
		{
			heading: 'Lorem ipsum dolor sit amet?',
			content:
				'Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?',
		},
		{
			heading: 'Lorem ipsum dolor sit amet?',
			content:
				'Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?Lorem ipsum dolor sit amet?',
		},
	];

	return (
		<section className='questions'>
			<h3 className='questions__title'>вопросы</h3>
			<div className='questions__list'>
				{questionList.map(q => (
					<QuestionItem heading={q.heading}>{q.content}</QuestionItem>
				))}
			</div>
		</section>
	);
}

export default Questions;
