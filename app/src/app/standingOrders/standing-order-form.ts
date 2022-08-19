export interface IStandingOrderForm{
    name? : string; 
    accountNumber? : string;
    amount? : number | null;
    variableSymbol? : string;
    constantSymbol? : string;
    specificSymbol? : string;
    note? : string
    validFrom? : Date | null;
    intervalId? : number | null;
    intervalSpecification? : number | null;
}