podTemplate(label: 'mypod', containers: [
        containerTemplate(name: 'maven', image: 'maven:3.3.9-jdk-8-alpine', ttyEnabled: true, command: 'cat'),
        containerTemplate(name: 'node', image: 'node:8.5.0-alpine', ttyEnabled: true, command: 'cat'),
]) {
    node('mypod') {

        def project = 'redirect-check-180020'
        def appName = 'redirect-check-reverseproxy'
        def svcName = "${appName}-service"
        def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

        stage('Build Project') {
            container('node') {

                checkout scm

                sh 'pwd'
                sh 'ls -lah'
                sh 'npm install'
            }
        }


    }
    node {
        stage('Build Docker') {

            sh 'pwd'
            sh 'ls -lah'
            sh("docker build docker -t ${imageTag}")

        }
    }
}