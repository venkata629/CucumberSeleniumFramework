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
                 }

            stage ('Reporting Stage') {

                Steps {
                     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'Coverage', reportFiles: 'index.html', reportName: 'Cucumber HTML Report', reportTitles: ''])
                       } 
                   }
           } 
   }
