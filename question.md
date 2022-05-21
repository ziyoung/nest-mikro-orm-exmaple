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