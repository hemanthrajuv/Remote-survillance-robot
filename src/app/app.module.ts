import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {WebcamModule} from 'ngx-webcam';
// import { WebCamModule } from 'ack-angular-webcam';
import { CameraComponent } from './camera/camera.component';
import { ControlComponent } from './control/control.component';
import { JoystickComponent } from './joystick/joystick.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

import 'hammerjs';
import 'hammer-timejs';
import { AcontrolComponent } from './acontrol/acontrol.component';
import { FtlComponent } from './ftl/ftl.component';
import { BossComponent } from './boss/boss.component';
import { ClientComponent } from './client/client.component';
import { HandGesturesComponent } from './hand-gestures/hand-gestures.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    ControlComponent,
    JoystickComponent,
    AcontrolComponent,
    FtlComponent,
    BossComponent,
    ClientComponent,
    HandGesturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
