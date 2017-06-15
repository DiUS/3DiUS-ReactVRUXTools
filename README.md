# 3DiUS-ReactVR

This repo is a prototype WebVR application to provide a quick UX toolset to get fast feedback in VR on a spheremap background and menu layout.
`index.html` will give you 2 uploaders to provide the 2 images
In a browser (or mobile phone if you have it installed on AWS) you can view the scene changes at `/vr-scene`

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

## get it up to a AWS node server on ec2
Sounds like a plan.

```
npm run dist
```

Copy the public folder contents to an s3 bucket.
Host the bucket as a static website and attach the following

### bukcet policy
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

