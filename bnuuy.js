var b;(function(u){u[u.BuiltIn=0]="BuiltIn",u[u.Guild=1]="Guild",u[u.DM=2]="DM"})(b||(b={}));var s;(function(u){u[u.Chat=1]="Chat",u[u.User=2]="User",u[u.Message=3]="Message"})(s||(s={}));var h;(function(u){u[u.BuiltIn=0]="BuiltIn",u[u.BuiltInText=1]="BuiltInText",u[u.BuiltInIntegration=2]="BuiltInIntegration",u[u.Bot=3]="Bot",u[u.Placeholder=4]="Placeholder"})(h||(h={}));var B;(function(u){u[u.Role=1]="Role",u[u.User=2]="User"})(B||(B={}));var F;(function(u){u[u.SubCommand=1]="SubCommand",u[u.SubCommandGroup=2]="SubCommandGroup",u[u.String=3]="String",u[u.Integer=4]="Integer",u[u.Boolean=5]="Boolean",u[u.User=6]="User",u[u.Channel=7]="Channel",u[u.Role=8]="Role",u[u.Mentionnable=9]="Mentionnable",u[u.Number=10]="Number",u[u.Attachment=11]="Attachment"})(F||(F={}));var R;(function(u){u[u.ApplicationCommand=2]="ApplicationCommand",u[u.MessageComponent=3]="MessageComponent"})(R||(R={}));function f(u){window.enmity.plugins.registerPlugin(u)}function M(u,g,e,r){window.enmity.clyde.sendReply(u,g,e,r)}const j="/bnuuy",v=()=>{const u=["\u{1F440}","\u{1F438}","\u{1F34C}","\u{1F389}","\u{1F31F}","\u{1F525}","\u{1F44D}","\u{1F600}",":)",":D","\u15DC\u02EC\u15DC","bnuuy \u2122\uFE0F"];return u[Math.floor(Math.random()*u.length)]},w={name:"EmojiResponse",description:"Responds to /bnuuy with a random emoji.",onStart(){const u={name:"emoji-response",description:"Responds to /bnuuy with a random emoji.",type:s.Chat,inputType:h.BuiltInText,execute:async(g,e)=>{if(e.content===j){const r=v();M(e.channel.id,`bnuuy ${r}`)}}};f({name:"EmojiResponse",version:"1.0.0",description:"Responds to /bnuuy with a random emoji.",commands:[u],authors:[{name:"Donjamie",id:"706976697362415799"}]})},onStop(){}};f(w);
