'use client'

import { Invoice, ProductLine, ShippingOptions } from "@/types/interfaces";
import { FaCloudDownloadAlt, FaIcons, FaPlus, FaPlusCircle, FaTrash } from "react-icons/fa";
import format from 'date-fns/format'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { IconBaseProps } from "react-icons";
import { TaxOptions } from "../NewInvoiceComponents/data/initialData";
import { useQuotes, usePDFStyles } from "@/app/hooks";

interface Props {
    data?: Invoice
    pdfMode?: boolean
    onChange?: (invoice: Invoice) => void
    handlePDFMode?: () => void
  }

const CreateQuotes:React.FC<Props> = ({ data, pdfMode, onChange, handlePDFMode }) => {

    const { invoice, handleChange, handleAdd, handleProductLineChange, handleRemove, 
        invoiceDate, dateFormat, invoiceDueDate, calculateAmount, subTotal,
        saleTax, selectedTaxRate, setSelectedTaxRate, amount, taxOptions, totalTax } = useQuotes()
      const { quotes } = usePDFStyles()

    return <PDFViewer style={quotes.viewer}>
         <Document>
      <Page style={quotes.page}>
          <View style={quotes.section}>
                <Text>Hello</Text>
          </View>
          <View style={quotes.section}>
                <Text>World</Text>
          </View>
            </Page>
         </Document>
         </PDFViewer>
}

export default CreateQuotes
