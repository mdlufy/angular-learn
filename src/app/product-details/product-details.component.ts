import {Product, products} from './../products';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    product: Product | undefined;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));

        this.product = products.find(
            (product) => product.id === productIdFromRoute
        );
    }
}
