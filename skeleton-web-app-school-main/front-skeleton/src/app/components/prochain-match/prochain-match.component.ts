import { Component, Input } from '@angular/core';

@Component({
  selector: 'prochain-match',
  imports: [],
  templateUrl: './prochain-match.component.html',
  styleUrl: './prochain-match.component.scss'
})
export class ProchainMatchComponent {
  @Input() getFocusedClassement: any[] = [];
}
