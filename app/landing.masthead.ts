import {Component} from 'angular2/core';
import {AppData} from './services/appdata.service'

@Component({
    selector: 'masthead',
    template: `
    	<div class="{{!enabled ? 'hide': ''}}">
			<div class="ka-landing-title"><h1>{{title}}</h1></div>
			<div id="ka-landing-masthead"><img src="{{image}}" alt="{{alt}}" /></div>
		</div>
    `
})
export class AppMasthead {
	private image: string
	private title: string
	private enabled: boolean
	private alt: string

	constructor(private appdata: AppData) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.masthead.enabled
		this.image = data.masthead.image
		this.title = data.masthead.title
		this.alt = data.masthead.alt
	}
}