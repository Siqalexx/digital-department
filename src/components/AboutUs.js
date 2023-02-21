import video from '../images/video.mp4';
import photo from '../images/video_photo.png';
function AboutUs() {
	return (
		<section className='aboutUs'>
			<div className='aboutUs__video-container'>
				<video poster={photo} controls className='aboutUs__video'>
					<source src={video} type='video/mp4'></source>
					Тег video не поддерживается вашим браузером.
				</video>
			</div>
			<div className='aboutUs__ellips_big'></div>
			<div className='aboutUs__ellips_medium'></div>
			<div className='aboutUs__ellips_small'></div>
			<div className='aboutUs__info'>
				<h2 className='aboutUs__title'>о нас</h2>
				<p className='aboutUs__description'>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
					commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
					et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
					felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
					consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
					nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
					venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
					Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
					vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
					vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
					quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
					laoreet. Quisque rutrum. Aenean imperdiet.
				</p>
				<button className='aboutUs__button'>Подробнее</button>
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
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{' '}
					</p>
				</div>
				<div className='aboutUs__cell'>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>о нас</h3>
					<p className='aboutUs__cell-description'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{' '}
					</p>
				</div>

				<div className='aboutUs__cell'>
					<div className='aboutUs__cell-iconbg'>
						<div className='aboutUs__cell-icon'></div>
					</div>
					<h3 className='aboutUs__cell-title'>о нас</h3>
					<p className='aboutUs__cell-description'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{' '}
					</p>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
