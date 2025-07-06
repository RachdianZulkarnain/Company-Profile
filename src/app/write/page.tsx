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
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  content: Yup.string().required("Content is required"),
  thumbnail: Yup.mixed().nullable().required("Thumbnail is required"),
});

const Write = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChangeThumbnail = (
    e: ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: any) => void
  ) => {
    const files = e.target.files;
    if (files && files.length) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setFieldValue("thumbnail", files[0]);
    }
  };

  const removeThumbnail = (
    setFieldValue: (field: string, value: any) => void
  ) => {
    setSelectedImage("");
    setFieldValue("thumbnail", null);
  };

  const { mutateAsync: createBlog, isPending } = useCreateBlog();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-100 px-4 py-10 relative">
      {/* Progress bar loading */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-indigo-500 animate-pulse z-50" />
      )}

      <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-6 sm:p-8 border border-gray-200">
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
            setLoading(true);
            try {
              await createBlog(values);
              router.push("/blog");
            } catch (err) {
              console.error("Failed to create blog:", err);
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form className="space-y-6">
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
                  className={`w-full focus-visible:ring-indigo-500 transition-all duration-200 ${
                    errors.title && touched.title
                      ? "border-red-500 animate-shake"
                      : ""
                  }`}
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
                  className={`w-full focus-visible:ring-indigo-500 transition-all duration-200 ${
                    errors.category && touched.category
                      ? "border-red-500 animate-shake"
                      : ""
                  }`}
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
                  className={`w-full focus-visible:ring-indigo-500 resize-none transition-all duration-200 ${
                    errors.description && touched.description
                      ? "border-red-500 animate-shake"
                      : ""
                  }`}
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
                    className={`file:cursor-pointer w-full focus-visible:ring-indigo-500 transition-all duration-200 ${
                      errors.thumbnail ? "border-red-500 animate-shake" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="thumbnail"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              )}

              {/* Submit button */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={isPending || loading}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200 px-6"
                >
                  {isPending || loading ? "Loading..." : "Submit"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default AuthGuard(Write);
