"use client";

import { useState } from "react";

// ShadCn
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

// Components
import { BaseButton } from "@/app/components";


// Context
import { useInvoiceContext } from "../../../context/InvoiceContext";

type MainInvoiceModalType = {
    children: React.ReactNode;
};

const MainInvoiceModal = ({ children }: MainInvoiceModalType) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild> Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Invoice</DialogTitle>
                    <DialogDescription>
                        Create your invoice
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default MainInvoiceModal;