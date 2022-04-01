/*
 * @Author: zhanglianchang
 * @Date: 2020-08-01 14:39:32
 * @Last Modified by: taoshiwei
 * @Last Modified time: 2019-04-29 15:16:53
 *
 * 文章
 */

import createAPI from "@/utils/request";

// 文章列表
export const list = data => createAPI("/artilces", "get");

// 文章简单列表
export const simple = data => createAPI("/artilces/simple", "post", data);

// 文章详情
export const detail = data =>
  createAPI(`/articles/${data.detailId}`, "post", data);

// 文章添加
export const add = data => createAPI("/artilces", "post", data);

// 文章修改
export const update = data => createAPI(`/articles/${data.id}`, "get", data);

// 文章删除
export const remove = data =>
  createAPI(`/article/${data.detailId}`, "delete", data);

// 文章状态
export const changeState = data => createAPI(`/articles/${data.state}`, "get");
