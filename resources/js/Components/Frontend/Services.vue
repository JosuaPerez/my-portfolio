<script setup>

</script>

<template>
  <section id="services" class="section bg-light-secondary dark:bg-dark-secondary">
    <div
        class="container mx-auto"
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
      <div class="flex flex-col items-center text-center">
        <h2 class="section-title">What I do for clients?</h2>
        <p class="subtitle">
          As a passionate Fullstack engineer with a keen eye for design, I bring a holistic approach to
          crafting
          exceptional digital experiences. My role goes beyond mere coding; I create comprehensive solutions
          that
          seamlessly integrate backend and frontend components. Whether you're a startup seeking a dynamic web
          presence
          or an established business looking to enhance user engagement, here's what I bring to the table.
        </p>
      </div>

      <div class="grid lg:grid-cols-4 gap-8">
        <div class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl">
          <div
              class="text-accentColor rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-24 h-24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
            </svg>

          </div>
          <h4 class="text-xl font-medium mb-2">End-to-End Development:</h4>
          <p>
            From conceptualization to deployment, I handle the entire development lifecycle. My
            expertise spans backend technologies like Laravel, as well as frontend frameworks such as
            Vue.js. This
            allows me to build feature-rich applications that are both robust and user-friendly.
          </p>
        </div>
        <div class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl">
          <div
              class="text-accentColor rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
            <svg fill="none" stroke="currentColor" class="w-24 h-24" stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"></path>
            </svg>

          </div>
          <h4 class="text-xl font-medium mb-2">Design-Driven Development:</h4>
          <p>
            I believe in the power of design to elevate digital experiences. Combining my development skills
            with an eye
            for aesthetics, I create interfaces that not only function flawlessly but also captivate users
            with their
            visual appeal. Every line of code is written with the user's journey in mind.
          </p>
        </div>
        <div class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl">
          <div
              class="text-accentColor rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-24 h-24">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"/>
            </svg>

          </div>
          <h4 class="text-xl font-medium mb-2">Results that Matter:</h4>
          <p>
            Your success is my top priority. I collaborate closely with clients to understand their goals
            and translate
            them into tangible results. I'm dedicated to delivering solutions that not only meet
            expectations but exceed
            them, whether it's increased conversions, improved user retention, or enhanced brand visibility.
          </p>
        </div>
        <div class="bg-light-tail-100 dark:bg-dark-navy-500 p-6 rounded-2xl">
          <div
              class="text-accentColor rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
            <svg fill="none" stroke="currentColor" class="w-24 h-24" stroke-width="1.5" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
            </svg>

          </div>
          <h4 class="text-xl font-medium mb-2">Constant Learning:</h4>
          <p>
            In the fast-paced world of technology, I'm always eager to stay ahead of the curve. I
            continuously explore
            new tools, libraries, and best practices to ensure that the solutions I deliver are cutting-edge
            and
            innovative.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
