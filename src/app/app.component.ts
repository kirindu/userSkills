import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from './services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public formSubmitted = false;
  public results = [];
  public dataPeople: any;
  public someSkills = [];
  public dataBio: any;




  constructor(private fb: FormBuilder, private service: ServicesService, private router: Router) { }

  public searchForm = this.fb.group({
    name: ['', [Validators.required]],
  });


  async add() {

    this.formSubmitted = true;

    if (this.searchForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Required Field',
        text: 'Please write a valid name!'
      });
      return;
    } else {

      this.dataPeople = await this.service.searchPeopleByName(this.searchForm.get('name')?.value);

      this.results = this.dataPeople.results;

    }


  }

  async mostrarDetalle(userName: string) {

    //  this.dataBio = await this.service.getBioUser(userName);


    Swal.fire({
      icon: 'info',
      title: 'Pending!',
      text: 'I would need a little more time to complete the second part, I only had availability of a few hours!'
    });
    return;

  }


}
