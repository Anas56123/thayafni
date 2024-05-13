"use client";
import VerifyYourEmail from "@/emails/VerifyYourEmail";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { firstName, email, validationCode } = await request.json();
  const router = useRouter();
  try {
    resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Verified email",
      react: VerifyYourEmail({
        firstName,
        validationCode,
      }),
    });
    console.log("Sent email");
    router.push("/verfication");
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (e) {
    console.error({ error: e });
    if (e instanceof Error) {
      console.error(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
