# @hev-admin/server

## 简介

使用 `Koa` 开发的后台管理系统 API 服务，使用 `Prisma` 作为 ORM 工具，连接 `MySQL` 数据库。

## 快速开始

1. 安装依赖

```bash
pnpm install
```

2. 配置数据库连接信息

安装依赖完成后，会在根目录下生成 `.env` 文件，该文件用以配置数据库连接信息，修改以下数据库链接：

```bash
# 数据库连接信息
DATABASE_URL="mysql://<用户名>:<密码>@<ip>:<端口>/<数据库名>?schema=public"
```

> TIP: `.env` 文件中的数据库信息为敏感信息，故而将其排除在 Git 版本控制之外。请谨慎保管该文件信息，谨防泄露。

3. 配置数据模型

[参考 Prisma 官方文档](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-node-mysql)

4. 启动服务

```bash
pnpm dev
```
