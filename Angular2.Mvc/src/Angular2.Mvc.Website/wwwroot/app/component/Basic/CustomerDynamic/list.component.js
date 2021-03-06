System.register(["@angular/core", "../../../service/customer.service", "../../../service/resturi.service"], function (exports_1, context_1) {
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
    var core_1, customer_service_1, resturi_service_1, CustomerDynamicListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customer_service_1_1) {
                customer_service_1 = customer_service_1_1;
            },
            function (resturi_service_1_1) {
                resturi_service_1 = resturi_service_1_1;
            }
        ],
        execute: function () {
            CustomerDynamicListComponent = (function () {
                function CustomerDynamicListComponent(custService) {
                    this.custService = custService;
                }
                CustomerDynamicListComponent.prototype.ngOnInit = function () {
                    this.initCustomers();
                };
                CustomerDynamicListComponent.prototype.initCustomers = function () {
                    var _this = this;
                    this.custService.getAll().then(function (data) {
                        _this.customers = [];
                        if (!_this.inputValue) {
                            _this.customers = data;
                        }
                        else {
                            for (var i = 0; i < _this.inputValue; i++) {
                                _this.customers.push(data[i]);
                            }
                        }
                    });
                };
                return CustomerDynamicListComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Number)
            ], CustomerDynamicListComponent.prototype, "inputValue", void 0);
            CustomerDynamicListComponent = __decorate([
                core_1.Component({
                    selector: 'customerdynamic-list',
                    providers: [customer_service_1.CustomerService, resturi_service_1.RestUriService],
                    templateUrl: '/app/component/Basic/CustomerDynamic/list.component.html'
                }),
                __metadata("design:paramtypes", [customer_service_1.CustomerService])
            ], CustomerDynamicListComponent);
            exports_1("CustomerDynamicListComponent", CustomerDynamicListComponent);
        }
    };
});
//# sourceMappingURL=list.component.js.map