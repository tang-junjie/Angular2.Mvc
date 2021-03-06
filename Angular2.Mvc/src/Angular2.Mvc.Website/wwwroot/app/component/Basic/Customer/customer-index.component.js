System.register(["@angular/core", "@angular/router", "../../../service/customer.service", "../../../service/html.service", "../../../service/resturi.service", "../../blockUI/blockUI.service"], function (exports_1, context_1) {
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
    var core_1, router_1, customer_service_1, html_service_1, resturi_service_1, blockUI_service_1, CustomerIndexComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (html_service_1_1) {
                html_service_1 = html_service_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            },
            function (blockUI_service_1_1) {
                blockUI_service_1 = blockUI_service_1_1;
            }
        ],
        execute: function () {
            CustomerIndexComponent = (function () {
                function CustomerIndexComponent(router, viewContainerRef, blockUI, custService, htmlService) {
                    this.router = router;
                    this.viewContainerRef = viewContainerRef;
                    this.blockUI = blockUI;
                    this.custService = custService;
                    this.htmlService = htmlService;
                    this.blockUI.vRef = this.viewContainerRef;
                    this.title = "Customers";
                    this.htmlStr = "<script>alert('Testing!');</script>";
                    var testStr = "XXX%20XXXX%20&#39134;&#24605;&#21345;&#23572;&#26368;&#26032;MCU";
                    var decodedHtml = htmlService.decodeHtml(testStr);
                    var sanitizedHtml = htmlService.sanitizeHtml(this.htmlStr);
                    JL("Angular").debug('decodedHtml = ' + decodedHtml);
                    JL("Angular").debug('sanitizedHtml = ' + sanitizedHtml);
                }
                CustomerIndexComponent.prototype.ngOnInit = function () {
                    this.blockUI.start();
                    this.initCustomers();
                };
                CustomerIndexComponent.prototype.initCustomers = function () {
                    var _this = this;
                    this.custService.getAll().then(function (data) {
                        //for (let i = 0; i < data.length; i++) {
                        //    console.log(data[i].Name);
                        //}
                        _this.customers = data;
                        _this.blockUI.stop();
                    }); //非同步 & delay for 2 sec
                };
                //Search when [Enter] is keyup
                CustomerIndexComponent.prototype.search = function (searchKeyword) {
                    var _this = this;
                    if (searchKeyword.length > 0) {
                        var filteredCusts = this.custService.search(searchKeyword);
                        this.customers = filteredCusts;
                    }
                    else {
                        this.custService.getAll().then(function (data) { return _this.customers = data; }); //非同步 & delay for 2 sec
                    }
                };
                //Go to create page
                CustomerIndexComponent.prototype.goToCreate = function () {
                    this.router.navigate(['Basic/Customer/Create']);
                };
                //Get to edit page
                CustomerIndexComponent.prototype.editCustomer = function (item) {
                    this.router.navigate(['Basic/Customer/Edit', item.Id]);
                };
                //Remove customer
                CustomerIndexComponent.prototype.deleteCustomer = function (item) {
                    var customers = this.customers;
                    var service = this.custService;
                    swal({
                        title: 'Are you sure?',
                        text: "The customer : " + item.Name + ", will be deleted!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function () {
                        service.remove(item).then(function () {
                            //Remove item in Front-end
                            var index = customers.indexOf(item);
                            customers.splice(index, 1);
                        });
                    });
                };
                //Show details of the customer
                CustomerIndexComponent.prototype.showDetail = function (cust) {
                    this.selectedCustomer = cust;
                };
                //Back to list (Show list)
                CustomerIndexComponent.prototype.backToList = function () {
                    this.selectedCustomer = null;
                };
                //Set the emit event data from chile component to local variable
                CustomerIndexComponent.prototype.setSysEvents = function (data) {
                    console.log(data);
                    this.events = data;
                };
                return CustomerIndexComponent;
            }());
            CustomerIndexComponent = __decorate([
                core_1.Pipe({
                    name: 'wrapEvent',
                    pure: true //Default is true
                }),
                core_1.Component({
                    selector: 'customer-index',
                    providers: [customer_service_1.CustomerService, html_service_1.HtmlService, resturi_service_1.RestUriService, blockUI_service_1.BlockUIService],
                    //providers: [ROUTER_PROVIDERS, CustomerService],
                    templateUrl: '/app/component/Basic/Customer/customer-index.component.html',
                    styleUrls: ['/app/component/Basic/Customer/customer-index.component.css']
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    core_1.ViewContainerRef,
                    blockUI_service_1.BlockUIService,
                    customer_service_1.CustomerService,
                    html_service_1.HtmlService])
            ], CustomerIndexComponent);
            exports_1("CustomerIndexComponent", CustomerIndexComponent);
        }
    };
});
//# sourceMappingURL=customer-index.component.js.map