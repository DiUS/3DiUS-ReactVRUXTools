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
Then zip up the root folder (except for the node_modules directory!)

I am then scp'ing the zip to the node server
```
scp -i some-pem-file.pem -r project.zip ubuntu@52.38.183.91:/home/ubuntu/server
```

Once unpacked on the ec2 instance, I am running it manually for the moment:

```
node server.js
```

You can run this server locally for testing, but right now you need to build it each time.

I followed the cool tutorial at `https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171#.ktvk348o5` for building a quick node server :)
