import Data from './data.js';
import Renderer from './renderer.js';
import Controller from './controller.js'; 

let data = new Data()
let renderer = new Renderer
let controller = new Controller(data,renderer)


controller.onLoad()
controller.compilePostCreature()