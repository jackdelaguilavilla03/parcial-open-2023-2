import {Component, Input} from '@angular/core';
import {Bundle} from "../../model/bundle";

@Component({
  selector: 'app-card-bundle',
  templateUrl: './card-bundle.component.html',
  styleUrls: ['./card-bundle.component.css']
})
export class CardBundleComponent {
  @Input() bundle: Bundle = new Bundle();
  constructor() {

  }
}
