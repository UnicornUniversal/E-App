"use client"

import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

  import { usePDFStyles } from "@/app/hooks";
import { useInformationContext } from "@/app/context/InformationContext";
import { useEffect, useState } from "react";
import { Invoice } from "@/types/interfaces";
import { initialInvoice } from "../data/initialData";

const InvoicePDF = () => {

    const { quotes } = usePDFStyles()
    const { invoiceItem, invoice  } = useInformationContext()
    const [ invoiceInformation, setInvoiceInformation ] = useState<Invoice>(initialInvoice)

    console.log(invoiceItem);

    useEffect(() => {
        const storedInvoice = localStorage.getItem('invoice');
        if(storedInvoice) {
            setInvoiceInformation(JSON.parse(storedInvoice));
        }
      }, [invoiceInformation, invoice]);

  return  <PDFViewer style={quotes.viewer}>
            <Document>
            <Page size="A4" style={quotes.page}>
            <View>
                <Text style={{fontSize: 18}}>{invoiceInformation.invoiceTitle}</Text><br/>
            </View>
            <View>
                <Text style={{fontSize: 18}}>{invoice.billTo}</Text><br/>
            </View>
            <View>
             {invoiceInformation.productLines.map((item, i) => (<View key={i}>
                <Text>{item.description}</Text>
                <Text>{item.amount}</Text>
                <Text>{item.quantity}</Text>
                <Text>{item.price}</Text>
                <Text>{item.discount}</Text>
                <Text>{item.taxRate}</Text>
            </View>))}
            </View>
            <View>
                
            </View>
            </Page>
            </Document>
        </PDFViewer>  
}

export default InvoicePDF