import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loading: Subject<boolean> = this.loadService.loading;

  constructor(private loadService: LoadingService) {}

  load() {
    this.loading = this.loadService.loading;
  }

}
