<template>
  <div class="mx-48 space-y-2">
    <div class="border-l-4 border-green-400 bg-green-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-green-800">
            Completing all pages <small>Jun 2</small>
          </h3>
          <div class="mt-2 text-sm text-green-700">
            <ul role="list" class="list-disc space-y-1 pl-5">
              <li>
                Complete Home, Objective, Education, Skill, Work Experience and Workstation
                <span
                  class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800"
                  >Working</span
                >
              </li>
              <li>Responsive for Mobile</li>
              <li>Support Dark Mode</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-sm text-yellow-700">
            Successfully Created
            {{ ' ' }}
            <span class="font-medium text-yellow-700 underline hover:text-yellow-600">
              This Portfolio is Created by me, and without using any templates.</span
            >
          </p>
          <div class="mt-4 pl-4">
            <h1 class="text-sm font-figree font-semibold text-yellow-500">Tools That I used</h1>
            <ul role="list" class="list-disc space-y-1 pl-5 text-sm text-yellow-500">
              <li>VueJS + Vite</li>
              <li>HeadlessUI</li>
              <li>Heroicons + Bootstrap Icons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CheckIcon } from '@heroicons/vue/20/solid'
</script>
