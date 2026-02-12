# Shatab.eg Backend - API Documentation

## Base URL
```
Development: http://localhost:3000/api
Production: https://yourdomain.com/api
```

## Authentication

All authenticated endpoints require a JWT token in cookies or Authorization header:
```
Authorization: Bearer <token>
```

### Register
**POST** `/auth/register`

**Body:**
```json
{
  "fullName": "أحمد محمد",
  "phone": "01012345678",
  "email": "ahmed@example.com",
  "password": "password123",
  "role": "client|serviceProvider|siteOwner",
  "providerType": "freelancer|exhibition|company",
  "address": "العنوان",
  "city": "المدينة",
  "governorate": "المحافظة"
}
```

### Login
**POST** `/auth/login`

**Body:**
```json
{
  "phone": "01012345678",
  "password": "password123"
}
```

### Verify OTP
**POST** `/auth/verify`

**Body:**
```json
{
  "phone": "01012345678",
  "otp": "123456"
}
```

### Logout
**POST** `/auth/logout`

### Get Current User
**GET** `/auth/me`

## Offers

### List Offers
**GET** `/offers?page=1&limit=20&featured=true&providerId=1&status=active`

### Create Offer
**POST** `/offers` (Service Providers only)

**Body:**
```json
{
  "title": "عرض خاص على السيراميك",
  "description": "وصف العرض",
  "image": "/uploads/images/offer.webp",
  "price": 5000,
  "discount": 20,
  "expiresAt": "2026-03-01"
}
```

### Get Offer
**GET** `/offers/:id`

### Update Offer
**PUT** `/offers/:id` (Owner only)

### Delete Offer
**DELETE** `/offers/:id` (Owner only)

## Finishing Requests

### List Requests
**GET** `/finishing/requests?page=1&status=open&city=القاهرة`

### Create Request
**POST** `/finishing/requests`

**Body:**
```json
{
  "title": "تشطيب شقة 120 متر",
  "description": "وصف تفصيلي",
  "budget": 100000,
  "location": "العنوان",
  "city": "القاهرة",
  "governorate": "القاهرة",
  "isCompanyRequest": true,
  "images": ["/uploads/images/img1.webp"]
}
```

## Proposals

### List Proposals
**GET** `/finishing/proposals?requestId=1&providerId=2`

### Submit Proposal
**POST** `/finishing/proposals` (Service Providers only)

**Body:**
```json
{
  "requestId": 1,
  "description": "وصف العرض",
  "price": 95000,
  "duration": "شهرين",
  "notes": "ملاحظات إضافية"
}
```

## Maintenance

### List Maintenance Requests
**GET** `/maintenance?page=1&specialization=كهرباء&urgency=urgent`

### Create Maintenance Request
**POST** `/maintenance`

**Body:**
```json
{
  "title": "صيانة كهرباء",
  "description": "وصف المشكلة",
  "specialization": "كهرباء",
  "location": "العنوان",
  "city": "القاهرة",
  "governorate": "القاهرة",
  "urgency": "normal|urgent|emergency",
  "images": []
}
```

## Ratings

### List Ratings
**GET** `/ratings?providerId=1`

### Add/Update Rating
**POST** `/ratings`

**Body:**
```json
{
  "providerId": 1,
  "rating": 5,
  "comment": "خدمة ممتازة"
}
```

## Donations

### List Approved Donations
**GET** `/donations?page=1`

### Create Donation
**POST** `/donations`

**Body:**
```json
{
  "title": "تبرع لبناء مسجد",
  "description": "وصف التبرع",
  "image": "/uploads/images/donation.webp",
  "contactInfo": "01012345678"
}
```

### List Pending Donations
**GET** `/donations/pending` (Site Owner only)

### Approve/Reject Donation
**POST** `/donations/:id` (Site Owner only)

**Body:**
```json
{
  "action": "approve|reject",
  "rejectionReason": "سبب الرفض"
}
```

## Notifications

### List Notifications
**GET** `/notifications?unreadOnly=true&limit=50`

### Mark as Read
**PUT** `/notifications`

**Body:**
```json
{
  "notificationId": 1,
  "markAll": false
}
```

## Static Content

### Get Content
**GET** `/content?key=about|contact`

### Update Content
**PUT** `/content` (Site Owner only)

**Body:**
```json
{
  "key": "about",
  "title": "معلومات عنا",
  "content": "محتوى الصفحة",
  "phone": "01012345678",
  "email": "info@shatab.eg",
  "address": "العنوان",
  "social": {
    "facebook": "url",
    "instagram": "url"
  }
}
```

## User Profile

### Get Profile
**GET** `/users/profile`

### Update Profile
**PUT** `/users/profile`

**Body:**
```json
{
  "fullName": "الاسم الجديد",
  "bio": "نبذة عني",
  "avatar": "/uploads/images/avatar.webp",
  "currentPassword": "old_password",
  "newPassword": "new_password"
}
```

## File Upload

### Upload Files
**POST** `/upload`

**Form Data:**
- `file`: Single file
- `files`: Multiple files

**Response:**
```json
{
  "message": "تم رفع الملف بنجاح ✅",
  "file": {
    "main": "/uploads/images/filename.webp",
    "thumbnail": "/uploads/thumbnails/filename_thumb.webp"
  }
}
```

## Error Responses

All endpoints return errors in this format:
```json
{
  "error": "رسالة الخطأ",
  "errors": [
    {
      "field": "phone",
      "message": "رقم الهاتف غير صحيح"
    }
  ]
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error
