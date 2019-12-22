import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { SliderComponent } from '../../components/slider';

@NgModule({
    imports: [],
    exports: [HomeComponent],
    declarations: [
        HomeComponent,
        SliderComponent
    ],
    providers: [],
}) export class HomeModule {}
