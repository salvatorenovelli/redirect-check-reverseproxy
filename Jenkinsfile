node {
    def project = 'redirect-check-180020'
    def appName = 'redirect-check-reverseproxy'

    def svcName = "${appName}-service"

    def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

    checkout scm

    stage 'Build image'
    sh("node --version")
    sh("docker build . -t ${imageTag}")

}
