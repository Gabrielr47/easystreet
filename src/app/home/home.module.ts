import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from '../search/search.component';
import { CryptoModalComponent } from '../crypto-modal/crypto-modal.component';

@NgModule({
  declarations: [HomeComponent, SearchComponent, CryptoModalComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
