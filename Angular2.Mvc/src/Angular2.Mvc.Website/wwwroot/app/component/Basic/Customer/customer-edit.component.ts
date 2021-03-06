﻿import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Customer} from '../../../class/Customer';
import {CustomerService} from '../../../service/customer.service';
import {RestUriService} from '../../../service/resturi.service';
declare var swal: any;

@Component({
    selector: 'customer-edit',
    providers: [CustomerService, RestUriService],
    templateUrl: '/app/component/Basic/Customer/customer-edit.component.html',
    styleUrls: ['/app/component/Basic/Customer/customer-edit.component.css']
})

export class CustomerEditComponent implements OnInit {
    title: string;
    customer: Customer;
    selectedCustomer: Customer;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private custService: CustomerService) {
        this.title = "Customers - Edit";
        this.customer = new Customer();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let custIdValue = params['id'];
            
            let custId = +custIdValue; //Equales to parseInt
            console.log("query id = " + +custIdValue);

            this.custService.get(custId).then(
                data => {
                    console.log(data);
                    this.customer = data
                });
        });
        //var custIdValue = this.routeParam.get('id');
        //let custId = parseInt(custIdValue);

        
    }

    //Save!
    private save() {
        this.custService.update(this.customer).then(
            () => {
               swal(
                        'Success!',
                        'The data has been updated.',
                        'success'
                    );
            });
    }


    //Back to list
    private backToList() {
        this.router.navigate(['Basic/Customer/Index']);
    }


}

