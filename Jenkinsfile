node {
    stage('Build Docker') {

        sh 'apk add yarn'
        sh 'ls -lah'
        sh("docker build docker -t ${imageTag}")

    }
}
