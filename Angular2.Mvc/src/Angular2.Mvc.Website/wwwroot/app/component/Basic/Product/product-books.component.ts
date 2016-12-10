﻿/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../class/Product';
import {ProductService} from './product.service';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-books',
    providers: [ProductService],
    templateUrl: '/app/component/Basic/Product/product-books.component.html'
    //styleUrls: ['/app/component/Basic/Product/Product-index.component.css']
})

export class ProductBooksComponent implements OnInit {
    private title: string;
    private books: Product[];
    constructor(
        private router: Router,
        private productService: ProductService
    ) {
        this.title = "Books";
        this.productService = productService;
        JL("Angular2").debug("Come to BooksComponent!");
    }

    ngOnInit() {
        this.initBooks();
    }

    //Initialize books
    private initBooks() {
        this.productService.getBooks().then(data => {
            this.books = data;
        })
    }

    //Go to edit page
    private edit(prod: Product) {
        this.router.navigate(['Basic/Product/Edit', prod.Id]);
    }

    //Remove the product
    private remove(prod: Product) {

        let service = this.productService;
        let books = this.books;

        swal({
            title: 'Are you sure?',
            text: "The product : " + prod.Title + ", will be deleted!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function () {

            service.remove(prod).then(
                () => {
                    //Remove item in Front-end
                    var index = books.indexOf(prod);
                    books.splice(index, 1);
                });

            })
    }

}
