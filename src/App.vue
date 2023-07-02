<script setup>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import { ArrowsPointingInIcon, CogIcon } from '@heroicons/vue/24/solid'
  import Update from './components/Update.vue'

</script>
<template>
  <!-- <div class="bg-gray-100 h-screen bg-gradient-to-r from-gray-100 to-slate-100"> -->
    <div class="bg-[url('src/assets/desktop.jpg')]">
    <TabGroup :defaultIndex="0">
      <div class="mx-48 h-screen">
        <!-- navigation -->
        <div class="p-2 mx-14 flex items-center justify-between">
          <h1 class="leading-loose tracking-2 text-6xl text-white font-belanosima">
            <span class="font-bold text-cyan-400 drop-shadow-lg">D</span>
            <span class="text-xl text-sky-500 font-semibold drop-shadow-lg">L</span>
          </h1>
          <TabList class="flex space-x-4 border-solid border px-4 py-2 rounded-full shadow-md font-figree text-sm text-white">
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Home</button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Objective</button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Education</button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Skill</button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Work Experience</button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Workstation</button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button :class="{ 'font-bold text-emerald-300 border-b-2 border-emerald-300': selected, 'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300': !selected }">Updates</button>
            </Tab>
          </TabList>
        </div>
        <!-- main content -->
        <TabList>
          <TabPanels class="mx-24">
            <!-- Home -->
            <TabPanel>
              <div class="flex items-center bg-gradient-to-r from-indigo-500 via-cyran-500 to-sky-500 rounded-full">
                <img src="./assets/images.png" class="saturate-50 h-1/2 drop-shadow-md" alt="" />
                <div class="mx-4 mt-14 max-w-md text-left font-belanosima space-y-2">
                  <div class="border-t-8 w-32">
                    <h1 class="sr-only">Darwin llacuna</h1>
                  </div>
                  <h5 class="uppercase font-semibold text-sky-300">Hey there</h5>
                  <h2 class="text-5xl font-semibold text-gray-50 drop-shadow-lg animate-bounce">
                    <span class="font-light">I</span>'m <span class="text-emerald-500 stroke-1">D</span>arwin Llacuna
                  </h2>
                  <h3 class="font-semibold text-sky-300">A Web Developer with a passion for creating beautiful and functional websites.</h3>
                  <span class="text-sm text-indigo-100 font-figree"
                    >I am a fresh graduate student who graduated from STI College Fairview. I have
                    experience creating full-stack websites such as CMS and Portal.
                  </span>
                  <ul class="flex space-x-4">
                    <li>
                      <a href="https://www.facebook.com/darwin.llacuna">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-facebook h-7 w-7 text-gray-200 hover:text-sky-400 hover:opacity-75 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                          viewBox="0 0 16 16"
                        >
                        
                          <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Redtro2k">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-github h-7 w-7 text-gray-200 hover:text-gray-700 hover:opacity-75 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                      </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <!-- Objective -->
            <TabPanel>
              <div class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md px-28 py-10">
                <div class="flex items-center">
                  <div class="m-4 bg-slate-200 rounded-md drop-shadow-md">
                    <img src="./assets/Darwin Llacuna.jpg" alt="" class=" h-96 rotate-3 rounded-md">
                  </div>
                  <div class="flex-1">
                    <div class="mt-4 ml-8">
                      <h1 class="text-4xl font-figree font-bold text-left stroke-2 text-sky-800">Objective</h1>
                      <div class="w-36 border-t-4 ml-2 border-sky-600 mb-4">
                        <h1 class="sr-only">Objective</h1>
                      </div>
                      <div class="mx-4 font-figree mt-4 space-y-8">
                        <dl class="ml-8">
                          <dt>
                            <h4 class="text-sky-700 font-semibold text-xl bg-sky-200 inline-block px-2 rounded-lg border border-sky-300 shadow-md">
                              <ArrowsPointingInIcon class="h-6 w-6"/>
                            </h4>
                          </dt>
                          <dd class="pt-2 px-4 bg-sky-100 border-b-4 border-sky-800 drop-shadow-md ">
                            <p class="text-sm py-2">
                              My name is <strong>Darwin Llacuna</strong> and I am an incoming graduate with a bachelor's degree in Computer Science Information Technology from Sti College Fairview.
                              I have honed my technical skills through various academic projects and freelance work.I am eager to bring my passion for technology and drive for success to a dynamic organization, where I can make a meaningful impact and continue to grow my skillset.
                            </p>
                          </dd>
                        </dl>
                        <dl class="ml-8">
                          <dt>
                            <h4 class="text-sky-700 font-semibold text-xl bg-sky-200 inline-block px-2 rounded-lg border border-sky-300 shadow-md">
                              <ArrowsPointingInIcon class="h-6 w-6"/>
                            </h4>
                          </dt>
                          <dd class="pt-2 px-4 bg-sky-100 border-b-4 border-sky-800 drop-shadow-md ">
                            <p class="text-sm py-2">
                              Developed a web application that allows users to track their spending habits.
                              Built a data visualization dashboard that analyzes customer behavior.
                            </p>
                          </dd>
                        </dl>
                        <dl class="ml-8">
                          <dt>
                            <h4 class="text-sky-700 font-semibold text-xl bg-sky-200 inline-block px-2 rounded-lg border border-sky-300 shadow-md">
                              <ArrowsPointingInIcon class="h-6 w-6"/>
                            </h4>
                          </dt>
                          <dd class="pt-2 px-4 bg-sky-100 border-b-4 border-sky-800 drop-shadow-md ">
                            <p class="text-sm py-2">
                              I am confident that my skills and experience make me a strong candidate for any programming role. I am eager to learn new things and contribute to a team that is making a difference in the world. Thank you for your time and consideration.
                            </p>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <!-- Education -->
            <TabPanel>
              <div class="bg-gradient-to-r from-slate-800 to-slate-700 flex justify-center items-center py-8 rounded-md">
                <div>
                    <div class="flex justify-center">
                      <CogIcon class="h-16 w-16 text-gray-500 animate-spin"/>
                    </div>
                    <h1 class="font-extrabold text-3xl text-gray-500 font-figree">Under Developing</h1>
                  </div>
              </div>
            </TabPanel>
            <!-- Skill -->
            <TabPanel>
              <div class="bg-gradient-to-r from-slate-800 to-slate-700 flex justify-center items-center py-8 rounded-md">
                <div>
                    <div class="flex justify-center">
                      <CogIcon class="h-16 w-16 text-gray-500 animate-spin"/>
                    </div>
                    <h1 class="font-extrabold text-3xl text-gray-500 font-figree">Under Developing</h1>
                  </div>
              </div>
            </TabPanel>
            <!-- Work experience -->
            <TabPanel>
              <div class="bg-gradient-to-r from-slate-800 to-slate-700 flex justify-center items-center py-8 rounded-md">
                <div>
                    <div class="flex justify-center">
                      <CogIcon class="h-16 w-16 text-gray-500 animate-spin"/>
                    </div>
                    <h1 class="font-extrabold text-3xl text-gray-500 font-figree">Under Developing</h1>
                  </div>
              </div>
            </TabPanel>
            <!-- Workstation -->
            <TabPanel>
              <div class="bg-gradient-to-r from-slate-800 to-slate-700 flex justify-center items-center py-8 rounded-md">
                <div>
                    <div class="flex justify-center">
                      <CogIcon class="h-16 w-16 text-gray-500 animate-spin"/>
                    </div>
                    <h1 class="font-extrabold text-3xl text-gray-500 font-figree">Under Developing</h1>
                  </div>
              </div>
            </TabPanel>
            <TabPanel>
              <Update/>
            </TabPanel>
          </TabPanels>
        </TabList>
      </div>
    </TabGroup>
  </div>
</template>
