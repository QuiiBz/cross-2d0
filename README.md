# Cross 2d0

Subject: [here](https://github.com/pu-erh/2d0)

## How to setup

### React Native App
- Move to the app directory: `cd app`
- Install dep: `yarn`
- Start expo: `yarn start`

### Express Server
- Move to the server directory: `cd server`
- Install dep: `yarn`
- Copy and edit .env values: `cp .env.example .env`
- Push the prisma schema: `npx prisma db push --preview-feature`
- Start the server: `yarn start`
