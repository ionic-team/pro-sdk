# Ionic Pro API Client

A simple JasvaScript client for interacting with Ionic Pro

## Alpha Notice

This is still in active development, and is far from comprehensive at the moment.  

### Available API Resources

- [x] Apps
- [x] Snapshots (JS Builds)
- [x] Packages (Native Builds)
- [x] Users
- [ ] Deploy channels
- [ ] Organizations
- [ ] Teams
- [ ] View Testers

## Installation

```bash
npm install --save @ionic/pro-api-javascript-client
```

## Usage

```typescript
import { Environment, ProClient, ProUser } from 'pro-client';

...

// Instantiate the client
let cfg: Environment = { debug: true }
let client: ProClient = new ProClient(cfg);

...

// Login to Ionic Pro
client.login("username@test.com", "myAwesomePassword123").then((user: ProUser) => {
  console.log("Logged in", user);
});

...

// List apps you have access to
client.resource.apps.list().then((res: any) => {
  console.log("My apps:", res);
}, (err: any) => {
  console.error("Error getting apps:", err);
});

// List native builds for an app
let appId: string = "abcd1234";
let filters = {platform: "iOS" }; // Optional

client.resource.package.list(appId, filters).then((res: any) => {
  console.log("My native builds:", res);
}, (err: any) => {
  console.error("Error getting builds:", err);
});
```