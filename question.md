# 待解决的疑问点

## error 信息展示到响应中

ExceptionsHandler 的配置。对于一些异常，响应是 500。

```json
{
	"statusCode": 500,
	"message": "Internal server error"
}
```

## PartialType 与 class-validator 中的 @IsNotEmpty 冲突


## Mikrom ORM 中的配置

避免校验属性。对于 Entity 中的 `createTime`，`updateTime` 希望由数据库自动计算。

https://mikro-orm.io/docs/upgrading-v4-to-v5#required-properties-are-validated-before-insert

## 面向模块的开发

在 `src/config` 有一个比较复杂的动态模块。模块定义了定义好了的逻辑，同时通过配置 `exports` 也可以对外提供能力 (`provider`)。

> 对于使用者来说，只要是 `imports` 该 `module`，即可使用其导出的 `provider`。

对于一些异步模块初始化完成需要时间，仅仅在初始化完成后，nest 才对外提供服务。
