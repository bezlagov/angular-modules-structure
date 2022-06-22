import { WomenClothComponent, MenClothComponent, KidsClothComponent } from "./index";

export const route = [
    { path: '', component: KidsClothComponent },
    { path: 'kids-cloth', component: KidsClothComponent },
    { path: 'men-cloth', component: MenClothComponent },
    { path: 'women-cloth', component: WomenClothComponent },
];