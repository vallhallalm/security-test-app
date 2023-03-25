# Javascript Backend

## Installation

Verify your [conf file](./conf.json) so that port and host match the one from the mysql container.
When these parameter match, from the root of the project, run :

```sh
    cd Unsecured/backendJavascript
    npm i 
    npm start
```

## Special note 

When updating code for this service you will need to restart the service. For this purpose in the same terminal in which you started the service run 

```sh 
    ctrl+c
    npm start
```