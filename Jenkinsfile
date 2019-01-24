pipeline {
    agent { docker { image 'node:8.10.0' } }
    stages {
        stage('build') {
            steps {
                sh './script/test'
            }
        }
    }
}