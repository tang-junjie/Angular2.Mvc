﻿import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {RouteConfig, Router, ROUTER_PROVIDERS} from 'angular2/Router';
import { APP_BASE_HREF } from 'angular2/platform/common';
import {CustomerIndexComponent} from './customer.index.component';
import {CustomerEditComponent} from './customer.edit.component';
import {CustomerRoutes} from './customer.route';



//enableProdMode();
bootstrap(CustomerIndexComponent);
