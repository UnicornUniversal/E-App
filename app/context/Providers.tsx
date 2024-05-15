"use client";

import React from "react";

// Next Auth
import { SessionProvider } from "next-auth/react";

// RHF
import { FormProvider, useForm } from "react-hook-form";

// Zod
import { zodResolver } from "@hookform/resolvers/zod";

// Schema
import { InvoiceSchema } from "@/lib/schemas";

// Context
import { ThemeProvider } from "../context/ThemeProvider";
import { TranslationProvider } from "../context/TranslationContext";
import { InvoiceContextProvider } from "../context/InvoiceContext";
import { ChargesContextProvider } from "../context/ChargesContext";
import { AppContext } from '../context/AppContext'
import { InformationContext } from '../context/InformationContext'

// Types
import { InvoiceType } from "@/types/types";

// Variables
import { FORM_DEFAULT_VALUES } from "@/lib/variables";

type ProvidersProps = {
    children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
    const form = useForm<InvoiceType>({
        resolver: zodResolver(InvoiceSchema),
        defaultValues: FORM_DEFAULT_VALUES,
    });

    return (
        <SessionProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <TranslationProvider>
                <FormProvider {...form}>
                    <InvoiceContextProvider>
                        <ChargesContextProvider>
                            <InformationContext>
                                    <AppContext>
                                            {children}
                                    </AppContext>
                            </InformationContext>
                        </ChargesContextProvider>
                    </InvoiceContextProvider>
                </FormProvider>
            </TranslationProvider>
        </ThemeProvider>
        </SessionProvider>
    );
};

export default Providers;   