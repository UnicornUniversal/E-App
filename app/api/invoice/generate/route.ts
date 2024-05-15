import { NextRequest } from "next/server";

// Services
import { generatePdfService } from "@/services/invoice/server/generateInvoiceService";

export async function POST(req: NextRequest) {
    const result = await generatePdfService(req);
    return result;
}