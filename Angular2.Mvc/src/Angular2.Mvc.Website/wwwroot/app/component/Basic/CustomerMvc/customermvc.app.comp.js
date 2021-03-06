System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, CustomerMvcAppComp;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CustomerMvcAppComp = (function () {
                function CustomerMvcAppComp(elementRef) {
                    this.elementRef = elementRef;
                }
                CustomerMvcAppComp.prototype.ngOnInit = function () {
                    this._error = this.elementRef.nativeElement.getAttribute('error');
                    if (this._error) {
                        var err = this._error;
                        swal('Error', err, 'error').then(function () {
                        });
                    }
                };
                return CustomerMvcAppComp;
            }());
            CustomerMvcAppComp = __decorate([
                core_1.Component({
                    selector: 'customermvc-app',
                    template: '<router-outlet></router-outlet>'
                }),
                __metadata("design:paramtypes", [core_1.ElementRef])
            ], CustomerMvcAppComp);
            exports_1("CustomerMvcAppComp", CustomerMvcAppComp);
        }
    };
});
//# sourceMappingURL=customermvc.app.comp.js.map