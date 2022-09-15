import { Component, OnInit } from '@angular/core';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

interface Bloglist {
  title: String;
  desc: String;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  [x: string]: any;
  blogs: any = [];

  constructor(private http: HttpClient, public api: ApiService) {}

  ngOnInit(): void {
    this.api.getBlog();
  }
  approved(item: any) {
    item.isApproved = true;
    item.isRejected = false;
    this.http
      .put(`http://localhost:3000/blog/${item.id}`, item)
      .subscribe((res) => {
        alert('approved');
        this.api.getBlog();
      });
  }
  rejected(item: any) {
    item.isRejected = true;
    item.isApproved = false;
    this.http
      .put(`http://localhost:3000/blog/${item.id}`, item)
      .subscribe((res) => {
        alert('Rejected');
        this.api.getBlog();
      });

  }

  checkedrejected(){
    
  }
  
  checkedapproved(){
    
  }

}
