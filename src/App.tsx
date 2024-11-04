import MissionCompleted from "./componens/MissionCompleted";
import UnitList from "./componens/UnitList";
import { DeploymentProvider } from "./context/DeploymentContext";
import RefreshStatus from "./componens/RefreshStatus";


const App = () => {
   return (
     <DeploymentProvider> 
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
       <h1>Deployment</h1>
       <UnitList />
       <MissionCompleted />
       <RefreshStatus />
        </div> 
      </DeploymentProvider> 
      ); 
    }; 
      
export default App;