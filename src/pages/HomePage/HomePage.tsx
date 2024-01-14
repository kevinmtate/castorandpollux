import Hero from '../../components/Hero/Hero';
import RecentReleases from '../../components/RecentReleases/RecentReleases';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import TourDates from '../../components/TourDates/TourDates';
import './HomePage.scss';

const HomePage = () => {
	return (
		<main>
			<Hero />

			<RecentReleases />

			<TourDates />

			<SignUpForm />

		</main>
	)
}

export default HomePage
