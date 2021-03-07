import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Job {
  name: string;
}

@Component({
  selector: 'jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  jobs: Job[] = [];

  ngOnInit() {
    console.log(environment);
    this.http.get(environment.apiUrl+"/job").subscribe((resp: any) => {
      this.jobs = resp;
    })
  }

}
