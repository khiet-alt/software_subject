# Introduction
Đây là đồ án quản lý khách sạn, bao gồm 2 folder backend và frontend

# Referencecs
Cho cả frontend và backend: https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm

# Enviroment
Chạy trên Nodejs, sử dụng cơ sở dữ liệu Mongodb, sử dụng Reactjs

# How to Run on local machine
Run npm run dev in root folder (folder contains /backend and /frontend)

# How to deploy
- Build frontend zip file <br />
- Đối với backend, thay đổi file server.js sao cho nếu môi trường là production thì sẽ gửi static file frontend tới user. <br />
- Tạo Repo trên heroku, link project tới remote repo này, push code into repo

# Current Status
- Cấu hình cơ bản cho backend, mở server, viết một vài API xử lí thông tin người dùng, verify người dùng,... <br />
- Về Frontend, cài đặt bộ khung chung cho Reactjs project, add plugins, dependencies,... Code được một vài giao diện cho người dùng 

# Future Status
- Hoàn thiện việc code giao diện cho người dùng, gửi request đến server xử lí thông tin <br />
- Deploy project lên heroku

# Link demo
https://software-subject.herokuapp.com/

# For my team
# How to use (incorperate with team)

Clone directly this repository, and type:

> **npm install** in root folder (folder contains /backend and /frontend)

to install all dependencies inside backend folder, and type
> **npm install** in /frontend folder 

to install all dependencies in /frontend folder
>
Then create new branch and work with that branch.
>
> ## Don't work directly in **_master_** branch

After clonning, type:
> git checkout -b newbranch

After finishing your works, push your banrch into remote:
> git push origin newbranch
