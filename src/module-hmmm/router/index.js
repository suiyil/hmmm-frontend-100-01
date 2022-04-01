import Layout from "@/module-dashboard/pages/layout";
const _import = require("@/router/import_" + process.env.NODE_ENV);
/**
 *
 * 路由有部分地方，需要自己补全的喔~ O(∩_∩)O哈哈~
 */

export default [
  {
    path: "/companys",
    component: Layout,
    redirect: "noredirect",
    name: "companys",
    meta: {
      title: "企业管理",
      icon: "component"
    },
    children: [
      {
        path: "list",
        component: _import(""),
        name: "companys-list",
        meta: { title: "企业管理", noCache: true, icon: "peoples" }
      }
    ]
  },
  {
    path: "/questions",
    component: Layout,
    redirect: "noredirect",
    name: "questions",
    meta: {
      title: "题库管理",
      icon: "documentation"
    },
    children: [
      {
        path: "list",
        component: _import("s"),
        name: "questions-list",
        meta: { title: "基础题库", noCache: true, icon: "component" }
      },
      {
        path: "choice",
        component: _import(""),
        name: "questions-choice",
        meta: { title: "精选题库", noCache: true, icon: "component" }
      },
      {
        path: "new",
        component: _import(""),
        name: "questions-new",
        meta: { title: "试题录入", noCache: true, icon: "component" }
      },
      {
        path: "randoms",
        component: _import(""),
        name: "questions-randoms",
        meta: { title: "组题列表", noCache: true, icon: "component" }
      }
    ]
  },
  {
    path: "/subjects",
    component: Layout,
    redirect: "noredirect",
    name: "subjects",
    meta: {
      title: "学科管理",
      icon: "table"
    },
    children: [
      {
        path: "list",
        component: _import(""),
        name: "subjects-list",
        meta: { title: "学科", noCache: true, icon: "component" }
      },
      {
        path: "directorys",
        component: _import(""),
        name: "subjects-directorys",
        meta: { title: "目录", noCache: true, icon: "component" }
      },
      {
        path: "tags",
        component: _import(""),
        name: "subjects-tags",
        meta: { title: "标签", noCache: true, icon: "component" }
      }
    ]
  }
];
