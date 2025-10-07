import { Component, Input } from '@angular/core';

@Component({
  selector: 'classement',
  imports: [],
  templateUrl: './classement.component.html',
  styleUrl: './classement.component.scss'
})
export class ClassementComponent {
  @Input() matchsAVenir: any[] = [];
}
