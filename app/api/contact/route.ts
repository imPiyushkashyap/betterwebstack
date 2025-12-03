import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

const WEBHOOK_URL = process.env.WEBHOOK_URL || "";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = contactFormSchema.parse(body);

        // Check if webhook URL is configured
        if (!WEBHOOK_URL) {
            console.error("WEBHOOK_URL environment variable is not configured");
            return NextResponse.json(
                { success: false, message: "Server configuration error" },
                { status: 500 }
            );
        }

        // Forward to n8n webhook
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(validatedData),
        });

        if (!response.ok) {
            throw new Error("Failed to submit to webhook");
        }

        return NextResponse.json(
            { success: true, message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form submission error:", error);

        if (error instanceof Error && error.name === "ZodError") {
            return NextResponse.json(
                { success: false, message: "Invalid form data" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, message: "Failed to submit form" },
            { status: 500 }
        );
    }
}
