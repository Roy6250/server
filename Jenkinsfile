pipeline {
  agent any
    
  
    
  stages {
        
    stage('Build') {
      steps {
        sh 'docker build -t jen .'
      }
    }

    stage('Test') {
      steps {
        sh 'yarn install'
        sh 'yarn test'
      }
    }

     stage('Deploy') {
      steps {
          sh 'docker stop jen-container1'
          sh 'docker rm jen-container1'
          sh 'docker run -d --name jen-container1 -p 5000:5000 jen'
      }
    }
     
   
  }
}
