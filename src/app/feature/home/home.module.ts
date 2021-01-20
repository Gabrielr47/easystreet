import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { SearchComponent } from '@app/feature/search/search.component';
import { CryptoModalComponent } from '@app/feature/crypto-modal/crypto-modal.component';
import { FavoriteComponent } from '@app/feature/favorite/favorite.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    CryptoModalComponent,
    FavoriteComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
