pipeline {
    agent { 
        docker { 
            image 'node:8.10.0'
            args '-e JAVA_HOME=/usr/lib/jvm/java-8-oracle -e PATH=$PATH:/usr/lib/jvm/java-8-oracle/bin:/usr/lib/jvm/java-8-oracle/jre/bin -v /usr/bin/docker:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock -v /usr/lib/jvm/java-8-oracle/:/usr/lib/jvm/java-8-oracle/'
        } 
    }
    stages {
        stage('build') {
            steps {
                // sh 'chmod 755 /var/jenkins_home/jobs/simple-node-js-app/branches/master/workspace/script/test.sh'
                // sh './script/test.sh'
                sh 'npm install'
            }
        }
        stage('Download WS Script') {
            steps{
                sh 'curl -LJO https://github.com/whitesource/unified-agent-distribution/raw/master/standAlone/wss_agent.sh'
            }
        }
 
        stage('Run WS Script') {
            steps{
                sh "pwd"
                sh "ls"
                sh "chmod 755 wss_agent.sh"
                sh 'wss_agent.sh -apiKey 0a3e334c3ba64576810d382cc03d97b12959d72dd96c4356bcae8a1031d0fc4c -c ./wss-unified-agent.config -project DigitalLocker -d ./'
            }
        }
        stage('Run Tests'){
            parallel{
                stage('Test 1') {
                    steps {
                        sh './node_modules/.bin/mocha ./test/test.js'
                    }
                }
                stage('Test 2') {
                    steps {
                        sh './node_modules/.bin/mocha ./test/test1.js'
                    }
                }
            }
        }
        stage('SonarQube Analysis'){
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps{

                withSonarQubeEnv('SonarQube'){
                    sh '${scannerHome}/bin/sonar-scanner'
                }
                timeout(time: 10, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}