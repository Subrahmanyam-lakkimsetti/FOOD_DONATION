import HowItWorks from '../components/howItWorks';
import MainSection from '../components/mainSection';
import NavBar from '../components/nabar';
import './howItWorks.css';
const HomePage = ({ User, handleLogout }) => {
  return (
    <>
      <NavBar User={User} handleLogout={handleLogout} />
      <MainSection />
      <HowItWorks />
      <h1>Hello</h1>
    </>
  );
};

export default HomePage;
