import AdminJSDefault, { AdminJS as AdminJSNamed } from 'adminjs';
import * as AdminJSPrisma from '@adminjs/prisma';

console.log('Default === Named:', AdminJSDefault === AdminJSNamed);
const AdminJS = AdminJSNamed || AdminJSDefault;

console.log('Adapters Descriptor:', Object.getOwnPropertyDescriptor(AdminJS, 'adapters'));
console.log('Adapters in AdminJS:', 'adapters' in AdminJS);

const { Database, Resource } = AdminJSPrisma;

console.log('Adapters in AdminJS before hack:', 'adapters' in AdminJS);
if (!AdminJS.adapters) {
    AdminJS.adapters = [];
    console.log('AdminJS.adapters initialized manually');
}
console.log('Adapters in AdminJS after hack:', 'adapters' in AdminJS);

console.log('Registering adapter...');
AdminJS.registerAdapter({ Database, Resource });

console.log('Internal adapters after registration:', AdminJS.adapters?.length);

try {
    console.log('Attempting manual Resource instantiation...');
    const resource = new Resource({ model: { name: 'Test' }, client: { $connect: () => { } } });
    console.log('Manual Resource instance created');

    const admin = new AdminJS({
        resources: [
            { resource: resource, options: { navigation: { name: 'Test' } } }
        ]
    });
    console.log('AdminJS instance created with manual resource');
} catch (e) {
    console.log('Caught Error (manual):', e.name, e.message);
}
