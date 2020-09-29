import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { User } from 'src/app/shared/model/user.model';
import { InputErrorStateMatcher } from 'src/app/shared/helper/error-state-matcher.helper';
import { UserService } from './user.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  users: User[] = [];
  showForm = false;
  errorMatcher = new InputErrorStateMatcher();
  departments: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.prepareForm();
    this.loadDepartments();
  }

  prepareForm(): void {
    this.userForm = this.formBuilder.group({
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
      ],
      middleName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
      ],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
    });
  }

  loadDepartments(): void {
    this.userService.getDepartments().subscribe(
      (res) => {
        this.departments = res;
      },
      (err) => {}
    );
  }

  toggleUserForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.userForm.reset();
    }
  }
}
