podTemplate(label: 'mypod', containers: [
        containerTemplate(name: 'maven', image: 'maven:3.3.9-jdk-8-alpine', ttyEnabled: true, command: 'cat'),
        containerTemplate(name: 'node', image: 'node:8.5.0-alpine', ttyEnabled: true, command: 'cat'),
]) {
    node('mypod') {

        stage('Build Project') {
            container('node') {

                def project = 'redirect-check-180020'
                def appName = 'redirect-check-reverseproxy'

                def svcName = "${appName}-service"

                def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

                checkout scm

                sh 'pwd'
                sh 'ls -lah'
                sh 'npm install'
            }
        }

        stage('Build Docker') {
            try {
                container('node') {
                    sh("docker build docker -t ${imageTag}")
                }
            } catch (Exception e) {
                containerLog 'mongo'
                throw e
            }
        }
    }
}