(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{435:function(t,a,s){"use strict";s.r(a);var e=s(35),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用户使用手册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户使用手册"}},[t._v("#")]),t._v(" 用户使用手册")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("使用前必读")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("禁止在上面挖矿，一旦发现即刻销毁容器！")])]),t._v(" "),s("li",[s("p",[t._v("仅限内部使用，禁止分享给外部人员使用！")])]),t._v(" "),s("li",[s("p",[t._v("仅限校内登录校园网使用！")])]),t._v(" "),s("li",[s("p",[t._v("如果需要更多的资源，请先与老师沟通！")])]),t._v(" "),s("li",[s("p",[t._v("不要卸载重装容器内的显卡驱动，否则可能用不了GPU！")])]),t._v(" "),s("li",[s("p",[t._v("不要进行修改系统内核等危险行为！")])]),t._v(" "),s("li",[s("p",[t._v("在使用的过程中遇到问题，可随时联系管理员")])])])]),t._v(" "),s("h2",{attrs:{id:"默认环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认环境"}},[t._v("#")]),t._v(" 默认环境")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("参数值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("系统")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ubuntu 20.04LTS")])]),t._v(" "),s("tr",[s("td",[t._v("显卡驱动")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("470.129.06")])]),t._v(" "),s("tr",[s("td",[t._v("GPU")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1张")])]),t._v(" "),s("tr",[s("td",[t._v("CPU")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("20%")])]),t._v(" "),s("tr",[s("td",[t._v("内存")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("16G")])]),t._v(" "),s("tr",[s("td",[t._v("硬盘")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("100G")])])])]),t._v(" "),s("h2",{attrs:{id:"ssh远程连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh远程连接"}},[t._v("#")]),t._v(" SSH远程连接")]),t._v(" "),s("h3",{attrs:{id:"默认终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认终端"}},[t._v("#")]),t._v(" 默认终端")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("打开系统的默认终端，Windows 下可以使用 "),s("code",[t._v("Windows terminal")])]),t._v(" "),s("p",[t._v("如果提示 "),s("code",[t._v("ssh")]),t._v(" 未安装，需要先安装 "),s("code",[t._v("ssh")]),t._v(" 服务。")])]),t._v(" "),s("li",[s("p",[t._v("使用 "),s("code",[t._v("ssh")]),t._v(" 命令进行远程连接")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" ubuntu@10.50.128.65 -p "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[s("code",[t._v("ubuntu")]),t._v(" 是每个容器内默认的用户名，默认密码是 123456。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("10.50.128.65")]),t._v(" 是实验室服务器主机的"),s("strong",[t._v("固定IP")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("<port number>")]),t._v(" 是分配给你的端口号")])])]),t._v(" "),s("p",[t._v("终端输出以下信息说明已登录成功")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/terminal-ssh.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("修改密码")]),t._v(" "),s("p",[t._v("因为容器的默认密码都是 123456，所以首次连接上后第一件事就是修改密码")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" root\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" ubuntu\n")])])])]),t._v(" "),s("li",[s("p",[t._v("查看GPU信息")]),t._v(" "),s("p",[t._v("容器内已经默认安装好了显卡驱动，键入命令 "),s("code",[t._v("nvidia-smi")]),t._v(" 后，可以看到 "),s("code",[t._v("test")]),t._v(" 容器已经分配好了一张卡")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/nvidia-info.png",alt:""}})])])]),t._v(" "),s("h3",{attrs:{id:"vs-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[t._v("#")]),t._v(" VS Code")]),t._v(" "),s("p",[t._v("这部分写给平时喜欢用 VS Code 的同学参考，其他同学可直接跳过，用默认终端连接即可")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装 "),s("code",[t._v("Remote-SSH")]),t._v(" 插件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/remote-ssh-install.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("编辑连接配置文件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/remote-ssh-configure1.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("输入固定IP、用户名、端口号，点击连接")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/remote-ssh-configure2.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("输入密码")]),t._v(" "),s("p",[t._v("提醒一下这个输入密码的地方在 "),s("code",[t._v("vscode")]),t._v(" 的正上方，眼神不好的可能还得找一会")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/input-password.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("新建一个终端，Enjoy！")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/vscode-terminal.png",alt:""}})])])]),t._v(" "),s("h3",{attrs:{id:"termius"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#termius"}},[t._v("#")]),t._v(" Termius")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://termius.com/teams",target:"_blank",rel:"noopener noreferrer"}},[t._v("Termius"),s("OutboundLink")],1),t._v("，一款颜值高、操作方便且功能强大的 "),s("code",[t._v("ssh")]),t._v(" 客户端，有个人免费版。感兴趣的同学可以下载尝试一下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/termius.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"深度学习环境安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深度学习环境安装"}},[t._v("#")]),t._v(" 深度学习环境安装")]),t._v(" "),s("p",[t._v("由于每个人需要用到的训练环境不同，这里只介绍一些通用的环境安装")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("容器内默认只安装了显卡驱动，但 cuda 和 cudnn 都是没有安装的。推荐使用 conda 安装 pytorch，安装过程会自动安装与配置 cuda 和 cudnn，一步到位，免去了安装以上两者的繁琐过程。如果想要自行安装 cuda，需要注意不能超过显卡驱动（470.129.06）所支持的范围。")])]),t._v(" "),s("h3",{attrs:{id:"anaconda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anaconda"}},[t._v("#")]),t._v(" Anaconda")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载 Anaconda")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" downloads "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" downloads\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://repo.anaconda.com/archive/Anaconda3-2022.05-Linux-x86_64.sh\n")])])])]),t._v(" "),s("li",[s("p",[t._v("安装")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" Anaconda3-2022.05-Linux-x86_64.sh\n")])])])]),t._v(" "),s("li",[s("p",[t._v("创建虚拟环境并进入")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("conda create -n pyt "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("python")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.8")]),t._v("\nconda activate pyt\n")])])])]),t._v(" "),s("li",[s("p",[t._v("退出虚拟环境")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("conda deactivate \n")])])])])]),t._v(" "),s("h3",{attrs:{id:"pytorch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pytorch"}},[t._v("#")]),t._v(" Pytorch")]),t._v(" "),s("blockquote",[s("p",[t._v("参考 Pytorch 的官方文档（https://pytorch.org/），使用 conda 安装")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pytorch torchvision torchaudio "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("cudatoolkit")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.3")]),t._v(" -c pytorch\n")])])]),s("p",[t._v("安装速度取决于实验室那边的网速，等待一下吧")]),t._v(" "),s("h2",{attrs:{id:"上传数据集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传数据集"}},[t._v("#")]),t._v(" 上传数据集")]),t._v(" "),s("h3",{attrs:{id:"公开数据集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公开数据集"}},[t._v("#")]),t._v(" 公开数据集")]),t._v(" "),s("p",[t._v("复制数据集下载链接，直接通过 wget 命令下载：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -c https://data.statmt.org/wmt18/translation-task/preprocessed/zh-en/corpus.gz\n")])])]),s("h3",{attrs:{id:"个人数据集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#个人数据集"}},[t._v("#")]),t._v(" 个人数据集")]),t._v(" "),s("p",[t._v("有时候我们会在本地对数据集先做一些预先处理，处理完成再上传到服务器训练。其实熟的话你直接在服务器的命令行上做也不是不行...")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("ssh")]),t._v("上传文件到容器的特定目录下（"),s("strong",[t._v("推荐")]),t._v("）")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),s("p",[t._v("文件数量多的，压缩后再上传整个压缩包")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -P "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地文件路径"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ubuntu@10.50.128.65:/home/ubuntu/\n")])])]),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -P "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60601")]),t._v(" WikiMatrix.v1.en-zh.langid.tsv.gz ubuntu@10.50.128.65:/home/ubuntu/\n")])])]),s("p",[t._v("以上命令代表将当前目录下的 "),s("code",[t._v("WikiMatrix.v1.en-zh.langid.tsv.gz")]),t._v(" 上传到容器的用户根目录下。测试了一下上传一个300多M的文件，差不多能跑满辣鸡校园网的上传带宽，速度害行")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/cloudnzk/image/main/img/ssh-upload.png",alt:""}})]),t._v(" "),s("p",[t._v("上传整个目录需要添加一个 "),s("code",[t._v("-r")]),t._v(" 参数：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -P "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("port number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地文件夹路径"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ubuntu@10.50.128.65:/home/ubuntu/\n")])])]),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("scp -P 60601 -r aliyunpan-v0.1.5-linux-amd64 ubuntu@10.50.128.65:/home/ubuntu/\n")])])])]),t._v(" "),s("li",[s("p",[t._v("上传到 Gitee 仓库再 "),s("code",[t._v("git clone")]),t._v(" 下来")]),t._v(" "),s("p",[t._v("但 Gitee 最大只支持上传 100M 的单文件，只使用于小型数据集")])]),t._v(" "),s("li",[s("p",[t._v("阿里云盘的命令行客户端")]),t._v(" "),s("p",[t._v("优点：1、适用于大型数据集；2、可以备份数据，同步上传到云盘里")]),t._v(" "),s("blockquote",[s("p",[t._v("https://github.com/tickstep/aliyunpan")])])])]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("p",[s("strong",[t._v("Q1: 安装软件/包/库中出错")])]),t._v(" "),s("p",[t._v("A: 由于容器非常纯净，没有安装多余的软件，因此只需要根据错误提示，到谷歌搜索，安装需要的依赖即可")]),t._v(" "),s("p",[s("strong",[t._v("Q2: 为什么"),s("code",[t._v("pip")]),t._v(","),s("code",[t._v("conda")]),t._v(","),s("code",[t._v("git clone")]),t._v("的时候那么慢")])]),t._v(" "),s("p",[t._v("A：国内网络的原因，可设置镜像加快下载速度。推荐使用清华源，GitHub 仓库可先一键克隆到 Gitee，再 clone 下来")]),t._v(" "),s("p",[s("strong",[t._v("Q3: 为什么没有图形界面，非得用命令行？")])]),t._v(" "),s("p",[t._v("A： 因为实验室网速很拉，只有100M，我们校园网就更拉了，50M都不到。所以开图形界面会占用不少的网络带宽，很卡！多习惯下命令行吧，顺便练习下 "),s("code",[t._v("Linux")]),t._v(" 命令（滑稽")]),t._v(" "),s("p",[s("strong",[t._v("Q4: 为什么我的 ssh 会断连")])]),t._v(" "),s("p",[t._v("A：1、保证你的电脑在训练期间不休眠，还有保持稳定的网络。2、闲置一段时间后会自动断开连接，可修改服务器端和客户端的 "),s("code",[t._v("ssh")]),t._v(" 参数。但还是建议在训练期间就保存 "),s("code",[t._v("checkpoints")]),t._v(" 以防不测")]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("h2",{attrs:{id:"进阶配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进阶配置"}},[t._v("#")]),t._v(" 进阶配置")]),t._v(" "),s("h3",{attrs:{id:"ssh免密登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密登录"}},[t._v("#")]),t._v(" SSH免密登录")])])}),[],!1,null,null,null);a.default=v.exports}}]);