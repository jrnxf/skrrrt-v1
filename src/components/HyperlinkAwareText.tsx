import React from 'react'
import Linkify from 'react-linkify'

export const HyperlinkAwareText = ({ children }) => (
  <Linkify
    componentDecorator={(decoratedHref, decoratedText, key) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={decoratedHref}
        key={key}
        className="underline"
      >
        {decoratedText}
      </a>
    )}
  >
    {children}
  </Linkify>
)
