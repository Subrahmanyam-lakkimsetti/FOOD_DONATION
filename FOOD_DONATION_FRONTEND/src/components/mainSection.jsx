import { Link } from 'react-router';
import './mainSection.css';
const MainSection = () => {
  return (
    <>
      <div className="main">
        <img src="../public/main-image.jpg" className="background-image" />
        <div className="main-details">
          <h1 className="text">
            Connection food reducing waste, Feeding Hope, Sustainably
          </h1>
          <div className="buttons">
            <Link to="/donation">
              <button className="button">Donate</button>
            </Link>
            <Link to="/request">
              <button className="button">Recieve</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
