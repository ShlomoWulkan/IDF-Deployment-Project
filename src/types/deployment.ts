import Unit from "./unit"

type DeploymentContextType = {
    units: Unit[],
    setUnitStatus: (unit: string, status: string) => void
}

export default DeploymentContextType