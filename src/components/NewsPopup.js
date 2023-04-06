function NewsPopup({ title, photo, description, NewsPopupOpen }) {
	return (
		<div className='news-popup__bg'>
			<div className='news-popup'>
				<div className='news-popup__content'>
					{photo && (
						<img
							alt={title}
							src={require(`../images/${photo}`)}
							className='news-popup__image'
						></img>
					)}

					<div className='news-popup__info'>
						<h3 className='news-popup__title'>{title}</h3>
						<p className='news-popup__description'>{description}</p>
					</div>
				</div>
				<button
					onClick={() => {
						document.body.classList.toggle('news-popup__bg_opened');
						NewsPopupOpen(false);
					}}
					className='news-popup__exit'
				>
					<div></div>
					<div></div>
				</button>
			</div>
		</div>
	);
}

export default NewsPopup;
