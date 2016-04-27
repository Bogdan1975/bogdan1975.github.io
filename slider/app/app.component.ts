/**
 * Created by User on 29.03.2016.
 */
/**
 * Created by User on 24.02.2016.
 */
import {Component, Directive, View, Inject, ElementRef, Query, Dependency, QueryList} from 'angular2/core';

// import {Ng2SliderComponent} from "ng2-slider-component/ng2-slider.component.min";
import {Ng2SliderComponent} from "ng2-slider-component/ng2-slider.component";

import {TAB_DIRECTIVES} from "ng2-tabs/src/ng2-tabs";

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [Ng2SliderComponent, TAB_DIRECTIVES]
})
export class AppComponent {

    config: Object;

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
        start_el.innerText = event.startValue;
        end_el.innerText = event.endValue;
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