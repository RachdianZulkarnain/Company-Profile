"use client";

import TiptapRichtextEditor from "@/components/TiptapRichtextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AuthGuard } from "@/hoc/AuthGuard";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Trash } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import useCreateBlog from "./_hooks/useCreateBlog";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
});

const write = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const onChangeThumbnail = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (Field: string, value: any) => void
  ) => {
    const files = e.target.files;

    if (files && files.length) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setFieldValue("thumbnail", files[0]);
    }
  };

  const removeThumbnail = (
    setFieldValue: (Field: string, value: any) => void
  ) => {
    setSelectedImage("");
    setFieldValue("thumbnail", null);
  };

  const { mutateAsync: createBlog, isPending } = useCreateBlog();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 border border-gray-200">
        <Formik
          initialValues={{
            title: "",
            description: "",
            content: "",
            category: "",
            thumbnail: null,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await createBlog(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-6">
              <div className="flex flex-col gap-6">
                {/* TITLE */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-gray-700">
                    Title
                  </Label>
                  <Field
                    name="title"
                    as={Input}
                    type="text"
                    placeholder="Title"
                    className="focus-visible:ring-indigo-500"
                  />
                  <ErrorMessage
                    name="title"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* CATEGORY */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-gray-700">
                    Category
                  </Label>
                  <Field
                    name="category"
                    as={Input}
                    type="text"
                    placeholder="Category"
                    className="focus-visible:ring-indigo-500"
                  />
                  <ErrorMessage
                    name="category"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-gray-700">
                    Description
                  </Label>
                  <Field
                    name="description"
                    as={Textarea}
                    placeholder="Description"
                    className="focus-visible:ring-indigo-500"
                    style={{ resize: "none" }}
                  />
                  <ErrorMessage
                    name="description"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* CONTENT */}
                <TiptapRichtextEditor label="Content" name="content" />

                {/* THUMBNAIL */}
                {selectedImage ? (
                  <div className="relative w-fit">
                    <Image
                      src={selectedImage}
                      alt="thumbnail"
                      width={200}
                      height={150}
                      className="object-cover rounded-md"
                    />
                    <Button
                      size="icon"
                      className="absolute -top-2 -right-2 rounded-full bg-red-500 hover:bg-red-600 text-white"
                      onClick={() => removeThumbnail(setFieldValue)}
                      type="button"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="thumbnail" className="text-gray-700">
                      Thumbnail
                    </Label>
                    <Input
                      name="thumbnail"
                      type="file"
                      accept="image/*"
                      onChange={(e) => onChangeThumbnail(e, setFieldValue)}
                      className="file:cursor-pointer focus-visible:ring-indigo-500"
                    />
                    <ErrorMessage
                      name="thumbnail"
                      component="p"
                      className="text-sm text-red-500"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                >
                  {isPending ? "Loading..." : "Submit"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default AuthGuard(write);
