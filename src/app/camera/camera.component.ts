import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  ngOnInit(){}
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 640},
    height: {ideal: 360}
  };
}
