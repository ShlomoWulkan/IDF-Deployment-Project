import { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
import DeploymentContextType from "../types/deployment";

export default function RefreshStatus() {

    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("RefreshStatus must be used within a DeploymentProvider");
    }

    const { units, setUnitStatus }: DeploymentContextType = deploymentContext;

    const RefreshAllStatus = () => {
    units.forEach((unit) => {
         console.log({unit})
        setUnitStatus(unit.name, "idle");
    })
}
  return (
    <button onClick={RefreshAllStatus}>Refresh</button>
  )
}
