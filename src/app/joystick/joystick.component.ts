import { AfterViewInit, Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as createjs from 'createjs-module';
// import * as Hammer from 'angular-hammer';
import * as $ from 'jquery';
@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements AfterViewInit {
  @ViewChild('joystick', {static: false})
  joystick: ElementRef<HTMLCanvasElement>;
  @Output() diro = new EventEmitter<string>();
  xVal: number;
  yVal: number;
  dir = 'none';
  xCenter: number;
  yCenter: number;
  stage: any; 
  psp: any;
  vertical: any;
  horizontal: any;
  
  constructor() { 
  }
  ngAfterViewInit() {
  this.xCenter = 150;
  this.yCenter = 150;
  this.stage = new createjs.Stage('joystick');

  this.psp = new createjs.Shape();
  this.psp.graphics.beginFill('black').drawCircle(this.xCenter, this.yCenter, 50);

  this.psp.alpha = 0.5;

  this.stage.addChild(this.psp);
  createjs.Ticker.framerate = 60;
  createjs.Ticker.addEventListener('tick', this.stage);
  this.stage.update();

}
onPanend($event){
      this.psp.alpha = 0.5;
    createjs.Tween.get(this.psp).to({x:this.xCenter,y:this.yCenter},750,createjs.Ease.elasticOut);
    this.dir = 'stop';
    this.diro.emit(this.dir);
}
onPanStart($event){
    this.xCenter = this.psp.x;
    this.yCenter = this.psp.y;
    this.psp.alpha = 0.75;
    this.stage.update();
}

onPanMove($event){
  let coords : {
    x: any;
    y: any;
  };
  let distance = Math.min($event.distance, 100);  
  var rads = ($event.angle * Math.PI) / 180.0;
  coords={
    "x": distance * Math.cos(rads),
    "y": distance * Math.sin(rads)
  }
  
  this.psp.x = coords.x;
  this.psp.y = coords.y;
  let x = coords.x;
  let y = coords.y;
  this.xVal = x;
  this.yVal = (-1 * y);
  if(x>10&&(y>-15&&y<15))
    this.dir = 'right';
  else if(x<-10&&(y>-15&&y<15))
    this.dir = 'left';
  else if(y>10&&(x>-15&&x<15))
    this.dir = 'down';
  else if(y<-10&&(x>-15&&x<15))
    this.dir = 'up';
  this.diro.emit(this.dir);
  this.psp.alpha = 0.75;
  
  this.stage.update();
}

}
