/*
 * @Author: zhanglianchang
 * @Date: 2020-08-01 14:39:32
 * @Last Modified by: taoshiwei
 * @Last Modified time: 2019-04-29 14:56:00
 *
 * 目录
 */

import createAPI from "@/utils/request";

// 目录列表
export const list = data => createAPI("/direcotrys", "get", data);

// 目录简单列表
export const simple = data => createAPI("/direcotrys", "post");

// 目录详情
export const detail = data =>
  createAPI(`/direcotrys/${data.userId}`, "get", data);

// 目录添加
export const add = data => createAPI("/direcotrys", "post", data);

// 目录修改
export const update = data => createAPI(`/direcotrys/${data.id}`, "put", data);

// 目录删除
export const remove = data =>
  createAPI(`/directorys/${data.id}`, "delete", data);

// 目录状态
export const changeState = data => createAPI(`/directorys/${data.id}`, "get");
