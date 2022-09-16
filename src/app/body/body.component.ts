import { Component, OnInit } from '@angular/core';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { animate, style, transition, trigger } from '@angular/animations';

interface Bloglist {
  title: String;
  desc: String;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('slidein', [
      transition(':enter', [
        // when ngif has true
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        // when ngIf has false
        animate(250, style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class BodyComponent implements OnInit {
  [x: string]: any;
  blogs: any = [];

  constructor(private http: HttpClient, public api: ApiService) {}
  expanded: boolean = true;

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

  filteredData(event: any) {
    console.log(event.value);
    const condition = event.value === 'all' ? '' : `?${event.value}=true`;
    this.http
      .get(`http://localhost:3000/blog${condition}`)
      .subscribe((res: any) => {
        this.api.blogList = [...res];
      });
  }
}
