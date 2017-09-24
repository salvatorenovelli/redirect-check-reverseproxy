pipeline {
    agent {
        kubernetes {
            //cloud 'kubernetes'
            label 'mypod'
            containerTemplate {
                name 'maven'
                image 'maven:3.3.9-jdk-8-alpine'
                ttyEnabled true
                command 'cat'
            }
            containerTemplate {
                name 'node'
                image 'node:8.5.0-alpine'
                ttyEnabled true
                command 'cat'
            }
        }
    }
    stages {
        stage('Run maven') {
            steps {
                container('maven') {
                    sh 'mvn -version'
                }
            }
        }
        stage('Run node') {
            steps {
                container('node') {
                    sh 'yarn --version'
                }
            }
        }
    }
}

podTemplate(label: 'mypod', containers: [
        containerTemplate(name: 'maven', image: 'maven:3.3.9-jdk-8-alpine', ttyEnabled: true, command: 'cat'),
        containerTemplate(name: 'node', image: 'node:8.5.0-alpine', ttyEnabled: true, command: 'cat'),
]) {
    node('mypod') {

        stage('Run maven') {
            steps {
                container('maven') {
                    sh 'mvn -version'
                }
            }
        }
        stage('Run node') {
            steps {
                container('node') {
                    sh 'yarn --version'
                }
            }
        }

//        stage('Integration Test') {
//            try {
//                container('maven') {
//                    sh 'nc -z localhost:27017 && echo "connected to mongo db"'
//                    // sh 'mvn -B clean failsafe:integration-test' // real integration test
//
//                    def mongoLog = containerLog(name: 'mongo', returnLog: true, tailingLines: 5, sinceSeconds: 20, limitBytes: 50000)
//                    assert mongoLog.contains('connection accepted from 127.0.0.1:')
//                    sh 'echo failing build; false'
//                }
//            } catch (Exception e) {
//                containerLog 'mongo'
//                throw e
//            }
//        }
    }
}