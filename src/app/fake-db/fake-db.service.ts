import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ProductAnalyticsDb } from './product-analytics';
import { ProductEmailDb } from './product-email';

export class FakeDbService implements InMemoryDbService {
        createDb(): any {
            return {
                // Products
                'analytics-product': ProductAnalyticsDb.widgets,
                'email-product': ProductEmailDb.emails
            };
        }
}
