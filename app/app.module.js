"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var absolute_example_component_1 = require("./layout-absolute/absolute-example.component");
var dock_example_component_1 = require("./layout-dock-stretch-false/dock-example.component");
var dock_example_strech_true_component_1 = require("./layout-dock-stretch-true/dock-example-strech-true.component");
var grid_example_component_1 = require("./layout-grid/grid-example.component");
var stack_example_component_1 = require("./layout-stack/stack-example.component");
var options_component_1 = require("./options/options.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            absolute_example_component_1.AbsoluteExample,
            dock_example_component_1.DockExampleComponent,
            dock_example_strech_true_component_1.DockExampleStrechTrueComponent,
            grid_example_component_1.GridExampleComponent,
            stack_example_component_1.StackExampleComponent,
            options_component_1.OptionsComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQywyRkFBK0U7QUFDL0UsNkZBQTBGO0FBQzFGLG9IQUErRztBQUMvRywrRUFBNEU7QUFDNUUsa0ZBQStFO0FBQy9FLGlFQUErRDtBQXVCL0QsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBMUIsSUFBMEI7QUFBYixTQUFTO0lBckJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osNENBQWU7WUFDZiw2Q0FBb0I7WUFDcEIsbUVBQThCO1lBQzlCLDZDQUFvQjtZQUNwQiwrQ0FBcUI7WUFDckIsb0NBQWdCO1NBQ25CO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsdUJBQWdCO1NBQ25CO0tBQ0osQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBYnNvbHV0ZUV4YW1wbGUgfSBmcm9tIFwiLi9sYXlvdXQtYWJzb2x1dGUvYWJzb2x1dGUtZXhhbXBsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERvY2tFeGFtcGxlQ29tcG9uZW50IH0gZnJvbSBcIi4vbGF5b3V0LWRvY2stc3RyZXRjaC1mYWxzZS9kb2NrLWV4YW1wbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEb2NrRXhhbXBsZVN0cmVjaFRydWVDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtZG9jay1zdHJldGNoLXRydWUvZG9jay1leGFtcGxlLXN0cmVjaC10cnVlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JpZEV4YW1wbGVDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtZ3JpZC9ncmlkLWV4YW1wbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdGFja0V4YW1wbGVDb21wb25lbnQgfSBmcm9tIFwiLi9sYXlvdXQtc3RhY2svc3RhY2stZXhhbXBsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE9wdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEFic29sdXRlRXhhbXBsZSxcbiAgICAgICAgRG9ja0V4YW1wbGVDb21wb25lbnQsXG4gICAgICAgIERvY2tFeGFtcGxlU3RyZWNoVHJ1ZUNvbXBvbmVudCxcbiAgICAgICAgR3JpZEV4YW1wbGVDb21wb25lbnQsXG4gICAgICAgIFN0YWNrRXhhbXBsZUNvbXBvbmVudCxcbiAgICAgICAgT3B0aW9uc0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=