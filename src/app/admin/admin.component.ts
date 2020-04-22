import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
formgroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {this.formgroup = this.formBuilder.group({
      Title: '',
      Description: ''
    });
     }

  ngOnInit() {
    
  }
  onSubmit(customerData) {
    // Process checkout data here
        window.alert('Your Story is published ');
    this.formgroup.reset();

    console.warn('Your order has been submitted', customerData);
  }
}