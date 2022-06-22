import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToysComponent, KidsFoodComponent, SchoolComponent } from "./index";

@NgModule({
    declarations: [
        ToysComponent,
        KidsFoodComponent,
        SchoolComponent
    ],
    imports: [CommonModule]
})
export class KidsStuffModule {
}