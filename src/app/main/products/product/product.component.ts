import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProductComponent implements OnInit {
    product: any;
    pageType: string;
    productForm: FormGroup;
    constructor(
        private _formBuilder: FormBuilder
    ) {
    }


    ngOnInit() {
        this.pageType = 'view';
        this.product =  {
            'id'              : 1,
            'ASIN'            : 'B07C6YRBG2',
            'name'            : '[MagicBike®] 2 chambres à air Trottinette Electrique Xiaomi M365 8 1/2x2 (Nouvelle Version Mars 2019 ) Double Epaisseur (1.8mm)/ Renforcement valve 4 cm [Qualité Premium] + 2m de cache câble',
            'handle'          : 'product-1',
            'stock'           : 128,
            'price'           : 19.90,
            'sales'         : 67,
            'description'     : 'Laboris laborum minim qui reprehenderit duis fugiat ea anim labore incididunt duis. Officia adipisicing anim amet in sit aliqua fugiat quis do sint non velit eu. Labore occaecat labore elit voluptate Lorem adipisicing et ipsum id et reprehenderit ullamco. Elit in nulla laborum nulla quis dolor deserunt magna dolor ad anim magna. Esse aute reprehenderit anim sit est et quis est. Ex reprehenderit culpa deserunt qui sint eiusmod reprehenderit ipsum consequat ut.',
            'categories'      : [
                'Canvas Print',
                'Nature'
            ],
            'tags'            : [
                'canvas-print',
                'nature'
            ],
            'featuredImageId' : 1,
            'images'          : [
                {
                    'id'  : 0,
                    'url' : 'assets/images/ecommerce/pro_image_1.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 1,
                    'url' : 'assets/images/ecommerce/pro_image_1.jpg',
                    'type': 'image'
                },
                {
                    'id'  : 2,
                    'url' : 'assets/images/ecommerce/pro_image_2.jpeg',
                    'type': 'image'
                }
            ],
            'priceTaxExcl'    : 9.309,
            'priceTaxIncl'    : 10.24,
            'taxRate'         : 20,
            'comparedPrice'   : 19.90,
            'quantity'        : 19,
            'sku'             : 'A445BV',
            'width'           : '22',
            'height'          : '24',
            'depth'           : '15',
            'weight'          : '3',
            'extraShippingFee': 3.00,
            'active'          : true
        };
        console.log(this.product.name);
        this.productForm = this.createProductForm();
        /*return this.product;*/
    }

    /**
     * Create product form
     *
     * @returns {FormGroup}
     */
    createProductForm(): FormGroup
    {
        return this._formBuilder.group({
            id              : [{value: this.product.id, disabled: true}],
            name            : [{value: this.product.name, disabled: true}],
            asin            : [{value: this.product.ASIN, disabled: true}],
            price           : [{value: this.product.price, disabled: true}],
            handle          : [{value: this.product.handle, disabled: true}],
            description     : [{value: this.product.description, disabled: true}],
            categories      : [{value: this.product.categories, disabled: true}],
            tags            : [{value: this.product.tags, disabled: true}],
            images          : [{value: this.product.images, disabled: true}],
            priceTaxExcl    : [{value : this.product.priceTaxExcl, disabled: true}],
            priceTaxIncl    : [{value : this.product.priceTaxIncl, disabled: true}],
            taxRate         : [{value: this.product.taxRate, disabled: true}],
            comparedPrice   : [{value: this.product.comparedPrice, disabled: true}],
            stock           : [{value: this.product.comparedPrice, disabled: true}],
            sku             : [{value: this.product.sku, disabled: true}],
            width           : [{value: this.product.width, disabled: true}],
            height          : [{value: this.product.height, disabled: true}],
            depth           : [{value: this.product.depth, disabled: true}],
            weight          : [{value: this.product.weight, disabled: true}],
            extraShippingFee: [{value: this.product.extraShippingFee, disabled: true}],
            active          : [{value: this.product.extraShippingFee, disabled: true}]
        });
    }

}
