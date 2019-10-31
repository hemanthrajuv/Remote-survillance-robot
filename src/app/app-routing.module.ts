import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { CameraComponent } from './camera/camera.component';
import { BossComponent } from './boss/boss.component';
import { FtlComponent } from './ftl/ftl.component';
import { AcontrolComponent } from './acontrol/acontrol.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  {path: 'remoteControl', component: ControlComponent},
  {path: 'bossMode', component: BossComponent},
  {path: 'followTheLine', component: FtlComponent},
  {path: 'autonomousControl', component:AcontrolComponent},
  {path: 'video', component: CameraComponent},
  {path: 'client', component: ClientComponent},
  { path: '',
  redirectTo: '/remoteControl',
  pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
