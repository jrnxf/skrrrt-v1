import React from 'react'

export const Json = (obj) => (
  <pre>
    {JSON.stringify(
      {
        ...obj,
      },
      null,
      2,
    )}
  </pre>
)
