import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { FreeComponent } from './free/free.component';
import { SubscComponent } from './subsc/subsc.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AdvertComponent } from './advert/advert.component';
import { PodcastComponent } from './podcast/podcast.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThanksComponent } from './thanks/thanks.component';
import { CommComponent } from './comm/comm.component';
import { ResiComponent } from './resi/resi.component';
import { InterComponent } from './inter/inter.component';
import { LandlComponent } from './landl/landl.component';
import { ReadtmComponent } from './readtm/readtm.component';
import { ReadcharComponent } from './readchar/readchar.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RatesComponent } from './rates/rates.component';
import { SectionsComponent } from './sections/sections.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'free', component: FreeComponent },
      { path: 'subsc', component: SubscComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'news', component: NewsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'podcast', component: PodcastComponent },
      { path: 'advert', component: AdvertComponent },
      { path: 'about', component: AboutComponent },
      { path: 'thanks', component: ThanksComponent },
      { path: 'comm', component: CommComponent },
      { path: 'resi', component: ResiComponent },
      { path: 'inter', component: InterComponent },
      { path: 'landl', component: LandlComponent },
      { path: 'readtm', component: ReadtmComponent },
      { path: 'readchar', component: ReadcharComponent },
      { path: 'benefits', component: BenefitsComponent },
      { path: 'rates', component: RatesComponent },
      { path: 'sections', component: SectionsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    FreeComponent,
    SubscComponent,
    ShippingComponent,
    NewsComponent,
    ContactComponent,
    AdvertComponent,
    PodcastComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ThanksComponent,
    CommComponent,
    ResiComponent,
    InterComponent,
    LandlComponent,
    ReadtmComponent,
    ReadcharComponent,
    BenefitsComponent,
    RatesComponent,
    SectionsComponent,
    
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/