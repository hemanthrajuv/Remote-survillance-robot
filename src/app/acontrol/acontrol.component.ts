import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-acontrol',
  templateUrl: './acontrol.component.html',
  styleUrls: ['./acontrol.component.css']
})
export class AcontrolComponent implements OnInit {
  dbUrl = environment.dbUrl;
  constructor(private http: HttpClient) { 
    this.http.post(this.dbUrl+'/others',{"battery":100,"mode":'ad'}).subscribe(res=>{

    })
  }

  ngOnInit() {
  }

}
