Storybook

Docker image with React project

Step 1. Download the project from this repository, it contains the React app and the dockerfiles necessary to create the docker image.

Step 2. Inside the project's folder in the command prompt use the next command:

    docker build -t assignment12:latest .

Step 3. Once the process is finished, use this command:

    docker run --name assignment12 -d -p 8083:3000 helloworld:latest
