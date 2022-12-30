<template>

  <Head title="Welcome" />

  <div class="relative flex items-top justify-center min-h-screen bg-base-200 sm:items-center sm:pt-0">
    <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
      <Link v-if="$page.props.user" :href="route('dashboard')" class="btn btn-ghost">Dashboard
      </Link>

      <template v-else>
        <Link :href="route('login')" class="btn btn-ghost">Log in</Link>

        <Link v-if="canRegister" :href="route('register')" class="btn btn-ghost">Register
        </Link>
      </template>
    </div>

    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
        <ApplicationLogo />
      </div>

      <div class="mt-8 bg-base-100 overflow-hidden shadow sm:rounded-lg">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-6">
            <div class="flex items-center">
              <vue-feather type="book-open" size="28" />
              <div class="ml-4 text-lg leading-7 font-semibold">
                <a href="https://squidui.com/documentation" class="underline text-accent-content">Documentation</a>
              </div>
            </div>

            <div class="ml-12">
              <div class="mt-2 text-base-content text-sm">
                SquidUI is a Production Ready, Extensive, Beautifully Crafted, WebApp Starter Kit. Here you can read a
                full documentation for pro and community versions.
              </div>
            </div>
          </div>

          <div class="p-6 border-t border-base-200 md:border-t-0 md:border-l">
            <div class="flex items-center text-base-color">
              <vue-feather type="heart" size="28" />
              <div class="ml-4 text-lg leading-7 font-semibold">
                <a href="https://squidui.com/documentation/ce" class="underline text-accent-content">Community
                  Edition</a>
              </div>
            </div>

            <div class="ml-12">
              <div class="mt-2 text-base-content text-sm">
                SquidUI Community Edition is a lighter version (MIT licensed). It is built on <a
                  href="https://jetstream.laravel.com/" class="underline" target="_blank">Laravel Jetstream</a> and
                bundled with
                Tailwind's DaisyUI
                exceptional plugin, theme selection, Vue Pinia Store and more.
              </div>
            </div>
          </div>

          <div class="p-6 border-t border-base-200">
            <div class="flex items-center">
              <vue-feather type="user-check" size="28" />
              <div class="ml-4 text-lg leading-7 font-semibold">
                <a href="https://squidui.com/authentication" class="underline text-accent-content">Auth, User and Group
                  ready</a>
              </div>
            </div>

            <div class="ml-12">
              <div class="mt-2 text-base-content text-sm">
                login, two-factor login, registration, password reset, and email verification features for your project,
                allowing you to
                start building the features you care about instead of worrying about the nitty-gritty details of user
                authentication.
              </div>
            </div>
          </div>

          <div class="p-6 border-t border-base-200 md:border-l">
            <div class="flex items-center">
              <vue-feather type="code" size="28" />
              <div class="ml-4 text-lg leading-7 font-semibold text-accent-content">
                Vue Composition API + InertiaJS
              </div>
            </div>

            <div class="ml-12">
              <div class="mt-2 text-base-content text-sm">
                Under the hood, SquidUI uses <a href="https://inertiajs.com/" class="underline"
                  target="_blank">InertiaJS</a> . Inertia is a new approach to building classic server-driven web
                apps. We call it the modern monolith. This allows Laravel to integrate with <a href="" class="underline"
                  target="_blank">VueJS</a> in a simpler and more
                powerful way.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-4 sm:items-center sm:justify-between">
        <div class="text-center text-sm text-base-content sm:text-left">
          <div class="flex items-center">
            <vue-feather type="award" size="28" />

            <a href="https://laravel.bigcartel.com" class="ml-1 underline">
              SquidUI Pro
            </a>
          </div>
        </div>

        <div class="ml-4 text-center text-sm text-base-content sm:text-right sm:ml-0">
          Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3'
import ApplicationLogo from '@components/ApplicationLogo.vue'
import VueFeather from 'vue-feather'

defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  laravelVersion: String,
  phpVersion: String,
})
</script>
