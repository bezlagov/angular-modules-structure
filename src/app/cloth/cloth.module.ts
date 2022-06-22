import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenClothComponent, MenClothComponent, KidsClothComponent } from "./index";
import { KidsPantsComponent } from './kids-cloth/kids-pants/kids-pants.component';
import { KidsDressComponent } from './kids-cloth/kids-dress/kids-dress.component';
import { MensPantsComponent } from './men-cloth/mens-pants/mens-pants.component';
import { MensShirtComponent } from './men-cloth/mens-shirt/mens-shirt.component';
import { WomenSkirtComponent } from './women-cloth/women-skirt/women-skirt.component';
import { WomenPantsComponent } from './women-cloth/women-pants/women-pants.component';

@NgModule({
  declarations: [
    WomenClothComponent,
    MenClothComponent,
    KidsClothComponent,
    KidsPantsComponent,
    KidsDressComponent,
    MensPantsComponent,
    MensShirtComponent,
    WomenSkirtComponent,
    WomenPantsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClothModule { }
