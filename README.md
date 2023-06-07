# mfe-react-webpack-module-federation
An experimental way of making loosely coupled microferontends, giving freedom to teams on developing solely, giving freedon in terms of deployment and avoiding single point failure on learge frontend applications. 

# starting the application

1. install deps
  ```bash
    pnpm i
  ```
2. run in dev mode
```bash
 pnpm dev
```
3. prod [not yet ready]


# Application stracture

```bash
.
├── apps
│   ├── auto-ecole
│   ├── cbt-tracking
│   ├── examination
│   ├── licensing
│   ├── main # app shell, loads all of other applications
│   ├── queue-managment
│   ├── template
│   ├── user-managment
│   └── watchlist
├── package.json
├── packages
│   ├── eslint-config-custom
│   ├── shared-util
│   ├── tailwind-config
│   ├── tsconfig
│   ├── store #to be added
│   └── webpack-config
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── turbo.json
```

# Diagram

![diagram](./arch.png)

- **Store** is a shared state that all apps might use for communication, let us say when theme changes, authentication state changes, etc. but this has to be used caref so that we don't find some of the apps depending on each other. only sub modules are allowed to be depended on main app, not on each other.
- **Private network services** applications services and their assets can be accessed only by the main app, and not by external apps, this is to avoid exposing internal services to the public.
- **Public network services** applications services and their assets can be accessed on public, this is to allow external apps to use some of the pages provided by the main app an. E2E are done on this network. since it has access to internal application services. Auth can be done on this level. 
- **packages** are shared components that can be used by all apps, they are not allowed to have any business logic, they are just presentational components or/and  utils, they can be used by all apps
