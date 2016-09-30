import { Component } from '@angular/core'
import { Router, CanActivateChild } from '@angular/router'

@Component({
    selector: 'my-app',
    template: `
        <h2> {{title}} </h2>

        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = "My Angular2 Webpack Aot Rollup App!!";

}