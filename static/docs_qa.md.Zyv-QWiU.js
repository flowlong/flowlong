import{_ as o,c as a,a2 as c,o as d}from"./chunks/framework.DXaKt7EB.js";const p=JSON.parse('{"title":"问答","description":"","frontmatter":{},"headers":[],"relativePath":"docs/qa.md","filePath":"docs/qa.md","lastUpdated":1733488615000}'),t={name:"docs/qa.md"};function l(r,e,i,s,n,u){return d(),a("div",null,e[0]||(e[0]=[c('<h1 id="问答" tabindex="-1">问答 <a class="header-anchor" href="#问答" aria-label="Permalink to &quot;问答&quot;">​</a></h1><p><a href="https://aizuda.com/authorize?from=fld" target="_blank" rel="noreferrer">💎企业版点击预览</a></p><h3 id="子流程在什么场景下使用-不能直接把子流程画在主流程里吗" tabindex="-1">子流程在什么场景下使用，不能直接把子流程画在主流程里吗？ <a class="header-anchor" href="#子流程在什么场景下使用-不能直接把子流程画在主流程里吗" aria-label="Permalink to &quot;子流程在什么场景下使用，不能直接把子流程画在主流程里吗？&quot;">​</a></h3><blockquote><p>答：子流程可以放到主流程，分开的好处 <code>1，主流程不至于太臃肿</code> <code>2，子流程可以作为一个高度内聚的流程模块在多处复用</code> 用户根据实际情况自己决定是否创建子流程。</p></blockquote><h3 id="节点是否支持自动回溯" tabindex="-1">节点是否支持自动回溯？ <a class="header-anchor" href="#节点是否支持自动回溯" aria-label="Permalink to &quot;节点是否支持自动回溯？&quot;">​</a></h3><blockquote><p>答：区别于以 flowable 为代表的 <code>线性驱动</code> 飞龙工作采用JSON模型 <code>树形驱动</code> 因此没有回溯线，可以通过 <code>1，通过驳回任务</code> <code>2，任意任务节点跳转</code> 两种方式实现一样的回溯效果。</p></blockquote><ul><li>线性驱动 <code>优点</code> 支持自动回溯节点，设计上更加灵活 <code>缺点</code> 审批推诿可能死循环空转。</li><li>树形驱动 <code>优点</code> 递进式执行，更加高效的审批 <code>缺点</code> 手动回溯节点。</li><li>解决办法 <code>FlowLong</code> 支持通过 <code>路由分支</code> 根据条件 <code>自动重定向</code> 到任意节点。</li></ul><h3 id="角色-部门-如何跳过认领直接审批" tabindex="-1">角色（部门）如何跳过认领直接审批？ <a class="header-anchor" href="#角色-部门-如何跳过认领直接审批" aria-label="Permalink to &quot;角色（部门）如何跳过认领直接审批？&quot;">​</a></h3><blockquote><p>答：飞龙默认提倡认领逻辑处理，原因是该类型任务不具备确定性，需要<code>审批人</code>自行决定是否要参与审批，如果直接让用户直接审批很容易误判，当然需求如此（建议添加<code>角色任务</code>提示）</p></blockquote><ul><li>跳过角色认领，实现逻辑参考 <code>TestAutoClaimRole</code> 测试用例，即自动认领角色后执行审批。</li></ul><div class="warning custom-block"><p class="custom-block-title">提示！</p><p>如下问题还是无法解决您的疑惑，可以添加微信 <code>wx153666</code> 备注 <code>flowlong</code> 进入微信官方群交流。</p></div>',11)]))}const b=o(t,[["render",l]]);export{p as __pageData,b as default};
