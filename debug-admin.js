import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/prisma';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

console.log('Registering adapter...');
AdminJS.registerAdapter({ Database, Resource });

const resources = [
    { resource: { model: prisma.user, client: prisma }, options: {} },
    { resource: { model: prisma.offer, client: prisma }, options: {} },
    { resource: { model: prisma.finishingRequest, client: prisma }, options: {} },
    { resource: { model: prisma.proposal, client: prisma }, options: {} },
    { resource: { model: prisma.maintenanceRequest, client: prisma }, options: {} },
    { resource: { model: prisma.rating, client: prisma }, options: {} },
    { resource: { model: prisma.donation, client: prisma }, options: {} },
    { resource: { model: prisma.onlineService, client: prisma }, options: {} },
    { resource: { model: prisma.staticContent, client: prisma }, options: {} },
    { resource: { model: prisma.notification, client: prisma }, options: {} },
    { resource: { model: prisma.message, client: prisma }, options: {} }
];

console.log('Checking resources...');
resources.forEach((r, i) => {
    if (!r.resource.model) {
        console.error(`Resource ${i} model is missing!`, r);
    } else {
        // console.log(`Resource ${i} model found:`, r.resource.model.name); 
        // Prisma models are objects, normally have dmmf or verify via property check
    }
});

try {
    console.log('Initializing AdminJS...');
    const adminJs = new AdminJS({
        resources: resources,
        rootPath: '/admin',
    });
    console.log('AdminJS initialized successfully');
} catch (error) {
    console.error('AdminJS initialization failed:', error);
}
