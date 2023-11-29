<template>
  <div class="container">
    <h1 class="hello">Hello</h1>
    <p class="who">I am Ruobing Shang.</p>
    <p class="introduction">
      I am an software developer currently based in Suzhou.I am currently pursuing a master's degree in artificial
      intelligence. My research interests are natural language processing, knowledge graph, LLM. If you're interested,
      please contact me at shangruobing29@gmail.com.
    </p>
    <p class="introduction">
      🌱 I’m currently learning AI and full stack development. 👯 I’m looking to collaborate on development and
      research. 🤔 I’m looking for help with Chatbot, Microservice and English. 💬 Ask me about Information Management
      and Information System. 👍 I’m good at Python, Java and Typescript. 📫 How to reach me: shangruobing29@163.com
    </p>
    <p class="introduction">Over the past few years, I have learned and mastered the following techniques:</p>
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
  'nltk',
  'spacy',
  'Neo4j',
  'scikit-learn',
  'numpy',
  'pandas',
  'tensorflow',
  'Django REST framework',
  'HTML',
  'CSS',
  'JavaScript',
  'JQuery',
  'Vue.js',
  'TypeScript',
  'Springboot',
  'Redis',
  'RabbitMQ',
  'pytorch',
  'nginx',
  'linux',
  'spring-cloud',
  'huggingface',
  'Elastic search',
  'uni-app',
  'langchain',
  'flask',
  'shell',
  'docker',
  'Latex'
]
</script>

<style scoped lang="scss">
$technology-border: 1px solid #eaecef;
.container {
  padding: 60px;
  // text-align: center;
  // display: flex;
  // flex-direction: column;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 30px;
  }
}

.hello {
  font-size: 60px;
  color: #303133;
}

.who {
  font-size: 30px;
  font-weight: 600;
  color: #303133;
}

.introduction {
  font-size: 20px;
  line-height: 30px;
  font-family: 'Comic Sans MS';
  color: #606266;
}

.technologies {
  // display: grid;
  display: flex;
  // grid-template-columns: repeat(7,1fr);
  flex-wrap: wrap;
  // border-top: $technology-border;
  // border-left: $technology-border;
  font-size: 14px;
  font-family: monospace;
  // color: gray;
  color: #606266;
  justify-content: center;
}

.technology {
  height: 60px;
  width: 100px;
  border: $technology-border;
  // border-bottom: $technology-border;
  // background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  // height: 100%;
  // cursor: pointer;
}

.copyright {
  color: #909399;
  font-size: 12px;
  text-align: center;
}
</style>
