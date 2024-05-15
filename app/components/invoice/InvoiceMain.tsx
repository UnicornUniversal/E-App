"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Form } from "@/components/ui/form";

// Components
import { InvoiceActions, InvoiceForm } from "@/app/components";

// Context
import { useInvoiceContext } from "../../context/InvoiceContext";

// Types
import { InvoiceType } from "@/types/types";

const    InvoiceMain = () => {

    const { handleSubmit } = useFormContext<InvoiceType>();

    // Get the needed values from invoice context
    const { onFormSubmit } = useInvoiceContext();

    return (
        <>
            <Form {...useFormContext<InvoiceType>()}>
                <form
                    onSubmit={handleSubmit(onFormSubmit, (err) => {
                        console.log(err);
                    })}
                >
                    <div className="flex gap-4 p-4">
                        <InvoiceForm />
                        <InvoiceActions />
                    </div>
                </form>
            </Form>
        </>
    );
};

export default InvoiceMain;