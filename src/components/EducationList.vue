<template>
    <div class="px-4 sm:px-6 lg:px-8 font-figree">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto space-y-2">
          <h1 class="text-xl font-semibold text-amber-500">List School</h1>
          <div class="bg-gradient-to-r from-amber-400 from-10% via-yellow-500 via-30% to-yellow-400 to-90% px-4 py-2 border-l-4">
              <p class="mt-2 text-sm text-gray-700">My school history is a long and winding one. I started my education at a small elementary school in my hometown. I was a shy and quiet child, but I loved learning and I was always eager to participate in class discussions. In middle school, I started to come out of my shell and I made some great friends. I also started to get involved in extracurricular activities, such as the debate team</p>
          </div>
        </div>
      </div>
      <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table class="min-w-full divide-y divide-amber-300">
          <thead class="bg-amber-100">
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">School Name</th>
              <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">From - To</th>
              <th scope="col" class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">Address</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Course</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-amber-300 bg-amber-200">
            <tr v-for="school in schools" :key="school.school_name">
              <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-amber-900 sm:w-auto sm:max-w-none sm:pl-6">
                {{ school.school_name }}
                <dl class="font-normal lg:hidden">
                  <dt class="sr-only">School name</dt>
                  <dd class="mt-1 truncate text-amber-700">{{ school.date }}</dd>
                  <dt class="sr-only sm:hidden">From - To</dt>
                  <dd class="mt-1 truncate text-amber-500 sm:hidden">{{ school.date }}</dd>
                </dl>
              </td>
              <td class="hidden px-3 py-4 text-sm text-amber-600 lg:table-cell">{{ school.date }}</td>
              <td class="hidden px-3 py-4 text-sm text-amber-600 sm:table-cell">{{ school.address }}</td>
              <td class="px-3 py-4 text-sm text-amber-600">{{ school.course }}</td>
              <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <span href="#" class="text-emerald-600 ">{{ school.finish }}<span class="sr-only">, {{ school.school_name }}</span></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  const schools = [
    { school_name: 'STI College Fairview', date: '2018 - Current', address: '20-d Regalado Avenue, Corner Bronx, Quezon City, 651-8511 Metro Manila', course: 'Bachelor of Science in Information Technology', finish: 'Finished' },
    { school_name: 'Bagong Silangan High School', date: '2018 - Current', address: 'J. P. Rizal, Quezon City, Metro Manila', course: 'Information and communications technology', finish: 'Finished' },
    { school_name: 'Bagong Silangan Elementary School', date: '2018 - Current', address: '1119 Gen. Villamor, St, Quezon City, Rizal', course: 'Elementary', finish: 'Finished' },
    // More people...
  ]
  </script>