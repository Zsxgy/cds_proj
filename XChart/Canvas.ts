import {Component, ViewEncapsulation} from "@angular/core";
import {SComponent} from "hide/SComponent";

import template from './canvas-template.html';
import previewTemplate from './preview-template.html';
import css from './button.css';
import * as d3 from "./d3.min";
//var d3 = require("./d3.min.js");
/**
 * Button component.
 */
@Component({
	selector: 'my-chart',
	template: template,
	styles: [css],
	encapsulation: ViewEncapsulation.None
})
export class XChart extends SComponent {
	// constructor(){
	// 	super();
	// }

	ngOnInit() {
		var dataset:Array<Number> = [1.2, 2.3, 0.9, 1.5, 3.3];
		var min = d3.min(dataset);
		var max = d3.max(dataset);
		var linear = d3.scaleLinear()
			.domain([min, max])
			.range([10, 300])

		var rectHeight = 25;   //每个矩形所占的像素高度(包括空白)


		var svg = d3.select("#myChart");
		svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x",20)
			.attr("y",function(d:any,i:Number){
				return (i+1) * rectHeight;
			})
			.attr("width",function(d:any){
				return linear(d);
			})
			.attr("height",rectHeight-2)
			.attr("fill","steelblue");
		//d3.select("#myChart").attr("height", 200).attr("width", 200).attr("fill","red");
	}

}

@Component({
	selector: 'preview',
	template: previewTemplate,
	encapsulation: ViewEncapsulation.None
})

export class Preview extends XChart {
}
