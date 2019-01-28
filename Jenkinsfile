pipeline {
    agent { 
        docker { 
            image 'node:8.10.0'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'chmod 755 /var/jenkins_home/jobs/simple-node-js-app/branches/master/workspace/script/test.sh'
                sh './script/test.sh'
            }
        }
    }
}