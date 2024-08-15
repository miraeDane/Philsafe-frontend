import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Only numbers
      nameOnCard: ['', Validators.required],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]], // MM/YY format
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]], // 3 digits
      billingAddress: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d+$/)]] // Only numbers
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.http.post('http://localhost:5000/api/payments', this.paymentForm.value)
        .subscribe(response => {
          console.log('Payment successful', response);
        }, error => {
          console.log('Error saving payment', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper method to check if a field is invalid
  isFieldInvalid(field: string) {
    return this.paymentForm.get(field)?.invalid && this.paymentForm.get(field)?.touched;
  }
}