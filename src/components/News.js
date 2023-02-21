function News() {
	return (
		<section className='news'>
			<h3 className='news__title'>новости</h3>
			<div className='news__block'>
				<div className='new-big'>
					<div className='new-big__info'>
						<h4 className='new-big__title'>новости</h4>
						<p className='new-big__description'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor. Aenean massa. .
						</p>
						<button className='new-big__button'>Подробнее</button>
					</div>
					<div className='new-big__photo'></div>
				</div>
				<div className='new-small'>
					<div className='new-small__info'>
						<h2 className='new-small__title'>новости</h2>
						<p className='new-small__description'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor. Aenean massa.{' '}
						</p>
						<button className='new-small__button'>Подробнее</button>
					</div>
					<div className='new-small__photo'></div>
				</div>
				<div className='new-medium'>
					<div className='new-medium__info'>
						<h4 className='new-medium__title'>новости</h4>
						<p className='new-medium__description'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor. Aenean massa. Cum sociis natoque
							penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						</p>
						<button className='new-medium__button'>Подробнее</button>
					</div>
					<div className='new-medium__photo'></div>
				</div>
				<div className='new-medium_second'>
					<div className='new-medium__info_second'>
						<h4 className='new-medium__title_second'>новости</h4>
						<p className='new-medium__description_second'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor. Aenean massa.{' '}
						</p>
						<button className='new-medium__button_second'>Подробнее</button>
					</div>
					<div className='new-medium__photo_second'></div>
				</div>
			</div>
		</section>
	);
}

export default News;
