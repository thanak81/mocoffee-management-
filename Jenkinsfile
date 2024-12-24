pipeline {
    agent any;
    stages {
        stage ("Clean Workspace"){
            steps{ 
                cleanWs()
            }
        }
        stage ("Checkout SCM"){
            steps {
                git branch: "main", credentialsId: "github", url: "https://github.com/thanak81/mocoffee-management-.git"
            }
        }
        stage ("Build"){
            steps{
                
            }
        }
        stage ("Test"){
            steps{

            }
        }
        stage ("Deploy"){
            steps{

            }
        }
    }
}