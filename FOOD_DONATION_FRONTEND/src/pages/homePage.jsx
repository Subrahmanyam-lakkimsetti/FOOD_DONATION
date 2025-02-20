import AvailableFoodList from '../components/AvailableFood';

import HowItWorks from '../components/howItWorks';
import MainSection from '../components/mainSection';
import NavBar from '../components/nabar';

const HomePage = ({ User, handleLogout }) => {
  return (
    <>
      <NavBar User={User} handleLogout={handleLogout} />
      <MainSection User={User} />
      <HowItWorks />
      <h1>Hello</h1>
    </>
  );
};

export default HomePage;