import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'Applications',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        children: [
            {
                id: 'sample',
                title: 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'email',
                url: '/sample',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF',
                },
            },
            {
                id: 'product',
                title: 'Product',
                translate: 'NAV.PRODUCTS.TITLE',
                type: 'item',
                icon: 'shopping_cart',
                url: '/products',
            },
            {
                id: 'login',
                title: 'Login',
                translate: 'NAV.LOGIN.TITLE',
                type: 'item',
                icon: 'lock',
                url: '/login',
            },
            {
                id: 'forgot-password',
                title: 'Forgot Password',
                translate: 'NAV.FORGOT-PASSWORD.TITLE',
                type: 'item',
                icon: 'lock',
                url: '/forgot-password',
            },
        ],
    },
];
