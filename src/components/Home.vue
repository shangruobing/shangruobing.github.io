<template>
  <div class="container">
    <h1 class="hello">Hello</h1>
    <p class="who">I am Ruobing Shang.</p>
    <p class="introduction">
      I am a software developer currently based in Suzhou. Concurrently, I am pursuing a master's degree in artificial
      intelligence. My research domain is Natural Language Processing (NLP), including Question-Answering, Knowledge
      Graph and Large Language Model (LLM).
    </p>
    <p class="introduction">
      I’m currently studying algorithms, AI and full stack development. I’m good at Python, Java and Typescript. I
      create websites with Vue.js and TypeScript, and develop backend systems with Spring and Java. Moreover, I use
      Python to complete my research projects and make some convenient scripts.
      <!-- Over the past four years, I have learned and mastered the following techniques: -->
    </p>

    <p class="introduction">
      I am eager to find like-minded software developers, to jointly explore the path of innovation and pursue technical
      excellence. In my view, teamwork and a shared vision are the keys to achieving outstanding projects. If you have
      any ideas, please contact me at
      <a href="mailto:shangruobing@gmail.com" class="email">shangruobing@gmail.com</a>
    </p>
    <!-- <div class="technologies">
      <div v-for="(technology, index) in technologies" :key="index" class="technology">
        {{ technology }}
      </div>
    </div> -->
    <p class="copyright">&copy; {{ new Date().getFullYear() }} Ruobing Shang. All rights reserved.</p>
    <vue-particles id="tsparticles" :options="options" class="particles" />
  </div>
</template>

<script setup lang="ts">
// const technologies = [
//   'Java',
//   'SQL',
//   'Gauss DB',
//   'Maria DB',
//   'Python',
//   'SQL Server',
//   'MySQL',
//   'Django',
//   'SQLite',
//   'C/C++',
//   'Nltk',
//   'Spacy',
//   'Neo4j',
//   'Scikit-learn',
//   'Numpy',
//   'Pandas',
//   'Tensorflow',
//   'Django REST framework',
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'JQuery',
//   'Vue.js',
//   'Vue Router',
//   'Vuex',
//   'Element Plus',
//   'Pinia',
//   'Scss',
//   'TypeScript',
//   'Springboot',
//   'Redis',
//   'RabbitMQ',
//   'Pytorch',
//   'Nginx',
//   'Linux',
//   'Spring Cloud',
//   'Huggingface',
//   'Elastic Search',
//   'Uni-app',
//   'Langchain',
//   'Flask',
//   'Shell',
//   'Docker',
//   'Latex'
// ]

// 检测暗黑模式偏好
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

const particlesColor = darkModeMediaQuery.matches ? '#ffffff' : '#2F3850'

const options = {
  autoplay: true,
  // background: {
  //   color: {
  //     value: '#2F3850'
  //   }
  // },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: particlesColor
    },
    links: {
      color: particlesColor,
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 4,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
}
</script>

<style scoped lang="scss">
$technology-border: 1px solid #eaecef;

// .particles {
// position: relative;
// height: calc(100vh - 60px);
// }

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

.technologies {
  display: grid;
  border-top: $technology-border;
  border-left: $technology-border;
  color: #606266;
  font-size: 14px;
  font-family: monospace;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
}

.technology {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  border-collapse: collapse;
  border-right: $technology-border;
  border-bottom: $technology-border;
  text-align: center;
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
</style>
