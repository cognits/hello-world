IMAGE_NAME=$1
REGION=${AWS_REGION:-us-east-1}

docker tag hello-web:latest $IMAGE_NAME

aws_id=$( aws sts get-caller-identity --query 'Account' --output text )
if [ $? -ne 0 ]; then
    exit 1
fi

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $aws_id.dkr.ecr.us-east-1.amazonaws.com

docker push $IMAGE_NAME

docker rmi $IMAGE_NAME

