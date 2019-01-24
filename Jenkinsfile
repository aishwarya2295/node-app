pipeline {
    agent { 
        docker { 
            image 'node:8.10.0'
            args '-w /c/Users/aishwarya_kudalkar/.jenkins/workspace/Hello-World_Pipeline_master -v /c/Users/aishwarya_kudalkar/.jenkins/workspace/Hello-World_Pipeline_master:/c/Users/aishwarya_kudalkar/.jenkins/workspace/Hello-World_Pipeline_master:rw,z -v /c/Users/aishwarya_kudalkar/.jenkins/workspace/Hello-World_Pipeline_master@tmp:/c/Users/aishwarya_kudalkar/.jenkins/workspace/Hello-World_Pipeline_master@tmp:rw'
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