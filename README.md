# IF27 project pentest web app

Welcome to this repo that hold our IF27 project. This project goal was for us to create in the first time a web service that would be vulnerable to attack such as SQL injection, Brute force, man in the middle ... In a second time the idea was to take this vulnerable service and to make it as bulletproof as possible. 

## The service

Our service is built over 3 sub-service which are mysql database, Node.JS API built with Express framework as a backend and finally a React app. This service is fully dockerized.

## Requirements
-Docker
-Node.JS v18 
-Express
-React 
-Mysql

## Install the project

To install and run the project locally you will need to install both the three micro-services on your laptop:
- install [mysql database](./Unsecured/backendSQL/README.MD)
- install [backend](./Unsecured/backendJavascript/README.MD)
- install [frontend ](./Unsecured/frontend/README.MD)