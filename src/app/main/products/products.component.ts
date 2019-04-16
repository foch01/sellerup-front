import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FuseTranslationLoaderService} from '../../../@fuse/services/translation-loader.service';
import {locale as english} from './i18n/en';
import {locale as french} from './i18n/fr';
import {fuseAnimations} from '../../../@fuse/animations';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})

export class ProductsComponent implements OnInit {
    dataSource: any;
    dataTable: any[];
    displayedColumns = ['asin', 'image', 'name', 'stock', 'sales'];

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('filter')
    filter: ElementRef;

    /**
     * Constructor
     *
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     */
    constructor(
        private _fuseTranslationLoaderService: FuseTranslationLoaderService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, french);
    }

    ngOnInit() {
        this.dataTable =  [
            {
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
            },
            {
                'id'              : 2,
                'ASIN'            : 'B07C6YRBG2',
                'name'            : '[MagicBike®] 2 chambres à air Trottinette Electrique Xiaomi M365 8 1/2x2 (Nouvelle Version Mars 2019 ) Double Epaisseur (1.8mm)/ Renforcement valve 4 cm [Qualité Premium] + 2m de cache câble',
                'stock'           : 25,
                'price'           : 19.90,
                'sales'         : 156,
                'handle'          : 'product-2',
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
            }
        ];
        this.dataTable.forEach((product) => {
            console.log(product.handle);
        });
        return this.dataSource;
    }

}


