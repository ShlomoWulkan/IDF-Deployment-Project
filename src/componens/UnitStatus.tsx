import { useContext } from "react"
import { DeploymentContext } from "../context/DeploymentContext";
import DeploymentContextType from "../types/deployment";

type UnitStatusProps = {
     unitName: string; 
    };


export default function UnitStatus({ unitName }: UnitStatusProps) {
  const deploymentContext = useContext(DeploymentContext);

  if (!deploymentContext) {
    throw new Error("UnitStatus must be used within a DeploymentProvider");
  }

  const { units }: DeploymentContextType = deploymentContext;
  return (
    <div>
      <p>{unitName}: {units.find((unit) => unit.name === unitName)?.status}</p>
    </div>
  )
}
