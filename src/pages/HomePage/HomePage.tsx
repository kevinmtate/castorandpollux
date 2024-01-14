import Hero from '../../components/Hero/Hero';
import RecentReleases from '../../components/RecentReleases/RecentReleases';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import TourDates from '../../components/TourDates/TourDates';
import './HomePage.scss';

const HomePage = () => {
   return (
      <div>
         <Hero />

         <RecentReleases />

         <TourDates />

         <SignUpForm />

      </div>
   )
}

export default HomePage
