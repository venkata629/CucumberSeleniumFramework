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

            stage ('Cucumber Reports') {

                Steps {
                      Cucumber buildstatus :"UNSTABLE",
                          fileIncludePattren : "**/index.html",
                           htmlReportDirectory : 'test-outout'  
                       } 
                   }
           } 
   }
