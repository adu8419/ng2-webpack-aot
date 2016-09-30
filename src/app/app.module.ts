import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppRoutings} from "./app.routing";
import {AppComponent} from "./app.component";

import {HomeComponent} from "./home/component.home";
import {HomeChildComponent} from "./home/component.child-home";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutings
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeChildComponent
    ],
    bootstrap: [
        AppComponent 
    ]
})
export class AppModule { 
}