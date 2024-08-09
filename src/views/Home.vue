<template>
  <div class="container">
    <h1 class="hello">Hello</h1>
    <p class="who">I am Ruobing Shang.</p>
    <p class="introduction">
      I am a software developer currently based in Suzhou. Concurrently, I am pursuing a master's degree in Artificial
      Intelligence. My research domain is Natural Language Processing (NLP), including Code Generation, Question
      Answering, Knowledge Graph and Large Language Model (LLM).
    </p>
    <p class="introduction">
      I’m currently studying AI and full stack development. I’m good at Python, Java and Typescript. I
      create websites with Vue.js and TypeScript, and develop backend systems with Spring and Java. Moreover, I use
      Python to complete my research projects and make some convenient scripts. You’re welcome to explore my
      repositories on
      <a href="https://github.com/shangruobing" target="_blank" class="email">GitHub</a>.
    </p>

    <p class="introduction">
      I am eager to find like-minded software developers, to jointly explore the path of innovation and pursue technical
      excellence. In my view, teamwork and a shared vision are the keys to achieving outstanding projects. If you have
      any ideas, please contact me at
      <a href="mailto:shangruobing29@gmail.com" class="email">shangruobing29@gmail.com</a>
    </p>

    <p class="copyright">&copy; {{ new Date().getFullYear() }} Ruobing Shang. All rights reserved.</p>
    <vue-particles v-if="isDarkMode" id="tsparticles" :options="darkOptions" />
    <vue-particles v-else id="tsparticles" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getParticlesOption } from '@/config'

// 检测暗黑模式偏好
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const isDarkMode = ref(darkModeMediaQuery.matches)

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})

const options = getParticlesOption('#2F3850')
const darkOptions = getParticlesOption('#FFFFFF')
</script>

<style scoped lang="scss">
.container {
  padding: 60px 120px;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 30px;
  }
}

.hello {
  color: #303133;
  font-size: 60px;
}

.who {
  color: #303133;
  font-weight: 600;
  font-size: 30px;
}

@font-face {
  font-family: 'Comic Sans MS';
  src: local('Comic Sans MS'), url('../fonts/Comic Sans MS.ttf');
  font-display: swap;
}

.introduction {
  color: #606266;
  font-size: 20px;
  font-family: 'Comic Sans MS';
  line-height: 30px;
}

.email {
  color: #606266;
  font-style: italic;
}

.copyright {
  color: #909399;
  text-align: center;
  font-size: 12px;
  margin-top: 32px;
}

@media (prefers-color-scheme: dark) {
  .hello,
  .who {
    color: #e6e8eb;
  }

  .introduction {
    color: #ebedf0;
  }

  .technologies {
    color: #f0f2f5;
  }

  .email {
    color: #f0f2f5;
  }
}

@media screen and (min-width: 1400px) {
  .container {
    padding: 100px 400px !important;
  }
}
</style>
