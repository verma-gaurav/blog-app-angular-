import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBlogComponent } from '../add-blog/add-blog.component';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog, public api: ApiService, private router : Router) {}

  ngOnInit(): void {
    this.api.getBlog();
  }
  // addBlog = () => {
  //   c
  // };
  openDialog = () => {
    this.dialog.open(AddBlogComponent);
     this.api.getBlog();
  };
  logout(){
    this.router.navigate(['login']);
  }
  approvedBlog(){}
  rejectedBlog(){}
}
