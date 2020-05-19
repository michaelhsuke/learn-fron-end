console.log(String.raw`Hi\n${2 + 3}!`)
console.log(String.raw`Hi\u000A!`)

console.log(String.raw`Hi\\n` === "Hi\\\\n")