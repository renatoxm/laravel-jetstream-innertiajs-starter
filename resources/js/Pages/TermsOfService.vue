<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue'

defineProps({
    terms: String,
})
</script>

<template>

    <Head title="Terms of Service" />

    <div class="font-sans text-accent-content antialiased">
        <div class="pt-4 bg-base-200">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <AuthenticationCardLogo />
                </div>

                <div class="w-full sm:max-w-2xl mt-6 p-6 bg-base-100 shadow-md overflow-hidden sm:rounded-lg prose"
                    v-html="terms" />
            </div>
        </div>
    </div>
</template>
