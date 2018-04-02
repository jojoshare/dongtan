工具软件：
node（npm）、mongodb(robomongdb)、pm2、sublime、webstorm、TortoiseGit（GitHub）、secureCRT、FileZilla、


【启动数据库】sh /app/mongodb/startMongoDB.sh
【启动node应用】pm2 start /app/nodeapp/app.json 
【查看进程】 ps -ef | grep node
【杀死进程】 kill -9 pid


【导入CSV】
student.csv 用Sublime->文件->保存编码->UTF-8 包含BOM(每次都要提前保存编码)
/app/mongodb/mongodb-linux-x86_64-3.0.6/bin/mongoimport -h 127.0.0.1 --port 27017 -d dongtan -c reserve --type csv --headerline --file /app/mongodb/dbdata/student.csv

【导出CSV】
mongoexport -h 127.0.0.1 --port 27017 --db dongtan --collection test -f userid,name --type csv  --out ./test.csv

【ssh用户】
ssh -p 22 node@122.152.208.129     


node Huibao12346


