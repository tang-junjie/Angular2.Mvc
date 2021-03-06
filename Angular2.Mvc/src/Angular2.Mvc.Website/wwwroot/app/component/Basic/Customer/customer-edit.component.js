System.register(["@angular/core", "@angular/router", "../../../class/Customer", "../../../service/customer.service", "../../../service/resturi.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, Customer_1, customer_service_1, resturi_service_1, CustomerEditComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }
        ],
        execute: function () {
            CustomerEditComponent = (function () {
                function CustomerEditComponent(router, route, custService) {
                    this.router = router;
                    this.route = route;
                    this.custService = custService;
                    this.title = "Customers - Edit";
                    this.customer = new Customer_1.Customer();
                }
                CustomerEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var custIdValue = params['id'];
                        var custId = +custIdValue; //Equales to parseInt
                        console.log("query id = " + +custIdValue);
                        _this.custService.get(custId).then(function (data) {
                            console.log(data);
                            _this.customer = data;
                        });
                    });
                    //var custIdValue = this.routeParam.get('id');
                    //let custId = parseInt(custIdValue);
                };
                //Save!
                CustomerEditComponent.prototype.save = function () {
                    this.custService.update(this.customer).then(function () {
                        swal('Success!', 'The data has been updated.', 'success');
                    });
                };
                //Back to list
                CustomerEditComponent.prototype.backToList = function () {
                    this.router.navigate(['Basic/Customer/Index']);
                };
                return CustomerEditComponent;
            }());
            CustomerEditComponent = __decorate([
                core_1.Component({
                    selector: 'customer-edit',
                    providers: [customer_service_1.CustomerService, resturi_service_1.RestUriService],
                    templateUrl: '/app/component/Basic/Customer/customer-edit.component.html',
                    styleUrls: ['/app/component/Basic/Customer/customer-edit.component.css']
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    router_1.ActivatedRoute,
                    customer_service_1.CustomerService])
            ], CustomerEditComponent);
            exports_1("CustomerEditComponent", CustomerEditComponent);
        }
    };
});
//# sourceMappingURL=customer-edit.component.js.map