<script setup>

</script>

<template>
  <section id="about" class="section bg-light-secondary dark:bg-dark-secondary">
    <div class="container mx-auto">
      <div class="flex flex-col xl:flex-row gap-24">
        <img
            class="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src="http://portfolio-app.test/img/hero.jpg"
            alt="About"
        />
        <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div class="flex flex-col">
            <h2 class="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3">
              About me
            </h2>
            <p class="mb-4 text-accentColor">
              FullStack Developer
            </p>
            <hr class="mb-8 opacity-90 dark:opacity-5"/>
            <p class="mb-8">A passionate web experience designer with a focus on the marriage of function and beauty. My
              goal is to create web interfaces that are not only visually stunning, but also deliver an exceptional user
              experience. <br/>
              <br/>
              From the moment an idea takes shape in my mind to its online implementation, I am dedicated to
              turning concepts into stunning digital realities.</p>
          </div>

          <a href="#contact" class="btn btn-md bg-accentColor text-white rounded-xl">
            Contact me
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
