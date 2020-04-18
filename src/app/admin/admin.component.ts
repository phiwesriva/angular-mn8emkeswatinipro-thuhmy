import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
form-group;

  constructor(
    private formBuilder: FormBuilder,
  ) {this.form-group = this.formBuilder.group({
      Title: '',
      Description: ''
    });
     }

  ngOnInit() {
    
  }
  onSubmit(customerData) {
    // Process checkout data here
        window.alert('Your Story is published ');
    this.form-group.reset();

    console.warn('Your order has been submitted', customerData);
  }
}