/**
 * Created by Bogdan1975 on 29.03.2016.
 */

declare var __moduleName: string, module:any;

import {Component} from '@angular/core';

import {Ng2SliderComponent} from "ng2-slider-component/ng2-slider.component";
import {Ng2StyledDirective} from 'ng2-styled-directive/ng2-styled.directive';
import {Ng2ShowCodeComponent} from 'ng2-show-code/ng2-show-code.component';

import {TAB_DIRECTIVES} from "ng2-tabs";

@Component({
    selector: 'app',
    moduleId: __moduleName,
    templateUrl: 'app.component.html',
    directives: [Ng2SliderComponent, TAB_DIRECTIVES, Ng2ShowCodeComponent, Ng2StyledDirective]
})
export class AppComponent {

    config: Object;
    
    showCodeSkinDirectory = document.baseURI + '../node_modules/highlightjs/styles';

    constructor () {
    }

    onInit() {
    }

    plainValueChanged(event, container:any) {
        var el = this.getElement(container);
        el.innerText = event.startValue;
    }

    rangeValueChanged(event, start:any, end:any) {
        var start_el = this.getElement(start);
        var end_el = this.getElement(end);
        if (start_el instanceof Element) start_el.innerText = event.startValue;
        if (end_el instanceof Element) end_el.innerText = event.endValue;
    }

    getElement(data){
        if (typeof(data)=='string') {
            return document.getElementById(data);
        }
        if (typeof(data)=='object' && data instanceof Element) {
            return data;
        }
        return null;
    }

}