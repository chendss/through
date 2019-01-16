- 服务器 


```
home/dashao/FuckWork/through/frp_0.20.0_linux_amd64
新建一个screen screen -S through
./frps -c ./frps.ini
```

- 客户端 

```
node app.js
frpc -c ./frpc.ini
```