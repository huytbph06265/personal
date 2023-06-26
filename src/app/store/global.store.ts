import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

const state = {
    isLoading: false as boolean
};


type State = typeof state
@Injectable()
export class GlobelStoreComponent extends ComponentStore<State>{
    constructor(){
        super(state)
    }

    get isLoading(): boolean{
        console.log(2);
        
        console.log(2);
        console.log(this.get().isLoading);
        
        return this.get().isLoading
    }

    set isLoading(value: boolean){
        this.patchState({isLoading: value});
    }

    // get isLoading(): boolean {
    //     return this.get().isLoading;
    //   }
    
    //   set isLoading(value: boolean) {
    //     this.patchState({ isLoading: value });
    //   }
    
}
