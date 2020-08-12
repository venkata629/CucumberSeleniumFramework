pipeline {
    agent any

    stages {
        stage ('Compile Stage') {

            steps {
                   bat 'mvn clean compile'
                  }
            }

        stage ('Testing Stage') {

            steps {
                   bat 'mvn test'
                  }
            
            Steps {
             
                 publishHTML (target: [
                 allowMissing: false,
                 alwaysLinkToLastBuild: false,
                 keepAll: true,
                 reportDir: 'coverage',
                 reportFiles: 'index.html',
                 reportName: "Cucumber Report"
                            ])
                } 
            }
    } 
    
}
