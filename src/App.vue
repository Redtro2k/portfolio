<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot } from '@headlessui/vue'
import { ArrowsPointingInIcon, CogIcon, ChevronDoubleUpIcon } from '@heroicons/vue/24/solid'
import Update from './components/Update.vue'
import EducationList from './components/EducationList.vue'
import TechnicalSkill from './components/TechnicalSkill.vue'
import Experience from './components/Experience.vue'
import { ref } from 'vue'
import WorkStation from './components/WorkStation.vue'
const isOpen = ref(false)
</script>
<template>
  <!-- <div class="bg-gray-100 h-screen bg-gradient-to-r from-gray-100 to-slate-100"> -->
  <!-- <div class="bg-[url('src/assets/desktop.jpg')]"> -->
  <div class="bg-[url('desktop-34d5cee8.jpg')]">
    <img src="./assets/desktop.jpg" class="saturate-50 h-1/2 drop-shadow-md sr-only"/>

    <TabGroup :defaultIndex="0">
      <div class="mx-48 h-screen">
        <!-- navigation -->
        <div class="p-2 mx-14 flex items-center justify-between">
          <h1 class="leading-loose tracking-2 text-6xl text-white font-belanosima">
            <span class="font-bold text-cyan-400 drop-shadow-lg">D</span>
            <span class="text-xl text-sky-500 font-semibold drop-shadow-lg">L</span>
          </h1>
          <TabList
            class="flex space-x-4 border-solid border px-4 py-2 rounded-full shadow-md font-figree text-sm text-white"
          >
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Home
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Objective
              </button>
            </Tab>
            <!-- <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Education
              </button>
            </Tab> -->
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Skill
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Work Experience
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Workstation
              </button>
            </Tab>
            <!-- <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Certifi & Projects
              </button>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'font-bold text-emerald-300 border-b-2 border-emerald-300': selected,
                  'hover:text-emerald-200 ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300':
                    !selected
                }"
              >
                Updates
              </button>
            </Tab> -->
          </TabList>
        </div>

        <!-- main content -->
        <TabList>
          <TabPanels class="mx-24">
            <!-- Home -->
            <TabPanel>
              <div class="flex items-center bg-gradient-to-r from-indigo-500 via-cyran-500 to-sky-500 rounded-full mt-24">
                <img src="./assets/darwin.png" class="saturate-50 lx:h-[rem] 2xl:h-xl drop-shadow-md" alt="" />
                <div class="mx-4 mt-14 max-w-md text-left font-belanosima space-y-2">
                  <div class="border-t-8 w-32">
                    <h1 class="sr-only">Darwin llacuna</h1>
                  </div>
                  <h5 class="uppercase font-semibold text-sky-300">Hey there</h5>
                  <h2 class="text-5xl font-semibold text-gray-50 drop-shadow-lg animate-bounce">
                    <span class="font-light">I</span>'m
                    <span class="text-emerald-500 stroke-1">D</span>arwin Llacuna
                  </h2>
                  <h3 class="font-semibold text-sky-300">
                    A Web Developer with a passion for creating beautiful and functional websites.
                  </h3>
                  <span class="text-sm text-indigo-100 font-figree"
                    >I am a fresh graduate student who graduated from STI College Fairview. I have
                    experience creating full-stack websites such as CMS and Portal.
                  </span>
                  <span class="text-sm text-gray-300">I will do my best to use my skills to help grow your company. I am also committed to improving myself and maximizing my capabilities. It has been an honor to work with you. I would be honored to have the chance to be one of your candidates.</span>
                  <ul class="flex space-x-4">
                    <li>
                      <a href="https://www.facebook.com/darwin.llacuna">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          class="bi bi-facebook h-7 w-7 text-gray-200 hover:text-sky-400 hover:opacity-75 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
                          class="bi bi-github h-7 w-7 text-gray-200 hover:text-gray-700 hover:opacity-75 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
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
              <div
                class="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md px-28 py-10"
              >
                <div class="flex items-center">
                  <div class="m-4 bg-slate-200 rounded-md drop-shadow-md">
                    <img src="./assets/DarwinLlacuna.jpg" alt="" class="h-96 rotate-3 rounded-md" />
                  </div>
                  <div class="flex-1">
                    <div class="mt-4 ml-8">
                      <h1 class="text-4xl font-figree font-bold text-left stroke-2 text-sky-800">
                        Objective
                      </h1>
                      <div class="w-36 border-t-4 ml-2 border-sky-600 mb-4">
                        <h1 class="sr-only">Objective</h1>
                      </div>
                      <div class="mx-4 font-figree mt-4 space-y-8">
                        <dl class="ml-8">
                          <dt>
                            <h4
                              class="text-sky-700 font-semibold text-xl bg-sky-200 inline-block px-2 rounded-lg border border-sky-300 shadow-md"
                            >
                              <ArrowsPointingInIcon class="h-6 w-6" />
                            </h4>
                          </dt>
                          <dd class="pt-2 px-4 bg-sky-100 border-b-4 border-sky-800 drop-shadow-md">
                            <p class="text-sm py-2">
                              My name is <strong>Darwin Llacuna</strong> and I am an incoming
                              graduate with a bachelor's degree in Computer Science Information
                              Technology from Sti College Fairview. I have honed my technical skills
                              through various academic projects and freelance work.I am eager to
                              bring my passion for technology and drive for success to a dynamic
                              organization, where I can make a meaningful impact and continue to
                              grow my skillset.
                            </p>
                          </dd>
                        </dl>
                        <dl class="ml-8">
                          <dt>
                            <h4
                              class="text-sky-700 font-semibold text-xl bg-sky-200 inline-block px-2 rounded-lg border border-sky-300 shadow-md"
                            >
                              <ArrowsPointingInIcon class="h-6 w-6" />
                            </h4>
                          </dt>
                          <dd class="pt-2 px-4 bg-sky-100 border-b-4 border-sky-800 drop-shadow-md">
                            <p class="text-sm py-2">
                              Developed a web application that allows users to track their spending
                              habits. Built a data visualization dashboard that analyzes customer
                              behavior.
                            </p>
                          </dd>
                        </dl>
                        <dl class="ml-8">
                          <dt>
                            <h4
                              class="text-sky-700 font-semibold text-xl bg-sky-200 inline-block px-2 rounded-lg border border-sky-300 shadow-md"
                            >
                              <ArrowsPointingInIcon class="h-6 w-6" />
                            </h4>
                          </dt>
                          <dd class="pt-2 px-4 bg-sky-100 border-b-4 border-sky-800 drop-shadow-md">
                            <p class="text-sm py-2">
                              I am confident that my skills and experience make me a strong
                              candidate for any programming role. I am eager to learn new things and
                              contribute to a team that is making a difference in the world. Thank
                              you for your time and consideration.
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
            <!-- <TabPanel>
              <div class="flex space-x-8 items-start">
                <div class="bg-amber-500 rounded-lg inline-block">
                  <img src="./assets/fairview.jpg" class="h-72 rounded-md shadow-md rotate-6"/>
                  <div class="bg-white rounded-b-md"><small class="text-amber-800 font-figma font-bold px-2">The actual building of sti college fairview</small></div>
                </div>
                <div>
                  <h1 class="font-figree text-5xl font-semibold text-amber-500">Education</h1>
                  <button @click.prevent="isOpen = !isOpen" class="text-white font-semibold text-ms mt-2 font-figree bg-yellow-500 px-2 rounded-md shadow-lg">
                    {{ isOpen ? 'Close' : 'View Info' }}
                  </button>
                  <TransitionRoot :show="isOpen"
                    enter="transition-opacity duration-75"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="transition-opacity duration-150"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                      >
                    <div class="bg-amber-100 mt-4 border-l-4 border-amber-500 px-4 py-2 drop-shadow-md transition duration-150 ease-in-out">
                      <p class="text-sm max-w-lg font-figree prose-neutral">
                        STI College is a Philippine school system known for its educational programs in information technology and business. STI was founded as the Systems Technology Institute College in 1983 by four entrepreneurs: Augusto C. Lagman, Herman T. Gamboa, Benjamin A. Santos, and Edgar H. Sarte. The founders established the institute to provide training in programming for those interested in becoming computer professionals. Aside from its computer programs, STI is known for developing job-ready students. In its early years, it had a Guaranteed Hire Program that gives STI graduates the advantage of being employed by any of the four founders or by contact companies of the school.
                      </p>
                    </div>
                  </TransitionRoot>
                </div>
              </div>
              <EducationList class="mt-8"/>
            </TabPanel> -->
            <!-- Skill -->
            <TabPanel>
              <h2 class="text-4xl font-figree text-gray-100 mb-4">Technical Skill</h2>
              <TechnicalSkill/>
              <h1 class="text-4xl font-figree text-gray-100 my-4">Specialize Skill</h1>
              <div class="flex justify-between space-x-4">
                <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-md border-b-4 border-l-4 border-cyan-600 font-figree text-sm text-slate-100 shadow-md">
                  <ul class="space-y-2 leading-4 pt-2">
                    <li>Proficient in: Java, JavaScript, and SQL, MYSQL, PHP, C#. included Android and asp .NET WEB API.</li>
                    <li>Experience with: React, Vue.js, Node.js, Laravel, and Bootstrap and Tailwind CSS frameworks.</li>
                    <li>Knowledge of: HTML, CSS, and JavaScript (ES6+)</li>
                    <li>had Experienced a bit of Docker</li>
                    <li>Proficient in using GitHub and a bit knowledge agile methodology.</li>
                    <li>Knowledgeable in Figma and adobe UX design.</li>
                  </ul>
                </div>
                <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-md border-b-4 border-r-4 border-cyan-600 font-figree text-sm text-slate-100 shadow-md">
                  <ul class="space-y-2 leading-4 pt-2">
                    <li>Experience with RESTful API development and integrations using Node.js/PHP back-end.</li>
                    <li>I have had a significant amount of experience implementing packages using Node.js.</li>
                    <li>I have experience in deploying websites, including maintaining the associated databases.</li>
                    <li>Strong database design and management skills, including MySQL and a bit knowledge PostgreSQL.</li>
                    <li>Understand the SOLID principles method.</li>
                    <li>Can troubleshoot, devices, like laptop, and PC.</li>
                  </ul>
                </div>
              </div>
            </TabPanel>
            <!-- Work experience -->
            <TabPanel>
              <Experience />
            </TabPanel>
            <!-- Workstation -->
            <TabPanel>
              <WorkStation />
            </TabPanel>
            <!-- Certfi & Projects -->
            <TabPanel>
              <div
                class="bg-gradient-to-r from-slate-800 to-slate-700 flex justify-center items-center py-8 rounded-md"
              >
                <div>
                  <div class="flex justify-center">
                    <CogIcon class="h-16 w-16 text-gray-500 animate-spin" />
                  </div>
                  <h1 class="font-semibold text-3xl text-gray-500 font-figree">
                    Under Development
                  </h1>
                </div>
              </div>
            </TabPanel>
            <!-- Update -->
            <TabPanel>
              <Update />
            </TabPanel>
          </TabPanels>
        </TabList>
      </div>
    </TabGroup>
  </div>
</template>
