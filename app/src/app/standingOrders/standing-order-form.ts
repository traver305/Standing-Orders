export interface IStandingOrderForm{
    name? : string; 
    accountNumber? : string;
    amount? : number | null;
    variableSymbol? : string;
    constantSymbol? : string;
    specificSymbol? : string;
    note? : string
    validFrom? : string;
    intervalId? : number | null;
    intervalSpecification? : number | null;
}