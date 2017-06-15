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

This build is set as a static website on s3. It uses the bucket '3dius-sketch-to-vr' for hosting. It pulls the images from the same bucket.
They are put there via the [Sketch-to-vr plugin] (https://github.com/DiUS/Sketch-to-VR)

After you copy the public folder contents to an s3 bucket.
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


Currently hosted [here](http://3dius-sketch-to-vr.s3-website-ap-southeast-2.amazonaws.com/)
