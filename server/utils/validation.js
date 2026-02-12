// server/utils/validation.js
import Joi from 'joi';

/**
 * User Registration Validation
 */
export const registerSchema = Joi.object({
    fullName: Joi.string().min(3).max(100).required().messages({
        'string.empty': 'الاسم الكامل مطلوب',
        'string.min': 'الاسم يجب أن يكون 3 أحرف على الأقل',
        'string.max': 'الاسم يجب ألا يزيد عن 100 حرف'
    }),
    phone: Joi.string().pattern(/^01[0-2,5]{1}[0-9]{8}$/).required().messages({
        'string.empty': 'رقم الهاتف مطلوب',
        'string.pattern.base': 'رقم الهاتف غير صحيح - يجب أن يكون رقم مصري صحيح'
    }),
    email: Joi.string().email().optional().allow('', null),
    password: Joi.string().min(8).required().messages({
        'string.empty': 'كلمة المرور مطلوبة',
        'string.min': 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'
    }),
    role: Joi.string().valid('client', 'serviceProvider', 'siteOwner').required(),
    address: Joi.string().when('role', {
        is: 'serviceProvider',
        then: Joi.required(),
        otherwise: Joi.optional().allow('', null)
    }),
    city: Joi.string().optional().allow('', null),
    governorate: Joi.string().optional().allow('', null),
    providerType: Joi.string().valid('freelancer', 'exhibition', 'company').when('role', {
        is: 'serviceProvider',
        then: Joi.required(),
        otherwise: Joi.optional().allow(null)
    }),
    exhibitionType: Joi.string().optional().allow('', null),
    specialization: Joi.string().optional().allow('', null),
    jobTitle: Joi.string().optional().allow('', null),
    companyName: Joi.string().optional().allow('', null),
    yearsExperience: Joi.number().integer().min(0).optional().allow(null),
    avgPrice: Joi.number().min(0).optional().allow(null),
    bio: Joi.string().max(1000).optional().allow('', null)
});

/**
 * Login Validation
 */
export const loginSchema = Joi.object({
    phone: Joi.string().required().messages({
        'string.empty': 'رقم الهاتف مطلوب'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'كلمة المرور مطلوبة'
    })
});

/**
 * Offer Creation Validation
 */
export const offerSchema = Joi.object({
    title: Joi.string().min(5).max(200).required().messages({
        'string.empty': 'عنوان العرض مطلوب',
        'string.min': 'العنوان يجب أن يكون 5 أحرف على الأقل'
    }),
    description: Joi.string().min(10).max(2000).required().messages({
        'string.empty': 'وصف العرض مطلوب',
        'string.min': 'الوصف يجب أن يكون 10 أحرف على الأقل'
    }),
    price: Joi.number().min(0).optional().allow(null),
    discount: Joi.number().min(0).max(100).optional().allow(null),
    expiresAt: Joi.date().greater('now').optional().allow(null)
});

/**
 * Finishing Request Validation
 */
export const finishingRequestSchema = Joi.object({
    title: Joi.string().min(5).max(200).required(),
    description: Joi.string().min(20).max(3000).required(),
    budget: Joi.number().min(0).optional().allow(null),
    location: Joi.string().required(),
    city: Joi.string().required(),
    governorate: Joi.string().required(),
    isCompanyRequest: Joi.boolean().default(false),
    specialization: Joi.string().when('isCompanyRequest', {
        is: false,
        then: Joi.required(),
        otherwise: Joi.optional().allow('', null)
    })
});

/**
 * Proposal Validation
 */
export const proposalSchema = Joi.object({
    description: Joi.string().min(20).max(2000).required(),
    price: Joi.number().min(0).required(),
    duration: Joi.string().required(),
    notes: Joi.string().max(1000).optional().allow('', null)
});

/**
 * Maintenance Request Validation
 */
export const maintenanceRequestSchema = Joi.object({
    title: Joi.string().min(5).max(200).required(),
    description: Joi.string().min(10).max(2000).required(),
    specialization: Joi.string().required(),
    location: Joi.string().required(),
    city: Joi.string().required(),
    governorate: Joi.string().required(),
    urgency: Joi.string().valid('normal', 'urgent', 'emergency').default('normal')
});

/**
 * Rating Validation
 */
export const ratingSchema = Joi.object({
    rating: Joi.number().integer().min(1).max(5).required(),
    comment: Joi.string().max(500).optional().allow('', null),
    providerId: Joi.number().integer().required()
});

/**
 * Donation Validation
 */
export const donationSchema = Joi.object({
    title: Joi.string().min(5).max(200).required(),
    description: Joi.string().min(20).max(2000).required(),
    contactInfo: Joi.string().required()
});

/**
 * Online Service Validation
 */
export const onlineServiceSchema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    description: Joi.string().max(500).optional().allow('', null),
    link: Joi.string().uri().required(),
    order: Joi.number().integer().min(0).default(0)
});

/**
 * Static Content Validation
 */
export const staticContentSchema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    content: Joi.string().min(10).required(),
    phone: Joi.string().optional().allow('', null),
    email: Joi.string().email().optional().allow('', null),
    address: Joi.string().optional().allow('', null),
    social: Joi.object().optional().allow(null)
});

/**
 * Helper function للتحقق من البيانات
 */
export function validate(schema, data) {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true
    });

    if (error) {
        const errors = error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
        }));
        return { valid: false, errors };
    }

    return { valid: true, data: value };
}
