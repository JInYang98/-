# Linux安装Mysql

## 1: 官网下载linux解压包

下载地址： https://dev.mysql.com/downloads/mysql/

选择linux 通用版 然后随便算则一个（别选中mysql测试工具就行）

![image-20220619203550985](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220619203550985.png)



## 2: 放入Linux 指定目录下解压

解压命令： 

````shell
tar -xf mysql.tar.xz
````

## 3：重命名一下文件

````shell
mv mysql-8.0.29-linux-glibc2.12-x86_64 /usr/local/mysql
````

## 4：创建一个文件夹存储mysql数据

````shell
mkdir /usr/local/mysql/data
````

## 5：创建用户组及用户和密码 （直接用root账户可以跳过）

```shell
groupadd mysql
useradd -g mysql mysql
```

## 6：授权用户

```shell
chown -R mysql.mysql /usr/local/app/mysql
```

## 7：编辑my.cnf文件

````shell
vim /etc/my.cnf
````

````ini
[mysqld]
#初始化用户
user=root
#数据存放地址
datadir=/usr/local/mysql/data
#指定安装目录
basedir=/usr/local/mysql
port=3306
# 最大连接数，最好给高点
max_connections=1000
max_connect_errors=10
character-set-server=utf8
#默认数据库引擎
default-storage-engine=INNODB
#默认加密模式 加密模式
default_authentication_plugin=mysql_native_password
lower_case_table_names=1
group_concat_max_len=102400
[mysql]
default-character-set=utf8
[client]
port=3306
default-character-set=utf8
````

## 8：执行安装命令 (到mysql 安装目录下bin目录执行)

````shell
cd /usr/local/mysql/bin
./mysqld --initialize
````

安装完成之后一定记得复制初始化密码

![image-20220619211159796](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220619211159796.png)

##  9：添加mysqld服务到系统 （设置9,10步之后系统可以开机自启）

```shell
cd /usr/local/mysql/
cp -a ./support-files/mysql.server /etc/init.d/mysql
```

## 10：授权以及添加服务

```shell
chmod +x /etc/init.d/mysql
chkconfig --add mysql
```

## 11: 启动mysql服务

```shell
service mysql start
```

看到这样说明启动成功了

![image-20220619211531997](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220619211531997.png)

## 12：将mysql添加到命令服务

```
ln -s /usr/local/mysql/bin/mysql /usr/bin
```

## 13：登录mysql修改密码 密码就是上面初始化时的密码

````shell
mysql -uroot -p
````

注意:此步如果报错mysql: error while loading shared libraries: libtinfo.so.5: cannot open shared object file: No such file or directory，执行下面命令即可

```shell
ln -s /usr/lib64/libtinfo.so.6.1 /usr/lib64/libtinfo.so.5
```

修改密码：

````shell
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码';
# 刷新下权限
flush privileges;
````

## 14：更改root连接权限 （执行这一步可以远程连接改库）

```shell
# 进入mysql数据库
use mysql;
# 修改用户连接权限
update user set host='%' where user = 'root';
#刷新权限
flush privileges;
```
