import { DockExampleStrechTrueComponent } from './layout-dock-stretch-true/dock-example-strech-true.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AbsoluteExample } from './layout-absolute/absolute-example.component';
import { DockExampleComponent } from './layout-dock-stretch-false/dock-example.component';
import { GridExampleComponent } from "./layout-grid/grid-example.component";
import { StackExampleComponent } from "./layout-stack/stack-example.component";
import { OptionsComponent } from "./options/options.component";

const routes: Routes = [
    { path: "", redirectTo: "/option", pathMatch: "full" },
    { path: "option", component: OptionsComponent},
    { path: "absoluteLayout", component: AbsoluteExample },
    { path: "dockLayout", component: DockExampleComponent},
    { path: "dockLayoutStrech", component: DockExampleStrechTrueComponent},
    { path: "gridLayout", component: GridExampleComponent},
    { path: "stackLayout", component: StackExampleComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }