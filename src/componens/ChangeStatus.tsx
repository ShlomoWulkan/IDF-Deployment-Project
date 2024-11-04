import { useContext } from "react";
import { DeploymentContext } from "../context/DeploymentContext";
import DeploymentContextType from "../types/deployment";

type ChangeStatusProps = {
    unitName: string
}

export default function ChangeStatus( { unitName }: ChangeStatusProps) {
  const deploymentContext = useContext(DeploymentContext);

  if (!deploymentContext) {
    throw new Error("ChangeStatus must be used within a DeploymentProvider");
  }

  const { setUnitStatus }: DeploymentContextType = deploymentContext;
  return (
    <button
      onClick={() => setUnitStatus(unitName, "Deployed")}>
        Change Status
        </button>
  )
}
