"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {

  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login")
  }

  const title = formData.get("title") as string;
  const body = formData.get("content") as string;

  console.log(title, body);

  await prisma.post.create(
    {
      data: {
        title,
        body,
      }
    }
  )

  revalidatePath('/posts')
}
