���������
node��npm����mongodb(robomongdb)��pm2��sublime��webstorm��TortoiseGit��GitHub����secureCRT��FileZilla��


���������ݿ⡿sh /app/mongodb/startMongoDB.sh
������nodeӦ�á�pm2 start /app/nodeapp/app.json 
���鿴���̡� ps -ef | grep node
��ɱ�����̡� kill -9 pid


������CSV��
student.csv ��Sublime->�ļ�->�������->UTF-8 ����BOM(ÿ�ζ�Ҫ��ǰ�������)
/app/mongodb/mongodb-linux-x86_64-3.0.6/bin/mongoimport -h 127.0.0.1 --port 27017 -d dongtan -c reserve --type csv --headerline --file /app/mongodb/dbdata/student.csv

������CSV��
mongoexport -h 127.0.0.1 --port 27017 --db dongtan --collection test -f userid,name --type csv  --out ./test.csv

��ssh�û���
ssh -p 22 node@122.152.208.129     


node Huibao12346


