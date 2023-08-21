<script setup>

</script>

<template>
    <section id="home"
             class="lg:h-[85vh] flex items-center bg-light-primary dark:bg-dark-primary py-32 lg:py-0 overflow-hidden">
        <div
            class=" mx-auto h-full"
            v-motion
            :initial="{
           opacity: 0,
           y: 100,
        }"
            :visible="{
           opacity: 1,
           y: 0,
        }"
        >
            <div class="flex flex-col md:flex-row items-center h-full">
                <div class="flex-1 flex flex-col items-center mt-28">
                    <p class="text-lg text-accentColor text-md mb-[22px]">
                        Hey, I'm Josua! 👋
                    </p>
                    <h1 class="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
                        I Build & Design <br/> Web Interface
                    </h1>
                    <p class="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
                        I build and design web interfaces that combine functionality with captivating aesthetics. My
                        goal is to take
                        ideas from conception to digital reality, creating solutions that are not only beautiful to look
                        at, but
                        also intuitive and efficient.
                    </p>
                    <button
                        class="rounded-xl btn btn-md text-white bg-accentColor md:btn-lg transition-all">
                        Work with me
                    </button>
                    <div class="pt-12">
                        <h5 class="text-lg flex justify-center lg:justify-start items-center text-black dark:text-white mb-2">
                            Follow me on
                        </h5>
                        <div class="flex items-center mb-6">
                            <a href="https://github.com/JosuaPerez?tab=repositories"
                               target="_blank"
                               class="
                                  w-12
                                  h-12
                                  rounded-full
                                  flex
                                  items-center
                                  justify-center
                                  text-dark-navy-500
                                  hover:bg-light-secondary
                                  dark:bg-light-secondary
                                  dark:hover:bg-gray-200
                                  mr-3
                                  sm:mr-4"
                            >
                                <img class="w-10 h-10 rounded-lg" src="http://portfolio-app.test/img/github-mark.png"
                                     alt="Logo github">
                            </a>
                            <a href="https://twitter.com/josuaperez_"
                               target="_blank"
                               class="
                                  w-12
                                  h-12
                                  rounded-lg
                                  flex
                                  items-center
                                  justify-center
                                  text-dark-navy-500
                                  hover:bg-light-secondary
                                  dark:bg-light-secondary
                                  dark:hover:bg-gray-200
                                  mr-3
                                  sm:mr-4"
                            >
                                <img class="w-10 h-10 rounded-lg" src="http://portfolio-app.test/img/x-logo.jpeg"
                                     alt="Logo twitter">
                            </a>
                            <a href="https://www.linkedin.com/in/josuaperez/"
                               target="_blank"
                               class="
                                  w-12
                                  h-12
                                  rounded-lg
                                  flex
                                  items-center
                                  justify-center
                                  text-dark-navy-500
                                  hover:bg-light-secondary
                                  dark:bg-light-secondary
                                  dark:hover:bg-gray-200
                                  mr-3
                                  sm:mr-4"
                            >
                                <img src="http://portfolio-app.test/img/linkedin-logo.png" alt="Logo Linkedin">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 justify-end items-center mt-8 md:mt-0">
                    <img src="http://portfolio-app.test/img/hero.jpg" alt="Hero"/>
                </div>
            </div>
        </div>
    </section>
</template>
