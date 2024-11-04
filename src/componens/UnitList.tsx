import { useContext } from "react"
import Unit from "../types/unit";
import { DeploymentContext } from "../context/DeploymentContext";
import DeploymentContextType from "../types/deployment";
import UnitStatus from "./UnitStatus";
import ChangeStatus from "./ChangeStatus";


export default function UnitList() {
    const deploymentContext = useContext(DeploymentContext);

    if (!deploymentContext) {
        throw new Error("UnitList must be used within a DeploymentProvider");
    }

    const { units }: DeploymentContextType = deploymentContext;
  return (
    <div>
      <h2>Units</h2>
      <ul>
        {units.map((unit: Unit) => (
            <li key={unit.name}>
                <UnitStatus unitName={unit.name} />
                <ChangeStatus unitName={unit.name} />
            </li>
        ))}
      </ul>
    </div>
  )
}
