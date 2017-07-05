"use strict";

let $ = require('jquery');
let Handlebars = require('hbsfy/runtime');

let test = "what has Joe gotten into";

Handlebars.registerPartial ("nav", require('..templates/Partial/header.hbs'));

let testTemplate = require('../templates/test.hbs');
let solarSystemTemplate = require('../templates/solarSystem.hbs');

let solarSystemData = {
	planets: [
		{
			First: "Pat",
			Last: "Leon"
		},
		{
			type: "rocky",
			name: "Earth"
		},
		{
			type: "gas giant",
			name: "Saturn"
		}