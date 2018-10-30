import { GhostService } from './../../shared/services/ghost.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.scss']
})
export class GhostComponent implements OnInit, OnDestroy {

  constructor(private ghostService: GhostService, private router: Router, private route: ActivatedRoute) { }
  sub: any;
  name: string;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['userName'];
    });

  }

  disableGhost() {
    this.ghostService.disableGhost();
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
   if (this.sub) {
     this.sub.unsubscribe();
   }
  }

}