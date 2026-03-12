import FeatureToggle from "./FeatureToggle";
import Dark from "./images/Dark.png";
import Notifications from "./images/Notifications.png";
import Search from "./images/search.png";
import "./App.css";



function App() {
  return (
    <div className="container">
      
      
      


      <h1>Feature Toggle Demo</h1>

      <div className="feature">
      <img src={Dark} width="100"/>
      <FeatureToggle isEnabled={true} featureName="Dark Mode" />
      </div>
      <div className="feature">
      <img src={Notifications} width="100"/>
      <FeatureToggle isEnabled={false} featureName="Notifications" />
      </div>

      <div className="feature">
      <img src={Search} width="100"/>
     <FeatureToggle isEnabled={true} featureName="Search Feature" />
      </div>
    </div>
  
  );
}
export default App;