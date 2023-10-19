export interface Package {
    id:           number;
    name:         string;
    minWeight:    number;
    maxWeight:    number | null;
    priceFormula: string;
}
