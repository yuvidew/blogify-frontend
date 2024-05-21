import React from 'react'
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useTheme } from 'next-themes';

export const Editor = (
    {
        onChange,
        initialContent,
        editable
    }
) => {
    const {resolvedTheme} = useTheme()
    const editor = useCreateBlockNote({
        editable,
        initialContent:
        initialContent
        ? JSON.parse(initialContent) : undefined,
    });
    return (
        <div>
            <BlockNoteView
                editor={editor}
                theme={ resolvedTheme === "dark" ?  "dark" : "light"}
                onChange={() => {
                // console.log(editor.document)
                onChange(JSON.stringify(editor.document , null , 2))
                }}
            />
        </div>
    )
}
