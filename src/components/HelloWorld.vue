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
      Python to complete my research projects and make some convenient scripts. Over the past four years, I have learned
      and mastered the following techniques:
    </p>
    <div class="technologies">
      <div v-for="(technology, index) in technologies" :key="index" class="technology">
        {{ technology }}
      </div>
    </div>
    <p class="copyright">&copy; 2023 Ruobing Shang. All rights reserved.</p>
  </div>
</template>

<script setup lang="ts">
const technologies = [
  'Java',
  'SQL',
  'Gauss DB',
  'Maria DB',
  'Python',
  'SQL Server',
  'MySQL',
  'Django',
  'SQLite',
  'C/C++',
  'Nltk',
  'Spacy',
  'Neo4j',
  'Scikit-learn',
  'Numpy',
  'Pandas',
  'Tensorflow',
  'Django REST framework',
  'HTML',
  'CSS',
  'JavaScript',
  'JQuery',
  'Vue.js',
  'Vue Router',
  'Vuex',
  'Element Plus',
  'Pinia',
  'Scss',
  'TypeScript',
  'Springboot',
  'Redis',
  'RabbitMQ',
  'Pytorch',
  'Nginx',
  'Linux',
  'Spring Cloud',
  'Huggingface',
  'Elastic Search',
  'Uni-app',
  'Langchain',
  'Flask',
  'Shell',
  'Docker',
  'Latex'
]
</script>

<style scoped lang="scss">
$technology-border: 1px solid #eaecef;
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

.introduction {
  color: #606266;
  font-size: 20px;
  font-family: 'Comic Sans MS';
  line-height: 30px;
}

@font-face {
  font-family: 'Comic Sans MS';
  src: url('/src/fonts/Comic Sans MS.ttf');
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

.copyright {
  color: #909399;
  text-align: center;
  font-size: 12px;
  margin-top: 22px;
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: #343540;
    color: white;
  }

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
}
</style>
