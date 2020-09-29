import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputErrorStateMatcher } from '../../helper/error-state-matcher.helper';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() fGroupName: FormGroup;
  @Input() label: string;
  @Input() controlName: string;
  @Input() hint: string;
  @Input() isRequired: boolean;
  @Input() isEmail: boolean;
  @Input() hasMinLength = false;
  @Input() minLengthValue: number;
  @Input() hasMaxLength = false;
  @Input() maxLengthValue: number;
  @Input() placeholder: string = '';

  errorMatcher = new InputErrorStateMatcher();

  constructor() {}

  ngOnInit(): void {}
}
