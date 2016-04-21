const patternGMailLoginForm = /<form[\s\S]*?<\/form>/igm;
const patternGMailFormAction = /action="(.*?)"/i;
const patternGMailFormInput = /<input[\s\S]*?>/igm;
const patternGMailFormValue = /value=["|'](.*?)["|']/i;
const patternGMailFormName = /name=["|'](.*?)["|']/i;
const PatternGMailGetSessionCookie = /GMAIL_AT=(.*?);/i
const PatternGMailGetLoginCookie = /.*GX=(.*);/
const PatternGMailNextMSGTable = /\["ti","(.*?)",(.*?),(.*?),/i;
const PatternGMailMSGTable = /,\["ti",".*?",\d*,\d*,\d*,[\s\S]*/i;
const PatternGMailIK = /var GLOBALS=\[,,".*?",".*?",".*?",.*?,.*?,".*?",.*?,"(.*?)",.*?\]/i;
const PatternGMailIKAlt =/GLOBALS=\[,,.*?,.*?,.*?,.*?,.*?,.*?,.*?,"(.*?)",.*?,/i;
const PatternGmailMSGTableBlock = /\["\w*?",".*?",".*?",\d,\d,\["\^.*?\]/ig;
const PatternGMailMSGData = /\["(\w*?)","(.*?)",".*?",(\d),(\d),\[(.*?)\]/i;
const PatternGMailThreadTableBlock = /\["ms",".*?",\d,".*?",".*?",".*?"/ig;
const PatternGMailThreadTableData = /\["ms","(.*?)",".*?",(\d),".*?",".*?","(.*?)"/i;
const PatternGMailThreadTable = /D\(\["mi",[\s\S]*?\);/igm;
const PatternGMailThreadLabels = /D\(\["cs",".*?",".*?",".*?",".*?",\[(.*?)\]/i;
const PatternGMailThreadID = /\["(.*?)",\d,\d,.*?,.*?,.*?,.*?,.*?,"(.*?)",\d,.*?,\d,.*?,\d,\d,\d\]/i;
const PatternGMailThread = /.*?\((\d+)\)/;
const PatternGMailNewMessagesIDsStep1 = /\[\"([\da-fA-F]*)\"/g
const PatternGMailNewMessagesIDsStep2 = /\[\"([\da-fA-F]*)\"/
const patternGMailLoginBounce = /<meta http-equiv="refresh".*?url=[']?(.*?)[']?".*?[\/]?>/im;
const PatternGMailRFCMsg = /X-Gmail-Received.*/;
const PatternGmailConstants = true;
const PatternGmailWelcome = /<a data-g-label=".*?".*?href=[\s]*?"(.*?ServiceLogin.*?)"[\s]*?id="gmail-sign-in"/i;
