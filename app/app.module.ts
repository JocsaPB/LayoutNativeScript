import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { AbsoluteExample } from "./layout-absolute/absolute-example.component";
import { DockExampleComponent } from "./layout-dock-stretch-false/dock-example.component";
import { DockExampleStrechTrueComponent } from "./layout-dock-stretch-true/dock-example-strech-true.component";
import { GridExampleComponent } from "./layout-grid/grid-example.component";
import { StackExampleComponent } from "./layout-stack/stack-example.component";
import { OptionsComponent } from "./options/options.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AbsoluteExample,
        DockExampleComponent,
        DockExampleStrechTrueComponent,
        GridExampleComponent,
        StackExampleComponent,
        OptionsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
