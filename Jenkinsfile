pipeline {
    agent any 
    stages {
        stage('Compile Stage') { 
            steps {
                withMaven(MavenDemo : 'maven_3_6_3'){
                sh 'mvn clean compile'
                
            }
        }
        stage('Testing Stage') { 
            steps {
               withMaven(MavenDemo : 'maven_3_6_3'){
                sh 'mvn test'
                 
            }
        }
        stage('Deploy Stage') { 
            steps {
                withMaven(MavenDemo : 'maven_3_6_3'){
                sh 'mvn deploy' 
            }
        }
    }
}