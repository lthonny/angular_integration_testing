import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {FormsModule} from "@angular/forms";
import {PostsComponent} from "./posts/posts.component";
import {RoutingComponent} from './routing/routing.component';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { ColorDirective } from './directives/color.directive';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        PostsComponent,
        RoutingComponent,
        NavbarComponent,
        ColorDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
