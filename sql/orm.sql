select 
  `f0`.*, 
  `c1`.`flavor_id` as `fk__flavor_id`,
  `c1`.`coffee_id` as `fk__coffee_id`
  from `flavor` as `f0` --- 单数
  left join `coffee_flavors` as `c1` -- 复数了
  on `f0`.`id` = `c1`.`flavor_id`
  where `c1`.`coffee_id` in (1, 2, 3, 4);
