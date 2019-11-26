import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { fuseAnimations } from '../../../../@fuse/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuseTranslationLoaderService } from '../../../../@fuse/services/translation-loader.service';
import { locale as english } from '../i18n/en';
import { locale as french } from '../i18n/fr';
import { ProductService } from './product.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

const email: any[] = [
    {
        'name': 'Email n°1',
        'numberProduct': 3,
        'declenchement': 'Envoyer l’email pour les commandes réalisées 2 Jours après Livraison',
        'active': 'Actif',
    },
    {
        'name': 'Email n°2',
        'numberProduct': 2,
        'declenchement': 'Envoyer l’email pour les commandes réalisées 2 Jours après Livraison',
        'active': 'Actif',
    },
    {
        'name': 'Email n°3',
        'numberProduct': 1,
        'declenchement': 'Envoyer l’email pour les commandes réalisées 2 Jours après Livraison',
        'active': 'Actif',
    },
    {
        'name': 'Email n°4',
        'numberProduct': 6,
        'declenchement': 'Envoyer l’email pour les commandes réalisées 2 Jours après Livraison',
        'active': 'Actif',
    }
];

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})

export class ProductComponent implements OnInit {

    displayedColumns: string[] = ['productName', 'numberProduct', 'declenchement', 'active'];
    dataSource: MatTableDataSource<any[]>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    product: any;
    pageType: string;
    productForm: FormGroup;
    widgets: any;
    emails: any;
    widget1SelectedYear = '2016';

    constructor(
        private _formBuilder: FormBuilder,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _productService: ProductService
    ) {
        this._fuseTranslationLoaderService.loadTranslations(english, french);
        // Register the custom chart.js plugin
        this._registerCustomChartJSPlugin();
        // Get emails from the service
        this.emails = this._productService.emails;
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.emails);
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
        this.productForm = this.createProductForm();
        // Get the widgets from the service
        this.widgets = this._productService.widgets;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
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
    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register a custom plugin
     */
    private _registerCustomChartJSPlugin(): void
    {
        (<any>window).Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing): any {
                // Only activate the plugin if it's made available
                // in the options
                if (
                    !chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
                )
                {
                    return;
                }

                // To only draw at the end of animation, check for easing === 1
                const ctx = chart.ctx;

                chart.data.datasets.forEach(function (dataset, i): any {
                    const meta = chart.getDatasetMeta(i);
                    if ( !meta.hidden )
                    {
                        meta.data.forEach(function (element, index): any {

                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            const fontSize = 13;
                            const fontStyle = 'normal';
                            const fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                            // Just naively convert to string for now
                            const dataString = dataset.data[index].toString() + 'k';

                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            const padding = 15;
                            const startY = 24;
                            const position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);

                            ctx.save();

                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();

                            ctx.restore();
                        });
                    }
                });
            }
        });
    }

}
