import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/component.home";

export const ROUTE_CONFIG: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];


export const AppRoutings = RouterModule.forRoot(ROUTE_CONFIG);

