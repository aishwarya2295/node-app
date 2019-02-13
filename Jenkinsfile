pipeline {
    agent { 
        docker { 
            image 'node:8.10.0'
            args '-v /var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarQubeScanner:/var/jenkins_home/tools/hudson.plugins.sonar.SonarRunnerInstallation/SonarQubeScanner'
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'chmod 755 /var/jenkins_home/jobs/simple-node-js-app/branches/master/workspace/script/test.sh'
                sh './script/test.sh'
            }
        }
        stage('SonarQube Analysis'){
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps{
                withSonarQubeEnv('Sonar Qube'){
                    sh 'whoami'
                    sh 'sudo ${scannerHome}/bin/sonar-scanner -X'
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}