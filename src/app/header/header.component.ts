import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddBlogComponent } from '../add-blog/add-blog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  // addBlog = () => {
  //   this.router.navigate(['add-blog']);
  // };
  openDialog = () => {
    this.dialog.open(AddBlogComponent);
  };
  rejectedBlog = () => {};
  approvedBlog = () => {};
}
