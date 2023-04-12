import { useState } from 'react';
import NewsPopup from './NewsPopup';

function News() {
	const [openNew, setOpenNew] = useState(false);
	const [isNewsPopupOpen, NewsPopupOpen] = useState(false);
	const [isNewsPopupContent, NewsPopupContent] = useState({
		title: '',
		photo: '',
		description: '',
	});
	function clickNew() {
		setOpenNew(!openNew);
	}
	return (
		<section className='news'>
			<h3 className='news__title'>новости</h3>
			<div className='news__block'>
				<div className='new-big'>
					<div className='new-big__info'>
						<h4 className='new-big__title'>новости</h4>
						<p className='new-big__description'>
							Цифровая кафедра приступила к подготовке НОВЫХ программ. В числе
							перспективных направлений развитие центров компетенций Института
							медиакоммуникаций, медиатехнологий и др.
						</p>
						<button
							onClick={() => {
								NewsPopupContent({
									title: 'новости',
									photo: 'new-big.png',
									description: `Цифровая кафедра приступила к подготовке НОВЫХ программ. В числе
							перспективных направлений развитие центров компетенций Института
							медиакоммуникаций, медиатехнологий и др.`,
								});
								document.body.classList.toggle('news-popup__bg_opened');
								NewsPopupOpen(true);
							}}
							className='new-big__button'
						>
							Подробнее
						</button>
					</div>
					<div className='new-big__photo'></div>
				</div>
				<div className='new-small'>
					<div className='new-small__info'>
						<h2 className='new-small__title'>новости</h2>
						<p className='new-small__description'>
							“Проектирование в CAD-системах”. Проработка информационных моделей
							загородных коттеджей.
						</p>
						<button
							onClick={() => {
								NewsPopupContent({
									title: 'новости',
									photo: 'photoPopup.png',
									description: `“Проектирование в CAD-системах”. Проработка информационных моделей
							загородных коттеджей.`,
								});
								document.body.classList.toggle('news-popup__bg_opened');
								NewsPopupOpen(true);
							}}
							className='new-small__button'
						>
							Подробнее
						</button>
					</div>
					<div className='new-small__photo'></div>
				</div>
				<div className='new-medium'>
					<div className='new-medium__info'>
						<h4 className='new-medium__title'>новости</h4>
						<p className='new-medium__description'>
							Амбициозный проект “Гео-карта Крыма” реализуется в рамках
							программы “Web-разработка”. В проекте принимают участие студенты
							многих институтов.
						</p>
						<button
							onClick={() => {
								NewsPopupContent({
									title: 'новости',
									photo: 'medium-second.png',
									description: `Амбициозный проект “Гео-карта Крыма” реализуется в рамках
							программы “Web-разработка”. В проекте принимают участие студенты
							многих институтов.`,
								});
								document.body.classList.toggle('news-popup__bg_opened');
								NewsPopupOpen(true);
							}}
							className='new-medium__button'
						>
							Подробнее
						</button>
					</div>
					<div className='new-medium__photo'></div>
				</div>
				<div className={`new-medium_second `}>
					<div className='new-medium__info_second'>
						<h4 className='new-medium__title_second'>
							111 российских вузов расскажут о работе «цифрровых кафедр»
						</h4>
						<p className='new-medium__description_second'>
							Подключиться к онлайн-трансляции «Марафона цифровых кафедр» на
							сайте проекта может любой желающий
						</p>
						<button
							onClick={() => {
								NewsPopupContent({
									title:
										'111 российских вузов расскажут о работе «цифрровых кафедр»',
									photo: 'innopolis-new.jpg',
									description: `Подключиться к онлайн-трансляции «Марафона цифровых кафедр» на
							сайте проекта может любой желающий`,
								});
								document.body.classList.toggle('news-popup__bg_opened');
								NewsPopupOpen(true);
							}}
							className='new-medium__button_second'
						>
							Подробнее
						</button>
					</div>
					<div className='new-medium__photo_second'></div>
				</div>
				<div className='new-big2'>
					<div className='new-big__info'>
						<h4 className='new-big__title'>
							111 российских вузов расскажут о работе своих «цифрровых кафедр»
						</h4>
						<p className='new-big__description'>
							Подключиться к онлайн-трансляции «Марафона цифровых кафедр» на
							сайте проекта может любой желающий
						</p>
						<button
							onClick={() => {
								NewsPopupContent({
									title:
										'111 российских вузов расскажут о работе «цифрровых кафедр»',
									photo: 'innopolis-new.jpg',
									description: `Подключиться к онлайн-трансляции «Марафона цифровых кафедр» на
							сайте проекта может любой желающий`,
								});
								document.body.classList.toggle('news-popup__bg_opened');
								NewsPopupOpen(true);
							}}
							className='new-big__button'
						>
							Подробнее
						</button>
					</div>
					<div className='new-big__photo new-big__photo-inop'></div>
				</div>
				<div className={`new-big3 ${openNew && 'new-medium_second_open'}`}>
					<div className='new-big__info'>
						<h4 className='new-big__title'>новости</h4>
						<p className='new-big__description'>
							Амбициозный проект “Гео-карта Крыма” реализуется в рамках
							программы “Web-разработка”. В проекте принимают участие студенты
							многих институтов.
						</p>
						<button
							onClick={() => {
								NewsPopupContent({
									title: 'новости',
									photo: 'medium-second.png',
									description: `Амбициозный проект “Гео-карта Крыма” реализуется в рамках
							программы “Web-разработка”. В проекте принимают участие студенты
							многих институтов.`,
								});
								document.body.classList.toggle('news-popup__bg_opened');
								NewsPopupOpen(true);
							}}
							className='new-big__button'
						>
							Подробнее
						</button>
					</div>
					<div className='new-big__photo'></div>
				</div>
			</div>
			<button className='news__open' onClick={clickNew}>
				{openNew ? 'Свернуть ' : 'Развернуть '} &#10531;
			</button>
			{isNewsPopupOpen && (
				<NewsPopup
					title={isNewsPopupContent.title}
					description={isNewsPopupContent.description}
					photo={isNewsPopupContent.photo}
					NewsPopupOpen={NewsPopupOpen}
				/>
			)}
		</section>
	);
}

export default News;
