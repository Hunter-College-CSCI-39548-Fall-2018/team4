import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { Metrocard } from "./metrocard.model";
import { getCurrentDebugContext } from "@angular/core/src/view/services";
import { BehaviorSubject, Observable} from "rxjs";



const editableProperties = [ 
    "metrocard_type",
    "date_of_purchase",
    "expiration",
    "total_amount"

];



@Injectable()
export class MetrocardService{

    private static cloneUpdateModel(metrocard: Metrocard): object {

        return editableProperties.reduce((prev, current) => (prev[current] = metrocard[current], prev ),
        {
            _id : metrocard.id
            
        });

    }

    allItems: BehaviorSubject<any> =  new BehaviorSubject([]);

    private allmetrocards: Array<Metrocard> = [];
    private metrocardcardstore = Kinvey.DataStore.collection<any>("Metrocard");

    loadMetrocard(){
        
        this.load().subscribe(((metrocardRaw: Array<any>) => {
            const allmetrocards = [];
            metrocardRaw.forEach((metrocardData: any) => {
                metrocardData.id = metrocardData._id;
                const metrocard = new Metrocard(metrocardData);

                allmetrocards.push(metrocard);
            });

            this.allItems.next(allmetrocards);
        }), (err) => {
            console.log(err);
        });
    }

    getMetrocardbyID(id : string): Observable<Metrocard> {
        if(!id){
            return;
        }

        const findQuery = this.metrocardcardstore.findById(id);

        return findQuery;
    }

    sync(): Promise<any>{
        return this.metrocardcardstore.sync();
    }

    update(metrocardModel: Metrocard): Promise<any>{
        return new Promise((resolve)=> {
            const updateModel = MetrocardService.cloneUpdateModel(metrocardModel);

            const promise = this.metrocardcardstore.save(updateModel).then(() => {
                this.sync();
            });
        });
    }

    private load(): Observable<Array<any>> {
        const sortByName = new Kinvey.Query();
        sortByName.ascending("metrocard_type");
        const findQuery = this.metrocardcardstore.find(sortByName);

        return findQuery;
    }



    // private MetrocardDataStore = Kinvey.DataStore.collection('metrocard');


    // addMetrocard(metrocard: Metrocard){
    //     const promise = this.MetrocardDataStore.save({
    //         metrocard_type: metrocard.metrocard_type,
    //         date_of_purchase: metrocard.date_of_purchase,
    //         expiration: metrocard.expiration,
    //         total_amount: metrocard.total_amount
    //     })
    //     .then(function(entity: {}){
    //         //..
    //     }).catch(function(error: Kinvey.BaseError){
    //         //..
    //     });
    // };



}
