podTemplate(label: 'mypod', containers: [
        containerTemplate(name: 'maven', image: 'maven:3.3.9-jdk-8-alpine', ttyEnabled: true, command: 'cat'),
        containerTemplate(name: 'node', image: 'node:8.5.0-alpine', ttyEnabled: true, command: 'cat'),
]) {
    node('mypod') {

        stage('Build Project') {
            container('node') {
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