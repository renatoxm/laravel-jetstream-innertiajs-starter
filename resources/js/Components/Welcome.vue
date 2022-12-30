<template>
  <div>
    <div class="flex p-6 bg-base-100 border-b border-base-200">
      <div class="flex-grow">
        <ApplicationLogo class="block h-20 w-auto" />
      </div>

      <div class="mt-8 text-2xl">
        Hey {{ $page.props.user.name }}, welcome to your application!
      </div>

    </div>

  </div>
</template>
<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
</script>
