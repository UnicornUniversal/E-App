
import { Invoice, ProductLine, ShippingOptions } from "@/types/interfaces"

export interface TaxOptions {
  percentage: number
}

export const initialProductLine: ProductLine[] = [{
  description: '',
  quantity: '1',
  price: '',
  taxRate:  [
    { 'percentage': 0},   {'percentage': 4},   {'percentage': 5},   {'percentage': 10},
  ],
  discount: '',
  amount: ''
}]

export const initialShippingOptions: ShippingOptions[] = [{
  description: '',
  price: ''
}]

export const initialInvoice: Invoice = {
  logo: '',
  logoWidth: 100,
  title: 'INVOICE',
  companyName: '',
  name: '',
  companyAddress: '',
  companyAddress2: '',
  companyCountry: 'United States',
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Quantity',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: initialProductLine,
  shippingOptions:  initialShippingOptions,
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}