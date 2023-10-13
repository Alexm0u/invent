export interface Company {
    id:              number;
    name:            string;
    postalCodes:     number[];
}

export enum ShipComp {
    Correos = "Correos",
    Seur = "Seur",
    Invent = "Invent",
}