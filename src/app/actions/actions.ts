"use server";

export async function createPost(formData: FormData) {

  const title = formData.get("title") as string;
  const body = formData.get("content") as string;

  console.log(title, body);



}
