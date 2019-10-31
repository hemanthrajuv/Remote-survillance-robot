import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface respI {
  "ledStatus": boolean;
  "movement": string;
  "servoAngle": number;
  "speed": number;
}

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})

export class ControlComponent implements OnInit {
  dbUrl = environment.dbUrl;
  prevdir = 'none';
  resp: respI;
  constructor(private http: HttpClient) {
    this.http.get(this.dbUrl+'/control').subscribe((res: respI)=> {
      // console.log(res);
      this.resp = res;
      this.resp.movement = 'stop';
      this.http.post(this.dbUrl+'/control', this.resp).subscribe(res=>{
        // console.log(res);
      });
    })
    this.http.post(this.dbUrl+'/others',{"battery":100,"mode":'rc'}).subscribe(res=>{

    })
   }

  ngOnInit() {
  }

  dirChange(dir: string){
    if(this.prevdir !== dir) {
      // console.log(dir);
    this.resp.movement = dir;
    this.http.post(this.dbUrl+'/control', this.resp).subscribe(res=>{
      console.log(res);
    });
    this.prevdir = dir;
    }
  }

}
