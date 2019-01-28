pipeline {
    agent { 
        docker { 
            image 'node:8.10.0'
            args '-v /var/run/docker.sock:/var/run/docker.sock -w /c/Users/aishwarya_kudalkar/.jenkins/workspace/Hello-World_Pipeline_master'
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