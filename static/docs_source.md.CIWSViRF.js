import{_ as e,c as a,o,a4 as c}from"./chunks/framework.BjiR7zK0.js";const f=JSON.parse('{"title":"数据来源","description":"","frontmatter":{},"headers":[],"relativePath":"docs/source.md","filePath":"docs/source.md","lastUpdated":1715998632000}'),t={name:"docs/source.md"},d=c('<h1 id="数据来源" tabindex="-1">数据来源 <a class="header-anchor" href="#数据来源" aria-label="Permalink to &quot;数据来源&quot;">​</a></h1><blockquote><p>介绍实际开发中涉及到的相关管理界面，需要查询有关工作流的数据来源。</p></blockquote><h2 id="发起申请" tabindex="-1">发起申请 <a class="header-anchor" href="#发起申请" aria-label="Permalink to &quot;发起申请&quot;">​</a></h2><p>查询 <code>流程定义表 flw_process</code> 有效发布的工作流，发起提交（包含自定义表单相关信息）。</p><h2 id="我的申请" tabindex="-1">我的申请 <a class="header-anchor" href="#我的申请" aria-label="Permalink to &quot;我的申请&quot;">​</a></h2><p>查询 <code>历史流程实例表 flw_his_instance</code> 字段 <code>create_id 创建人ID</code> 属于当前用户的流程实例，展示该实例对应的当前审批任务进度信息。</p><h2 id="待审批任务" tabindex="-1">待审批任务 <a class="header-anchor" href="#待审批任务" aria-label="Permalink to &quot;待审批任务&quot;">​</a></h2><p>查询 <code>任务表 flw_task</code> 关联 <code>任务参与者表 flw_task_actor</code> 条件 <code>actor_type 参与者类型 0，用户</code> 的数据。</p><h2 id="待认领任务" tabindex="-1">待认领任务 <a class="header-anchor" href="#待认领任务" aria-label="Permalink to &quot;待认领任务&quot;">​</a></h2><blockquote><p>认领后该任务变成个人待审批任务</p></blockquote><p>查询 <code>任务表 flw_task</code> 关联 <code>任务参与者表 flw_task_actor</code> 及 <code>业务角色表、部门表</code> 条件 <code>actor_type 参与者类型 1，角色 2，部门</code> 的数据。</p><h2 id="我收到的任务" tabindex="-1">我收到的任务 <a class="header-anchor" href="#我收到的任务" aria-label="Permalink to &quot;我收到的任务&quot;">​</a></h2><p>查询 <code>历史任务表 flw_his_task</code> 条件 <code>task_type 类型为 2 抄送任务</code> 关联 <code>历史任务参与者表 flw_his_task_actor</code> 条件 <code>actor_type 参与者类型 0，用户</code> 的数据。</p><h2 id="已审批" tabindex="-1">已审批 <a class="header-anchor" href="#已审批" aria-label="Permalink to &quot;已审批&quot;">​</a></h2><p>查询 <code>历史任务表 flw_his_task</code> 关联 <code>历史任务参与者表 flw_his_task_actor</code> 条件 <code>actor_type 参与者类型 0，用户</code> 的数据。</p><h2 id="审批管理" tabindex="-1">审批管理 <a class="header-anchor" href="#审批管理" aria-label="Permalink to &quot;审批管理&quot;">​</a></h2><p>查询 <code>流程定义表 flw_process</code> 管理 JSON 模型、表单、操作权限等。</p>',17),r=[d];function s(l,_,i,h,n,p){return o(),a("div",null,r)}const k=e(t,[["render",s]]);export{f as __pageData,k as default};
