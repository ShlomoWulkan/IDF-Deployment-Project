import { createContext, useState } from "react";
import DeploymentContextType from "../types/deployment";
import Unit from "../types/unit";


const DeploymentContext = createContext<DeploymentContextType | undefined>(undefined);


const DeploymentProvider = ({ children }: { children: React.ReactNode }) => {

    const [units, setUnits] = useState<Unit[]>([
        {
            name: "Golani",
            status: "idle"
        },
        {
            name: "Paratroopers",
            status: "idle"
        },
        {
            name: "Givati",
            status: "idle"
        },
        {
            name: "Shayetet 13",
            status: "idle"
        },
        {
            name: "Artillerymen",
            status: "idle"
        }
    ]);

    const setUnitStatus = (unit: string, status: string) => {
        setUnits(
            units.map((u) => {
                if (u.name === unit) {
                    return { ...u, status };
                }
                return u;
            })
        )
    };

    return ( 
        <DeploymentContext.Provider value={{ units, setUnitStatus }}>
             {children} 
        </DeploymentContext.Provider> 
        );
    };


export { DeploymentContext, DeploymentProvider }