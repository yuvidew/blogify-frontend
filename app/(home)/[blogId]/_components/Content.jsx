"use client"
import { useCreateBlockNote } from '@blocknote/react';
import React, { useEffect, useState } from 'react'

export const Content = ({
  content
}) => {
  const [html , setHtml] = useState("")
  const editor = useCreateBlockNote({
    initialContent: [{
        id: "f42e30b0-7d98-4fe8-bac8-6a5dc24a9fbc",
        type: "paragraph",
        props: {
            textColor: "default",
            backgroundColor: "default",
            textAlignment: "left"
          },
          content: [],
          children: []
      }],
  });

  const onMarkDown = async () => {
      const markdown = await editor.blocksToHTMLLossy(JSON.parse(content));
      setHtml(markdown)
  }

  useEffect(() => {
    onMarkDown()
  } , [content])

  return (
    <div dangerouslySetInnerHTML={{__html : html}} ></div>
  )
}
