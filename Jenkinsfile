node {
    def project = 'redirect-check-180020'
    def appName = 'redirect-check-reverseproxy'

    def svcName = "${appName}-service"

    def imageTag = "gcr.io/${project}/${appName}:${env.BRANCH_NAME}.${env.BUILD_NUMBER}"

    checkout scm

    stage 'Build image'
    sh("docker build . -t ${imageTag}")

    stage 'Push image to registry'
    sh("gcloud docker -- push ${imageTag}")

    stage "Deploy Application"
    sh("sed -i.bak 's#<IMAGE_TAG_DO_NOT_EDIT>#${imageTag}#' k8s/production.yaml")
    sh("cat k8s/production.yaml")
    //sh("kubectl --namespace=default apply -f k8s/production.yaml")

}