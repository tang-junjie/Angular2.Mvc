System.register(['@angular/core', 'angularfire2'], function(exports_1, context_1) {
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
    var core_1, angularfire2_1;
    var ProductService, PRODUCTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            //import {RestUriService} from '../../service/resturi.service';
            ProductService = (function () {
                function ProductService(af) {
                    //Use the local const array
                    //this.products = PRODUCTS; 
                    this.af = af;
                }
                //Query data from firebase
                ProductService.prototype.queryProducts = function () {
                    var observable = this.af.database.object('/Demo/products');
                    return observable;
                };
                //Get books
                ProductService.prototype.getBooks = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //Use local const data
                        //let books = PRODUCTS.filter(x => x.Type == "Book");
                        //From Firebase
                        JL("Angular2").debug("Querying books!");
                        _this.queryProducts().subscribe(function (data) {
                            JL("Angular2").debug(data);
                            var books = data.filter(function (x) { return x.Type == "Book"; });
                            resolve(books);
                        });
                    });
                };
                //Get toys
                ProductService.prototype.getToys = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //let toys = PRODUCTS.filter(x => x.Type == "Toy");
                        //resolve(toys);
                        //From Firebase
                        JL("Angular2").debug("Querying toys!");
                        _this.queryProducts().subscribe(function (data) {
                            JL("Angular2").debug(data);
                            var toys = data.filter(function (x) { return x.Type == "Toy"; });
                            resolve(toys);
                        });
                    });
                };
                //Get toys
                ProductService.prototype.getMusic = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //let musices = PRODUCTS.filter(x => x.Type == "Music");
                        //resolve(musices);
                        //From Firebase
                        JL("Angular2").debug("Querying music!");
                        _this.queryProducts().subscribe(function (data) {
                            JL("Angular2").debug(data);
                            var musices = data.filter(function (x) { return x.Type == "Music"; });
                            resolve(musices);
                        });
                    });
                };
                ProductService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [angularfire2_1.AngularFire])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
            PRODUCTS = [{ "Id": 1, "Type": "Book", "Title": "Book 1", "Price": 400 },
                { "Id": 2, "Type": "Book", "Title": "Book 2", "Price": 250 },
                { "Id": 3, "Type": "Book", "Title": "Book 3", "Price": 650 },
                { "Id": 4, "Type": "Toy", "Title": "Doll", "Price": 1000 },
                { "Id": 5, "Type": "Toy", "Title": "Toy Train", "Price": 2200 },
                { "Id": 6, "Type": "Toy", "Title": "LEGO", "Price": 3000 },
                { "Id": 7, "Type": "Music", "Title": "Speed Metal", "Price": 600 },
                { "Id": 8, "Type": "Music", "Title": "Theater Metal", "Price": 450 }];
        }
    }
});
//# sourceMappingURL=product.service.js.map