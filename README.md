# 3DiUS-ReactVR

This repo is a prototype WebVR application to provide a quick UX toolset to get fast feedback in VR on a spheremap background and menu layout.

Setup
---

```
npm install
```

Compile
---

```
npm run dist
```

Usage
---

Start the development server with this command:

```
npm start
```

## Host on static s3 bucket
Sounds like a plan.

```
npm run dist
```

Copy the public folder contents to an s3 bucket.
Host the bucket as a static website and attach the following

### bucket policy's
```
{
  "Version": "2012-10-17",
    "Statement": [{
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<bucket name>/*"
    }]
}
```

This system is currently set to use the bucket '3dius-sketch-to-vr-frontend' for hosting. It pulls the images from an assumed bucket called '3dius-sketch-to-vr'.
It will have issues pulling from another bucket due to CORS. I have attached the following cors policy to the bucket '3dius-sketch-to-vr':

```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>HEAD</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <ExposeHeader>ETag</ExposeHeader>
    <AllowedHeader>*</AllowedHeader>
  </CORSRule>
</CORSConfiguration>
```
