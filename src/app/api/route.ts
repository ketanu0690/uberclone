import { NextResponse } from "next/server";

type Suggestion = {
  description: string;
};

export async function GET() {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${"Delhi"}&key=${
        process.env.NEXT_PUBLIC_GOOGLE_API_KEY
      }`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();
    const suggestions: Suggestion[] = data.predictions.map(
      (suggestion: any) => suggestion.description
    );
    return NextResponse.json(suggestions);
  } catch (error) {
    console.error("Error fetching Google API:", error);
  }
}
