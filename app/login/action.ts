"use server";
import { Token } from "@mui/icons-material";
import { SignJWT, importJWK } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type LoginState = {
  message: string;
};

export async function login(prevState: LoginState, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email + " " + password);

  if (email !== "admin" || password !== "admin") {
    return { message: "Invalid email or password" };
  }

  // return {
  //   ...prevState,
  //   message: "Login success",
  // };

  const secretJWK = {
    kty: "oct",
    k: "qwerty",
  };

  const key = await importJWK(secretJWK, "HS256");
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);

  cookies().set("token", token);

  // return { message: "Login success" };

  redirect("/admin/user");
}
