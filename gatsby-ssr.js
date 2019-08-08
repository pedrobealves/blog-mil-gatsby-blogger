const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  const snippet = `"object"==typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(__REACT_DEVTOOLS_GLOBAL_HOOK__.inject=function(){})`
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      <script dangerouslySetInnerHTML={{ __html: snippet }} />,
    ])
  }
}
