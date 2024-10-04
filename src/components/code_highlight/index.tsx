import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate"

SyntaxHighlighter.registerLanguage("javascript", js)

export const CodeHighlighted = ({ code }: { code: string }) => {
  const theCode = removeLeftIndentation(code)

  return (
    <SyntaxHighlighter
      language='javascript'
      style={agate}
      wrapLongLines={true}
      showLineNumbers={true}
      customStyle={{
        width: "fit-content"
      }}>
      {theCode}
    </SyntaxHighlighter>
  )
}

function removeLeftIndentation(codeBlock: string): string {
  // Split the code into lines
  const lines = codeBlock.split("\n").slice(1)

  // Find the minimum indentation level
  const minIndent = Math.min(
    ...lines
      .map((line) => {
        const match = line.match(/^(\s*)\S/)
        return match ? match[1].length : Infinity
      })
      .filter((indent) => indent !== Infinity)
  )

  // Remove the minimum indentation from each line
  const trimmedLines = lines.map((line) => {
    const match = line.match(new RegExp(`^(\\s{${minIndent}})`))
    return match ? line.slice(minIndent) : line
  })

  // Join the lines back together
  return trimmedLines.join("\n")
}