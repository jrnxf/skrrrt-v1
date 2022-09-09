import React, { FC } from 'react'
import InnerHTML from 'dangerously-set-html-content'

export const OembedCard = ({ oembed }) => (
  <>
    {oembed && (
      <div className="flex flex-col w-full rounded-md bg-nord4 dark:bg-nord2">
        {oembed.html && (
          <InnerHTML
            html={oembed.html}
            className="flex justify-center w-full overflow-x-auto overflow-y-auto rounded-t-lg scrollbar"
          />
        )}

        {oembed.thumbnail_url && !oembed.html && (
          <img
            src={oembed.thumbnail_url}
            className="object-cover w-auto overflow-hidden rounded-t-lg max-h-84"
          />
        )}
        <div className="p-4">
          <a
            href={oembed.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-black underline"
          >
            {oembed.title || oembed.url}
          </a>
          <div className="font-semibold text-secondary">{oembed.description}</div>
        </div>
        {/* <pre>{JSON.stringify(oembed, null, 2)}</pre> */}
      </div>
    )}
  </>
)
