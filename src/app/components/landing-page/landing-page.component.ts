import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  cardDetails: FormGroup;
  submitted = false;
  success = false;

  validation_messages = [
    { cardName: 'Card Name is required' },
    { cardNumber: 'Card Number is required' },
    { expiryMonth: 'Month is required' },
    { expiryYear: 'Year is required' },
    { cvc: 'CVC is required' },
  ];

  constructor(private fb: FormBuilder) {
    this.cardDetails = fb.group({
      cardName: ['', Validators.required],
      cardNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '[1-9][0-9]{3}[1-9][0-9]{3}[1-9][0-9]{3}[1-9][0-9]{3}'
          ),
        ]),
      ],
      expiryMonth: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern('0[1-9]|1[0-2]'),
        ]),
      ],
      expiryYear: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(2),
          Validators.pattern('[0-9][0-9]'),
        ]),
      ],
      cvc: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
        ]),
      ],
    });
  }

  ngOnInit(): void {
    console.log(this.validation_messages[1].cardNumber);
  }

  onSubmit(value: any) {
    this.submitted = true;
    if (this.cardDetails.invalid) {
      return;
    }
    this.success = true;

  }
}
