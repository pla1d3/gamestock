import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './index';
import { HeaderComponent } from '../components/header';
import { FooterComponent } from '../components/footer';

import { AppRoutingModule } from './routes';
import { HomeModule } from '../pages/home/module';
import { AboutModule } from '../pages/about/module';
import { CatalogModule } from '../pages/catalog/module';
import { ContactsModule } from '../pages/contacts/module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        AboutModule,
        CatalogModule,
        ContactsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
}) export class AppModule {}
