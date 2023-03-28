import PreviewProgramms from './PreviewProgramms';
import idea from '../images/programms-idea.png';
import { useParams } from 'react-router-dom';
function Programms() {
	const params = useParams();
	return (
		<section className='programms'>
			<PreviewProgramms title={params.proj}></PreviewProgramms>
			<div className='programms__idea'>
				<h2 className='programms__idea-title'>идея проекта</h2>
				<div className='programms__idea-container'>
					<div className='programms__idea-description'>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
						Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
						aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
						imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
						mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
						semper nisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
						elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
						natoque penatibus et magnis dis parturient montes, nascetur
						ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
						pretium quis, sem. Nulla consequat massa quis enim. Donec pede
						justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
						justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
						dictum felis eu pede mollis pretium. Integer tincidunt. Cras
						dapibus. Vivamus elementum semper nisi.{' '}
					</div>
					<img className='programms__idea-img' src={idea} alt='idea'></img>
				</div>
			</div>
			<div className='programms__team'>
				<h2 className='programms__idea-title team__title'>Команда проекта</h2>
				<div className='person-cards'>
					<div className='person-card'>
						<div className='person-card__photo'></div>
						<div className='person-card__info'>
							<h4 className='person-card__title'>ИВАНОВА иВАНА иВАНОВНА</h4>
							<p className='person-card__subtitle'>
								должность опыт/квалификация/профилизация
							</p>
						</div>
					</div>
					<div className='person-card'>
						<div className='person-card__photo'></div>
						<div className='person-card__info'>
							<h4 className='person-card__title'>ИВАНОВА иВАНА иВАНОВНА</h4>
							<p className='person-card__subtitle'>
								должность опыт/квалификация/профилизация
							</p>
						</div>
					</div>
					<div className='person-card person-card_left'>
						<div className='person-card__photo'></div>
						<div className='person-card__info'>
							<h4 className='person-card__title'>ИВАНОВА иВАНА иВАНОВНА</h4>
							<p className='person-card__subtitle'>
								должность опыт/квалификация/профилизация
							</p>
						</div>
					</div>
					<div className='person-card person-card_left'>
						<div className='person-card__photo'></div>
						<div className='person-card__info'>
							<h4 className='person-card__title'>ИВАНОВА иВАНА иВАНОВНА</h4>
							<p className='person-card__subtitle'>
								должность опыт/квалификация/профилизация
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='programms__partners'>
				<h2 className='programms__idea-title partners__team'>Партнеры</h2>
				<div className='partners__block'>
					<div className='partners__image'>
						<div className='partners__info'>OOO</div>
					</div>
					<div className='partners__image'>
						<div className='partners__info'>OOO</div>
					</div>
					<div className='partners__image'>
						<div className='partners__info'>OOO</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Programms;
