System.register(['angular2/core', "ng2-slider-component/ng2-slider.component", "ng2-tabs/src/ng2-tabs"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_slider_component_1, ng2_tabs_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_slider_component_1_1) {
                ng2_slider_component_1 = ng2_slider_component_1_1;
            },
            function (ng2_tabs_1_1) {
                ng2_tabs_1 = ng2_tabs_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.onInit = function () {
                };
                AppComponent.prototype.plainValueChanged = function (event, container) {
                    var el = this.getElement(container);
                    el.innerText = event.startValue;
                };
                AppComponent.prototype.rangeValueChanged = function (event, start, end) {
                    var start_el = this.getElement(start);
                    var end_el = this.getElement(end);
                    start_el.innerText = event.startValue;
                    end_el.innerText = event.endValue;
                };
                AppComponent.prototype.getElement = function (data) {
                    if (typeof (data) == 'string') {
                        return document.getElementById(data);
                    }
                    if (typeof (data) == 'object' && data instanceof Element) {
                        return data;
                    }
                    return null;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        //template: '<ng2-grid gridConfig=\'{"a":56}\'>Loading...</ng2-grid>',
                        templateUrl: 'app/app.component.html',
                        directives: [ng2_slider_component_1.Ng2SliderComponent, ng2_tabs_1.TAB_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map