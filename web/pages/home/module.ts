import { NgModule } from '@angular/core';
import { HomeComponent } from './index';
import { SliderModule } from '../../components/slider/module';

@NgModule({
    imports: [SliderModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
}) export class HomeModule {}
