<template>
    <div>
     <HeroSection />
     <AboutMe id="about-me"/>
     <SkillsShowcase id="skills"/>
     <BlogComponent id="blogs"/>  
     <ProjectsCard  id="projects"/>
    </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue"
import AboutMe from "../components/AboutMe.vue"
import SkillsShowcase from '../components/SkillsShowcase.vue'
import ProjectsCard from "../components/ProjectsCard.vue"
import BlogComponent from "../components/BlogComponent.vue"


</script>