var jsCommentRegExp = /(?:\/\*(?:[\s\S]*?)(?:copyright)(?:[\s\S]*?)\*\/)|(?:([\s;]?)+\/\/(?:.*)(?:<reference)(?:.*)$)/igm;

var content = fs.readFileSync(projectPath + "typedefs.ts", "utf8") + EOL;

content += file.contents.toString().replace(jsCommentRegExp,"");