﻿/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-create',
    providers: [],
    templateUrl: '/app/Basic/Product/product-create.component.html'
})

export class ProductCreateComponent implements OnInit {
    title: string;
    constructor(
        private router: Router) {
        this.title = "Products - Create";
    }

    ngOnInit() {

    }

    //Back to list (Show list)
    private backToList() {
        this.router.navigate(['Basic/Product/Index']);
    }
}
