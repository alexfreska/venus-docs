(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{527:function(s,t,a){"use strict";a.r(t);var e=a(54),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门"}},[s._v("#")]),s._v(" 入门")]),s._v(" "),a("p",[s._v("这是安装和运行Filecoin节点并连接到本地机器测试网络的指南。")]),s._v(" "),a("h3",{attrs:{id:"系统要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),a("p",[s._v("Venus可以在大多数GNU/Linux和MacOS系统上构建和运行。尚不支持Windows。")]),s._v(" "),a("p",[s._v("验证节点可以在大多数具有至少8GB RAM的系统上运行。挖矿节点需要大量的RAM和GPU资源，这取决于正在使用的扇区配置。")]),s._v(" "),a("h3",{attrs:{id:"安装依赖项和系统配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项和系统配置"}},[s._v("#")]),s._v(" 安装依赖项和系统配置")]),s._v(" "),a("p",[s._v("Clone“venus”git库并输入：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /path/to/filecoin-project\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/filecoin-project/venus.git /path/to/filecoin-project/venus\n")])])]),a("h4",{attrs:{id:"安装go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装go"}},[s._v("#")]),s._v(" 安装Go")]),s._v(" "),a("p",[s._v("'venus'的构建过程需要 "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go"),a("OutboundLink")],1),s._v(" >= v1.13。")]),s._v(" "),a("blockquote",[a("p",[s._v("第一次安装Go？我们推荐 "),a("a",{attrs:{href:"https://www.ardanlabs.com/blog/2016/05/installing-go-and-your-workspace.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个教程"),a("OutboundLink")],1),s._v(" 其中包括环境设置。")])]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("venus")]),s._v("中使用了"),a("code",[s._v("cgo")]),s._v("，因此无论是使用预构建库还是从源代码处编译，都需要一个C编译器来构建它。要使用 "),a("code",[s._v("gcc")]),s._v(" （例如"),a("code",[s._v("export CC=gcc")]),s._v("），需要v7.4.0或更高版本。")]),s._v(" "),a("p",[s._v("构建过程将下载一个静态库，其中包含"),a("a",{attrs:{href:"https://github.com/filecoin-project/rust-fil-proofs",target:"_blank",rel:"noopener noreferrer"}},[s._v("Filecoin Proof的实现"),a("OutboundLink")],1),s._v(" (用Rust写的)。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意:")]),s._v(" 要从源代码生成证明，（1）必须安装Rust开发环境，（2）必须设置环境变量 "),a("code",[s._v("FFI_BUILD_FROM_SOURCE=1")]),s._v(" 更多信息可在"),a("a",{attrs:{href:"https://github.com/filecoin-project/filecoin-ffi",target:"_blank",rel:"noopener noreferrer"}},[s._v("filecoin-ffi"),a("OutboundLink")],1),s._v("中找到。")])]),s._v(" "),a("h4",{attrs:{id:"安装依赖项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖项"}},[s._v("#")]),s._v(" 安装依赖项")]),s._v(" "),a("ol",[a("li",[s._v("加载所有Git子模块：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --init --recursive\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("初始化生成依赖项：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" deps\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("注意:")]),s._v(" 第一次"),a("code",[s._v("deps")]),s._v(" 启动可能"),a("strong",[s._v("慢")]),s._v("，因为很大的参数文件要么下载，要么在 "),a("code",[s._v("/var/tmp/filecoin-proof-parameters")]),s._v("中本地生成。要有耐心，以后会更快。")])]),s._v(" "),a("h3",{attrs:{id:"构建和运行测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建和运行测试"}},[s._v("#")]),s._v(" 构建和运行测试")]),s._v(" "),a("ol",[a("li",[s._v("构建二进制文件：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("运行单元测试：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("或者可以将构建和测试结合起来：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("go run ./build best\n")])])]),a("p",[s._v("其他方便的构建命令包括：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Check the code for style and correctness issues")]),s._v("\ngo run ./build lint\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Run different categories of tests by toggling their flags")]),s._v("\ngo run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -unit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false -integration"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true -functional"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Test with a coverage report")]),s._v("\ngo run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -cover\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Test with Go's race-condition instrumentation and warnings (see https://blog.golang.org/race-detector)")]),s._v("\ngo run ./build "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -race\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Deps, Lint, Build, Test (any args will be passed to `test`)")]),s._v("\ngo run ./build all\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("注意:")]),s._v(" 传递给 "),a("code",[s._v("go run ./build test")]),s._v(" 的任何标志(例如 "),a("code",[s._v("-cover")]),s._v(") 都将传递给 "),a("code",[s._v("go test")]),s._v("。")])]),s._v(" "),a("p",[a("strong",[s._v("对于构建中的所有问题")]),s._v(", 请参阅 "),a("a",{attrs:{href:"https://go.filecoin.io/venus-tutorial/Troubleshooting-&-FAQ.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("故障排除"),a("OutboundLink")],1),s._v(" 文档内容。")]),s._v(" "),a("h2",{attrs:{id:"开始运行filecoin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始运行filecoin"}},[s._v("#")]),s._v(" 开始运行Filecoin")]),s._v(" "),a("ol",[a("li",[s._v("如果以前在系统上运行过"),a("code",[s._v("venus")]),s._v(" ,请删除现有的Filecoin repo（"),a("strong",[s._v("这将删除所有以前的Filecoin数据")]),s._v("）：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ~/.venus\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("启动venus守护进程：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus daemon\n")])])]),a("p",[s._v("这应该返回“我的peerID是"),a("code",[s._v("<peerID>")]),s._v("” , 其中 "),a("code",[s._v("<peerID>")]),s._v(" 是一个长的 "),a("a",{attrs:{href:"https://github.com/filecoin-project/specs/blob/master/definitions.md#cid",target:"_blank",rel:"noopener noreferrer"}},[s._v("CID"),a("OutboundLink")],1),s._v(" ，是以“Qm”开头的字符串。")]),s._v(" "),a("ol",[a("li",[s._v("打印启动节点地址列表：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus config bootstrap.addresses\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("从刚打印的列表中选择任意地址，并连接到该地址（peer自动的发现和连接即将到来）：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus swarm connect "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("any-filecoin-node-mulitaddr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("注意:")]),s._v(" 第一次可能较"),a("strong",[s._v("慢")]),s._v("。filecoin节点需要一个大参数文件来进行校对，存储在 "),a("code",[s._v("/tmp/filecoin-proof-parameters")]),s._v("中。它通常由 "),a("code",[s._v("deps")]),s._v("构建步骤生成。如果这些文件丢失，它们将被重新生成，这可能需要一个小时。我们正在研究更好的解决办法。")])]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("检查节点的连接：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus swarm peers                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# list addresses of peers to which you're connected")]),s._v("\n")])])]),a("p",[s._v("该节点现在应该连接到一些peer，并将开始下载和验证区块链。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("注意:")]),s._v(" 守护进程现在正在自己的终端中无限期运行 ("),a("code",[s._v("Ctrl + C")]),s._v(" 退出)。要运行其他"),a("code",[s._v("venus")]),s._v(" 命令，请打开第二个终端选项卡或窗口 (在Mac上是 "),a("code",[s._v("Cmd + T")]),s._v(")。")])]),s._v(" "),a("h2",{attrs:{id:"从filecoin水龙头获取fil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从filecoin水龙头获取fil"}},[s._v("#")]),s._v(" 从Filecoin水龙头获取FIL")]),s._v(" "),a("p",[a("strong",[s._v("一旦你的链完成同步")]),s._v(", 你将可以使用水龙头获得filecoin代币（FIL）。在Filecoin节点可以参与市场之前需要一些启动文件，客户需要在他们的帐户中输入FIL，以便与矿工进行存储交易。矿工在最初向网络抵押存储时使用FIL作为抵押品。")]),s._v(" "),a("p",[s._v("在早期测试中，可以从Filecoin水龙头获得模拟的测试FIL。“水龙头”之所以得名，是因为它能把FIL发放到那些把钱包放在它下面的人。使用模拟的测试FIL可以对市场动态进行初步测试，而无需任何真实资金。")]),s._v(" "),a("p",[s._v("FIL的所有余额都存放在钱包里。新创建节点时，它将有一个余额为0 FIL的Filecoin钱包。")]),s._v(" "),a("ol",[a("li",[s._v("检索您的钱包地址：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("输出的应该是一个长的字母数字字符串。转到testnet的 "),a("a",{attrs:{href:"https://faucet.calibration.fildev.network/",target:"_blank",rel:"noopener noreferrer"}},[s._v("水龙头"),a("OutboundLink")],1),s._v(" 并提交那个钱包地址。要花一分钟才能把钱放进钱包。")]),s._v(" "),a("ul",[a("li",[s._v("或者你可以从命令行触发水龙头：")])])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WALLET_ADDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("venus wallet "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fetch your wallet address into a handy variable")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MESSAGE_CID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -X POST -F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"address='),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WALLET_ADDR}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://faucet.calibration.fildev.network/send"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("水龙头将提供消息CID。如果链已与网络同步，则此消息应在大约30秒内处理。可以运行以下命令以等待确认：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus state wait-msg "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MESSAGE_CID}")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("通过检查钱包余额验证FIL是否已转入钱包中：")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus wallet balance "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WALLET_ADDR}")]),s._v("\n")])])]),a("h2",{attrs:{id:"等待链同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等待链同步"}},[s._v("#")]),s._v(" 等待链同步")]),s._v(" "),a("p",[s._v("🎉 恭喜，您现在已连接到Filecoin！守护进程现在正忙于同步和验证现有的区块链，这可能需要一段时间---数小时甚至数天，具体取决于网络时间和活动。")]),s._v(" "),a("p",[s._v("在同步初期，一个CPU内核上会有激烈的活动。首先通过访问 "),a("a",{attrs:{href:"https://stats.testnet.filecoin.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("网络统计页"),a("OutboundLink")],1),s._v(" 了解当前块的高度，然后观察节点同步进度：")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("venus "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v(" status\n")])])]),a("h2",{attrs:{id:"查看网络信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看网络信息"}},[s._v("#")]),s._v(" 查看网络信息")]),s._v(" "),a("p",[s._v("有一些可视化工具可以帮助用户了解Filecoin网络中正在发生的事情，例如官方的 "),a("a",{attrs:{href:"http://stats.testnet.filecoin.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("网络统计页面"),a("OutboundLink")],1),s._v(" 以及社区管理的区块浏览器 "),a("a",{attrs:{href:"https://filscan.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("filscan.io"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"组件默认端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件默认端口"}},[s._v("#")]),s._v(" 组件默认端口")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Auth "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8989")]),s._v("\nGateway "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45132")]),s._v("\nDaemon node "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3453")]),s._v("\nMiner "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12308")]),s._v("\nSealer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2345")]),s._v("\nWorker "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3456")]),s._v("\n")])])]),a("p",[s._v("在构建Venus各组件过程中可能会产生RPC链接问题，可以运行类似 telnet 10.50.110.59 12308 命令测试各组件端口是否打开。")])])}),[],!1,null,null,null);t.default=r.exports}}]);