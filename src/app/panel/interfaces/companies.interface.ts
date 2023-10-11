// Generated by https://quicktype.io

export interface Company {
    id:              number;
    name:            string;
    postalCodes:     number[];
    shippingCompany: ShipComp;
}

export enum ShipComp {
    Correos = "Correos",
    Seur = "Seur",
    Invent = "Invent",
}