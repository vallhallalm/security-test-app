# SQL Backend 

## Installation
from root of project run 

```sh
    cd Unsecured/backendSQL
    docker-compose up
```

Now that your docker mysql container is up you can consult [your localhost on port 8080](http://localhost:8080)
On this port there is a UI for your mysql in which you have to authenticate. Base id and pwd should be root root
Now that you are authenticated you will try to execute sql query in the UI and most notably [these query](./populateDB.sql)
Normally your mysql database is ready to work