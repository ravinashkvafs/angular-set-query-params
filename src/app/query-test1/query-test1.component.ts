import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-test1',
  templateUrl: './query-test1.component.html',
  styleUrls: ['./query-test1.component.scss']
})
export class QueryTest1Component implements OnInit {

  constructor(private _actRoute: ActivatedRoute, private _router: Router, private _location: Location) { }

  ngOnInit(): void {
    this._actRoute.params.subscribe(param => {
      this.resp = param;
    });
    this._actRoute.queryParams.subscribe(param => {
      this.query_resp = param;
    });
  }

  resp: any = null;
  query_resp: any = null;
  hit_count: number = 0;

  assignRandomParam() {
    this._router.navigate([`/qtest/some_dummy_data${Math.random() * 1000}`], { replaceUrl: true, queryParams: this.query_resp });
  }

  assignRandomQueryParam() {
    this._router.navigate(
      [],
      {
        // relativeTo: this._actRoute,
        queryParams: { new_key: `random=>${Math.random() * 1000}` },
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }

}
