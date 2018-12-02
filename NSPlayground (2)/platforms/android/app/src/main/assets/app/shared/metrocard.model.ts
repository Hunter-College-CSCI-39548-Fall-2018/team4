export class Metrocard{
    id: string;
    metrocard_type: string;
    date_of_purchase: Date;
    expiration: Date;
    total_amount: number;

    constructor(options? : any){
        this.id = options ? options.id : this.id;
        this.metrocard_type = options ? options.metrocard_type : "";
        this.date_of_purchase = options ? options.date_of_purchase : "";
        this.expiration = options ? options.expiration: "";
        this.total_amount = options ? options.total_amount: '0';

    }

}