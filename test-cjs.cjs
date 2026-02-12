const AdminJS = require('adminjs');
const AdminJSPrisma = require('@adminjs/prisma');

console.log('AdminJS Version:', AdminJS.VERSION);
console.log('Registering adapter (CJS)...');

AdminJS.registerAdapter(AdminJSPrisma);

console.log('Adapters:', AdminJS.adapters?.length);

try {
    const admin = new AdminJS({
        resources: [
            { resource: { model: { name: 'Test' }, client: {} } }
        ]
    });
    console.log('Success: AdminJS instance created in CJS');
} catch (e) {
    console.log('Caught Error (CJS):', e.name, e.message);
}
