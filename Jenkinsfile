//pipeline {
//    agent {
//        kubernetes {
//            //cloud 'kubernetes'
//            label 'mypod'
//            containerTemplate {
//                name 'maven'
//                image 'maven:3.3.9-jdk-8-alpine'
//                ttyEnabled true
//                command 'cat'
//            }
//            containerTemplate {
//                name 'node'
//                image 'node:8.5.0-alpine'
//                ttyEnabled true
//                command 'cat'
//            }
//        }
//    }
//    stages {
//        stage('Run maven') {
//            steps {
//                container('maven') {
//                    sh 'mvn -version'
//                }
//            }
//        }
//        stage('Run node') {
//            steps {
//                container('node') {
//                    sh 'yarn --version'
//                }
//            }
//        }
//    }
//}

podTemplate(label: 'mypod', containers: [
        containerTemplate(name: 'maven', image: 'maven:3.3.9-jdk-8-alpine', ttyEnabled: true, command: 'cat')
//        containerTemplate(name: 'node', image: 'node:8.5.0-alpine', ttyEnabled: true, command: 'cat'),
]) {
    node('mypod') {

//        stage('Run maven') {
//            steps {
//                container('maven') {
//                    sh 'mvn -version'
//                }
//            }
//        }
//        stage('Run node') {
//            steps {
//                container('node') {
//                    sh 'yarn --version'
//                }
//            }
//        }

        stage('Integration Test') {
            try {
                container('maven') {
                    sh 'mvn -version'
                }
            } catch (Exception e) {
                containerLog 'mongo'
                throw e
            }
        }
    }
}