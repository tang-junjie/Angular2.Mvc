﻿import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent} from './product-index.component';
import { ProductCreateComponent} from './product-create.component';
import { ProductEditComponent} from './product-edit.component';
import { ProductSubComponent} from './product-sub.component';
import { ProductBooksComponent} from './product-books.component';
import { ProductToysComponent} from './product-toys.component';
import { ProductMusicComponent } from './product-music.component';
import { ShopcartComponent } from './shopcart.component';



const appRoutes: Routes = [
    { path: 'Basic/Product/Index', component: ProductIndexComponent },
    { path: 'Basic/Product/Create', component: ProductCreateComponent },
    { path: 'Basic/Product/Edit/:id', component: ProductEditComponent },
    { path: 'Basic/Product/Shopcart', component: ShopcartComponent },
    {
        path: 'Basic/Product/Sub',
        component: ProductSubComponent,
        children: [
            { path: 'Books', component: ProductBooksComponent },
            { path: 'Toys', component: ProductToysComponent },
            { path: 'Music', component: ProductMusicComponent }
        ]
    },
    //{ path: 'Basic/Product/Toys', component: ProductIndexComponent },
    //{ path: 'Basic/Product/Music', component: ProductIndexComponent },
    { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
];



export const ProductRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
