import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ibanFormat'
})

export class IbanFormatPipe implements PipeTransform{
    transform(value: string): string {
        return value.replace(/(\d)(?=(\d{4})+$)/g, '$1 ');
    }
}