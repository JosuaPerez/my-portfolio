<script setup>
import { Head, Link } from '@inertiajs/vue3';
import FrontendLayout from "@/Layouts/FrontendLayout.vue";
import Hero from "@/Components/Frontend/Hero.vue";
import Promote from "@/Components/Frontend/Promote.vue";
import About from "@/Components/Frontend/About.vue";


</script>

<template>
    <Head title="Welcome to portfolio" />
    <FrontendLayout>
    <!-- Hero primary -->
        <Hero />
    <!-- Promote tail-100 -->
        <Promote />
    <!-- About secondary -->
        <About />
    <!-- Skill tail 100 -->
    <!-- Portfolio primary -->
    <!-- Services secondary -->
    <!-- Contact primary -->
    </FrontendLayout>
</template>
