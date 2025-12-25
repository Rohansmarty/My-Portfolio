pipeline {
    agent any
    
    environment {
        GITHUB_REPO = 'Rohansmarty/My-Portfolio'
        DOCKER_IMAGE = 'my-portfolio'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from repository...'
                checkout scm
            }
        }
        
        stage('Validate') {
            steps {
                echo 'Validating HTML/CSS/JS files...'
                script {
                    // Check if required files exist
                    def requiredFiles = ['index.html', 'style.css', 'script.js']
                    requiredFiles.each { file ->
                        if (!fileExists(file)) {
                            error("Required file ${file} not found!")
                        }
                    }
                    echo 'All required files validated successfully'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.build("${DOCKER_IMAGE}:latest")
                }
            }
        }
        
        stage('Test Docker Container') {
            steps {
                echo 'Testing Docker container...'
                script {
                    def container = docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").run("-d -p 8080:80 --name portfolio-test")
                    sleep(time: 5, unit: 'SECONDS')
                    sh 'curl -f http://localhost:8080 || exit 1'
                    sh "docker stop ${container.id}"
                    sh "docker rm ${container.id}"
                }
            }
        }
        
        stage('Push to GitHub Pages') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to GitHub Pages...'
                script {
                    withCredentials([usernamePassword(credentialsId: 'github-credentials', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
                        sh '''
                            git config user.name "Jenkins"
                            git config user.email "jenkins@example.com"
                            git add .
                            git commit -m "Auto-deploy from Jenkins [${BUILD_NUMBER}]" || true
                            git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/${GITHUB_REPO}.git main || true
                        '''
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
            cleanWs()
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Cleaning up...'
        }
    }
}

