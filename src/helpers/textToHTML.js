export default function textToHTML(text) {
    const toHTML = text
        .replace(/^###### (.*)/gm, '<h6>$1</h6>') // h6 tag
        .replace(/^##### (.*)/gm, '<h5>$1</h5>') // h5 tag
        .replace(/^#### (.*)/gm, '<h4>$1</h4>') //h4 tag
        .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
        .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
        .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
        .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
        .replace(/\[(.*?)\]\((.*?)\)/g, '<img src="$2">') // image
        .replace(/\n/g, '<br>') // new line
        .replace(/~~(.+?)~~/g, '<p style="text-decoration: line-through;">$1</p>')
        .replace(/`(.+)`/g, '<code>$1</code>')
        // .replace(/^>(.+)/gm, '<blockquote>$1</blockquote>')
        // .replace(/^\s*\n\d\./gm, '<ol>\n1.')
//   .replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2')
//   .replace(/[`]{1}([^`]+)[`]{1}/g, '<code>$1</code>')

    return toHTML;

}