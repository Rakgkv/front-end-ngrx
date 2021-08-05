export interface Country {
            name: string,
            capital:string,
            area:number,
            language:string,
            flag:string,
            borders: Array<String>,
            alpha3Code?:string,
            topLevelDomain: string[];
            alpha2Code: string;
            callingCodes: string[];
            altSpellings: string[];
            region: string;
            subregion: string;
            population: number;
            latlng: number[];
            demonym: string;
            gini: any;
            timezones: string[];
            nativeName: string;
            numericCode: string;
            currencies: Currency[];
            languages: string[];
            translations: object;
            regionalBlocs: string[];
            cioc: string;  
} 

export interface Currency {
    code:string,
    symbol:string
}