System.register(['angular2/core', 'angular2/router', './Customer.Service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Customer_Service_1;
    var CustomerEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Customer_Service_1_1) {
                Customer_Service_1 = Customer_Service_1_1;
            }],
        execute: function() {
            CustomerEditComponent = (function () {
                function CustomerEditComponent(custService) {
                    this.custService = custService;
                    this.title = "Customers - Edit";
                }
                CustomerEditComponent.prototype.ngOnInit = function () {
                };
                //Back to list (Show list)
                CustomerEditComponent.prototype.backToList = function () {
                };
                CustomerEditComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-edit',
                        providers: [router_1.ROUTER_DIRECTIVES, Customer_Service_1.CustomerService],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: '/app/Basic/Customer/customer.edit.component.html',
                        styleUrls: ['/app/Basic/Customer/customer.edit.component.css']
                    }), 
                    __metadata('design:paramtypes', [Customer_Service_1.CustomerService])
                ], CustomerEditComponent);
                return CustomerEditComponent;
            }());
            exports_1("CustomerEditComponent", CustomerEditComponent);
        }
    }
});
//# sourceMappingURL=customer.edit.component.js.map