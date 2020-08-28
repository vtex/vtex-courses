export const getStepStyles = () => `
  [block:html]
    ${JSON.stringify({
      html: `<style>
      section#hub-content header h1, section#hub-content header h2 {
        color: #f71963
      }
    
      p {
        line-height: 1.5rem;
      }
    </style>`,
    })}
  [/block]
`
