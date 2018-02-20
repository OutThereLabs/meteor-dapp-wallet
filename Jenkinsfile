try {
    timeout(time: 20, unit: 'MINUTES') {
        node('nodejs') {
            stage('build') {
                openshiftBuild(buildConfig: 'dapp-wallet', showBuildLogs: 'true')
            }
            stage('deploy') {
                openshiftDeploy(deploymentConfig: 'dapp-wallet')
            }
        }
    }
} catch (err) {
    echo "in catch block"
    echo "Caught: ${err}"
    currentBuild.result = 'FAILURE'
    throw err
}
