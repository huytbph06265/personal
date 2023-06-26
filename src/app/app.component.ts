import { Component } from '@angular/core';
import { GlobelStoreComponent } from './store/global.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  store$ = this.globalStoreComponent.select((state) => {
    console.log(1);
    
    console.log(state);
    return {
      isLoading: state.isLoading
    }
    
  });
  vm$ = this.globalStoreComponent.select((state) => {
    return {
      currentCatalog: state.isLoading,
    };
  });
  title = 'angular-learn';
  constructor(private globalStoreComponent: GlobelStoreComponent){
    console.log(this.globalStoreComponent);
    
    console.log(1);
    // this.globalStoreComponent.isLoading(false);
    
  }
 
}
