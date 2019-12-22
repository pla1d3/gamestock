import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { HomeModule } from '../pages/home/home.module';

import { AppComponent } from './index';
import { HomeComponent } from '../pages/home';
import { AboutComponent } from '../pages/about';
import { CatalogComponent } from '../pages/catalog';
import { ContactsComponent } from '../pages/contacts';

import { HeaderComponent } from '../components/header';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        CatalogComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
}) export class AppModule {}
