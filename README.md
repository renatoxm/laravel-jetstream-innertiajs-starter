# laravel-jetstream-innertiajs-starter

Production Ready, Extensive, Beautifully Crafted, WebApp Starter Kit.

SquisUI is a full-featured stater-kit for for your next SaaS application. It's built on top of Laravel, Livewire, InertiaJS, Tailwind and DaisyUI.

![GitHub tag (latest SemVer pre-release)](https://img.shields.io/github/v/tag/squid-ui/laravel-jetstream-innertiajs-starter?include_prereleases) ![GitHub all releases](https://img.shields.io/github/downloads/squid-ui/laravel-jetstream-innertiajs-starter/total) ![GitHub commit activity](https://img.shields.io/github/commit-activity/y/squid-ui/laravel-jetstream-innertiajs-starter) ![GitHub](https://img.shields.io/github/license/squid-ui/laravel-jetstream-innertiajs-starter)

## SquidUI Community Edition features:

* Authentication (with 2 Factor Auth support)
* User Management
* User profiles
* Teams and Groups Management
* Multi Themes Dashboard
* much more.

## Under the hood

* [Laravel](https://laravel.com/)
* [Jetstream](https://jetstream.laravel.com/)
* [InnertiaJS](https://inertiajs.com/)
* [Vue (With Composition API)](https://vuejs.org/)
* [Pinia Store](https://pinia.vuejs.org/)
* [TailwindCss](https://tailwindcss.com/)
* [DaisyUI](https://daisyui.com/)

## Why use squidUI?

**Save time without sacrificing quality**

As developers, we always have to deliver reliable, low cost and easy to deploy applications within the shortest period of time.

So, if you need to do things quick with high flexibility what can you do?

You need to speed up your production without sacrificing quality.

And how can you do that?

You can start with Laravel framework...

that'll save you some time! 😃

You can choose Vue.js and Tailwind to create your UI...

Nice! You just cut a lot more time without sacrificing code standards. 🤓

But there is something more you can do... 💭

You can choose SquidUI 🦑

A Production Ready, Extensive, Beautifully Crafted, WebApp Starter Kit.

## Community and Pro Versions

### SquidUI Community MIT LICENSE (This version)

Community edition is a lightweight version, with the basic stuff you'll need in any web application. 

It is easy to use if you're familiar with Laravel and Vue.js. This version is MIT, and it will always be free. 

You are free to use it however you like.

### SquidUI Pro LICENSE  [Visit Website](https://squidui.com/)

Save thousands of hours (2960 and counting 🕓) implementing the best design patters, libraries and strategies…

And use **squidUI Pro**, the create your state-of-the-art project.

Deploy beautifully themed, secure and fast webApps inhalf of the time with **SquidUI Pro** help.

All this can be yours so you can use it in all your projects for a very small price!

## Instalation

**SquidUI Community Edition** is almost ready to use, just follow this steps:

0. Pre-requisites

You need Node.js and Composer installed in order to run SquidUI.

1. Download or clone this Repo
```
git clone https://github.com/squid-ui/laravel-jetstream-innertiajs-starter.git
```

2. Install Composer Dependencies
```
composer install
```

3. Install npm Dependencies
```
npm install
```

4. Copy .env.example to .env and edit your project and database configurations to fit your development environment needs
```
cp .env.example .env
```

5. Generate your Laravel key
```
php artisan key:generate
```

6. Run migrations
```
php artisan migrate
```

7. Build NPM dependencies
```
npm run build
```

8. Start Testing server
```
php artisan serve
```

That's all! Now goto [https://localhost:8000](https://localhost:8000) and enjoy!

## Instalation on Docker (Sail) [Sail Documentation](https://laravel.com/docs/9.x/sail)

0. Pre-requisites

You need Docker installed

1. Copy .env.example to .env
```
cp .env.example .env
```

2. Start sail, all dependencies will be installed for you
```
./vendor/bin/sail up -d
```

3. Generate you key
```
./vendor/bin/sail artisan key:generate
```

4. Install Composer and Node Dependencies
```
./vendor/bin/sail composer install
```
```
./vendor/bin/sail npm install
```

5. Run migrations
./vendor/bin/sail artisan migrate:fresh
```

6. Start server 
./vendor/bin/sail npm run dev
```

## License

MIT. Please see the [license file](LICENSE.md) for more information.
