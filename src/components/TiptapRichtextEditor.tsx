"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import Starterkit from "@tiptap/starter-kit";
import { useFormikContext } from "formik";
import { FC } from "react";
import TiptapMenuBar from "./TiptapMenuBar";
import { Label } from "./ui/label";

interface TiptapRichtextEditorProps {
  label: string;
  name: string;
}

const TiptapRichtextEditor: FC<TiptapRichtextEditorProps> = ({
  label,
  name,
}) => {
  const {
    setFieldValue,
    setFieldTouched,
    setFieldError,
    touched,    
    values,
  } = useFormikContext<any>();
  const editor = useEditor({
    extensions: [Starterkit],
    content: values[name],
    editorProps: {
        attributes: {
            class: "prose dark:prose-invert border rounded-md p-3 min-h-[156px] max-w-none"
        }
    },
    onUpdate: ({ editor }) => {
      setFieldValue(name, editor.getHTML());
    },
    onFocus: () => {
      setFieldTouched(name, true);
    },
    onBlur: () => {
      if (editor?.isEmpty) setFieldError(name, `${label} isrequired`);
    },
  });

  return (
    <div>
      <Label>{label}</Label>
      <TiptapMenuBar editor={editor} />
      <EditorContent editor={editor} />
      {editor?.isEmpty && touched[name] && (
        <p className="text-red-500">Content is required</p>
      )}
    </div>
  );
};

export default TiptapRichtextEditor;
