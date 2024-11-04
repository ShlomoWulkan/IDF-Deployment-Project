import { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
import DeploymentContextType from "../types/deployment";


export default function MissionCompleted() {

    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("MissionCompleted must be used within a DeploymentProvider");
    }

    const { units }: DeploymentContextType = deploymentContext;
    const allComplete = units.every(unit => unit.status === "Deployed");
  return (
    <div>
      {allComplete && <h2>All units deployed</h2>}
    </div>
  )
}
