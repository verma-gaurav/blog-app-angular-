import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  blogForm!: FormGroup;
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      title: [''],
      desc: [''],
    });
  }
  closeDialog = () => {
    this.dialog.closeAll();
  };

  submitBlog() {
    this.http
      .post<any>('http://localhost:3000/blog', {
        isApproved: false,
        isRejected: false,
        ...this.blogForm.value,
      })
      .subscribe((res) => {
        alert('Blog Submitted Successfully !!');
        this.api.getBlog();
        this.blogForm.reset();
      });
  }
}
