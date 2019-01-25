pipeline {
    agent { 
        docker { 
            image 'node:8.10.0'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh './script/test'
            }
        }
    }
}