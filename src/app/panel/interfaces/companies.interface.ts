export interface Company {
    id:              number;
    name:            string;
    direction:       string;
    phone:           string;
    postalCodes:     string[];
}

export enum ShipComp {
    Correos = "Correos",
    Seur = "Seur",
    Invent = "Invent",
}