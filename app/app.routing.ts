import { DockExampleStrechTrueComponent } from './layout-dock-stretch-true/dock-example-strech-true.component';
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { AbsoluteExample } from './layout-absolute/absolute-example.component';
import { DockExampleComponent } from './layout-dock-stretch-false/dock-example.component';

const routes: Routes = [
    { path: "", redirectTo: "/dockLayout", pathMatch: "full" },
    { path: "absoluteLayout", component: AbsoluteExample },
    {path: "dockLayout", component: DockExampleComponent},
    {path: "dockLayoutStrech", component: DockExampleStrechTrueComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }