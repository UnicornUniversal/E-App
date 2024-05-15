import { useReceipts } from "@/app/hooks"
import { Invoice, ProductLine } from "@/types/interfaces";
import { Button, Document, Download, EditableCalendarInput, EditableInput, EditableTextarea, Input, Page, Select, Text, TextArea, View } from "../..";
import { FaCloudDownloadAlt, FaIcons, FaPlus, FaTrash } from "react-icons/fa";
import format from 'date-fns/format'
import { IconBaseProps } from "react-icons";
import { TaxOptions } from "../NewInvoiceComponents/data/initialData";
import { useQuotes } from "@/app/hooks";


interface Props {
    data?: Invoice
    pdfMode?: boolean
    onChange?: (invoice: Invoice) => void
    handlePDFMode?: () => void
  }
const CreateReceipt: React.FC<Props> = ({ data, pdfMode, onChange, handlePDFMode }) => {


    const { invoice, handleChange, handleAdd, handleProductLineChange, handleRemove, 
        invoiceDate, dateFormat, invoiceDueDate, calculateAmount, subTotal,
        saleTax, selectedTaxRate, setSelectedTaxRate, amount, taxOptions, totalTax } = useReceipts()

  return <></>
//   <Document pdfMode={pdfMode}>
//   <div className='grid place-items-center text-2xl w-full py-4'>
//     <h1>Company Logo</h1>
//     <View className="" pdfMode={pdfMode}>
//             <h1>Receipt number</h1>
//           </View>
//           <View className="" pdfMode={pdfMode}>
//             <EditableInput
//             className='bg-transparent text-center'
//               placeholder=" INV-001"
//               value={invoice.invoiceTitle}
//               onChange={(value) => handleChange('invoiceTitle', value)}
//               pdfMode={pdfMode}
//               disabled
//             />
//           </View>
//   </div>
  
//   <div className='w-full h-[300px] p-4 flex'>
//   <TextArea 
//   type={'text'} 
//   name={''} 
//   value={undefined} 
//   placeholder={'From:'} 
//   modifier='w-full bg-transparent outline-none'
//   icon={FaIcons}/>

//   <TextArea 
//   type={'text'} 
//   name={''} 
//   value={undefined} 
//   placeholder={'To:'} 
//   modifier='w-full bg-transparent outline-none'
//   icon={FaIcons}/>
//   </div>
//   <Page className="invoice-wrapper p-8" pdfMode={pdfMode}>
//     {!pdfMode && <Download data={invoice} />}
//     <View className="flex items-center gap-4" pdfMode={pdfMode}>
         
//           <div>
//           <View className="flex gap-4" pdfMode={pdfMode}>
      
//       <View className="flex items-center gap-4" pdfMode={pdfMode}>
//         <View className="" pdfMode={pdfMode}>
//           <h1>Invoice date</h1>
//         </View>
//         <View className="w-60" pdfMode={pdfMode}>
//           <EditableCalendarInput
//             value={format(invoiceDate, dateFormat)}
//             selected={invoiceDate}
//             onChange={(date) =>
//               handleChange(
//                 'invoiceDate',
//                 date && !Array.isArray(date) ? format(date, dateFormat) : ''
//               )
//             }
//             pdfMode={pdfMode}
//           />
//         </View>
//       </View>
//       <View className="flex items-center gap-4" pdfMode={pdfMode}>
//         <View className="" pdfMode={pdfMode}>
//         <h1>Due date</h1>
//         </View>
//         <View className="" pdfMode={pdfMode}>
//           <EditableCalendarInput
//             value={format(invoiceDueDate, dateFormat)}
//             selected={invoiceDueDate}
//             onChange={(date) =>
//               handleChange(
//                 'invoiceDueDate',
//                 date && !Array.isArray(date) ? format(date, dateFormat) : ''
//               )
//             }
//             pdfMode={pdfMode}
//           />
//         </View>
//       </View>
//     </View> 
//     <Input type={''} 
//     value={undefined} placeholder={'Title'} 
//     icon={function (props: IconBaseProps): JSX.Element {
//           throw new Error('Function not implemented.')
//         } }    
//     modifier='input mt-4'    
//     />
//     </div>
//      </View>
  
//     <div className='divider'></div>

//     <div className='items-center flex '> 
//         <h1>Details</h1>
//        <div className='w-full flex justify-end'>
//        {!pdfMode && (

//           <Button icon={FaPlus} text='Add' modifier="btn" clickEvent={handleAdd}/>
          
//         )}
//     </div>
//     </div>
   
//     <div className='divider'></div>

//     {invoice.productLines.map((productLine: ProductLine, i: number) => {
//       return !pdfMode && productLine.length < 1 ? (
//         <Text key={i}>No items</Text>
//       ) : (
//         <div>
//         <View key={i} className="flex gap-4 items-center" pdfMode={pdfMode}>
//           <View className="" pdfMode={pdfMode}>
//             <EditableTextarea
//               className="dark"
//               rows={2}
//               placeholder="Description"
//               value={productLine.description}
//               onChange={(value) => handleProductLineChange(i, 'description', value)}
//               pdfMode={pdfMode}
//             />
//           </View>
//           <View className="" pdfMode={pdfMode}>
//             <EditableInput
//               placeholder='Quantity'
//               className="input"
//               value={productLine.quantity}
//               onChange={(value) => handleProductLineChange(i, 'quantity', value)}
//               pdfMode={pdfMode}
//             />
//           </View>
//           <View className="" pdfMode={pdfMode}>
//             <EditableInput
//               placeholder='Price'
//               className="input"
//               value={productLine.price}
//               onChange={(value) => handleProductLineChange(i, 'price', value)}
//               pdfMode={pdfMode}
//             />
//           </View>
//           <View className=" flex gap-" pdfMode={pdfMode}>
//             <Text className="dark right" pdfMode={pdfMode}>
//               {calculateAmount(productLine.quantity, productLine.price, productLine.taxRate)}
//             </Text>
//             <Text className="dark right" pdfMode={pdfMode}>
//               {amount?.toString()}
//             </Text>
//           </View>
       
//           <View className="" pdfMode={pdfMode}>
//             <EditableInput
//               placeholder='Discount'
//               className="input  "
//               value={productLine.discount}
//               onChange={(value) => handleProductLineChange(i, 'discount', value)}
//               pdfMode={pdfMode}
//             />
//           </View>
//           <View>
//           {/* <EditableInput
//             className="input  "  
//             pdfMode={pdfMode}
//             placeholder='Tax rate' 
//             value={productLine.taxRate}
//             onChange={(value: string) => {
//               // Update tax rate and recalculate the amount
//               handleProductLineChange(i, 'taxRate', value);
//             }}
//             /> */}
          
//           <Select
//             modifier='w-full'
//             placeholder='Tax rate' 
//             value={productLine.taxRate}
//             onChange={(value: string) => {
//               // Update tax rate and recalculate the amount
//               handleProductLineChange(i, 'taxRate', value);
//             }}  >
//            {taxOptions.map((option: TaxOptions)=> (<option key={option.percentage}>
//             {option.percentage}
//             </option>))}
//         </Select>
//           </View>
//         <div className='flex py-2 justify-end'>
//             {!pdfMode && (

//             <Button
//             icon={FaTrash}
//               modifier="btn bg-red-500/50"
//               aria-label="Remove"
//               text=""
//               clickEvent={() => handleRemove(i)}
//             />
             
//           )}
//         </div>
//         </View>
        
        
//         </div>
//       )
//     })}

//     <div className='divider'></div>  

//     <View className="flex items-center w-full justify-end" pdfMode={pdfMode}>
    
//       <View className="flex flex-col" pdfMode={pdfMode}>
//          <View pdfMode={pdfMode}>
//             <Button
           
//             text='Add shipping details'
//             />

//           </View> 
//             <View className=" flex items-center" pdfMode={pdfMode}>
        
//           <View className="" pdfMode={pdfMode}>
//             <EditableInput
//               value={invoice.subTotalLabel}
//               onChange={(value) => handleChange('subTotalLabel', value)}
//               pdfMode={pdfMode}
//               className='bg-transparent'
//             />
//           </View>
//           <View className="" pdfMode={pdfMode}>
//             <Text className="right bold dark" pdfMode={pdfMode}>
//               {subTotal?.toFixed(2)}
//             </Text>
//           </View>
//         </View>
//         {/* <View className="flex items-center" pdfMode={pdfMode}>
//           <View className="" pdfMode={pdfMode}>
//             <EditableInput
//               value={invoice.taxLabel}
//               onChange={(value) => handleChange('taxLabel', value)}
//               pdfMode={pdfMode}
//               className='bg-transparent'
//             />
//           </View>
//           <View className="" pdfMode={pdfMode}>
//             <Text className="right bold dark" pdfMode={pdfMode}>
//               {saleTax?.toFixed(2)}
//             </Text>
//           </View>
//         </View> */}
//         <View className="flex" pdfMode={pdfMode}>
//           <View className="flex" pdfMode={pdfMode}>
//             <EditableInput
//               className="bg-transparent"
//               value={invoice.totalLabel}
//               onChange={(value) => handleChange('totalLabel', value)}
//               pdfMode={pdfMode}
//             />
//           </View>
//           <View className="flex" pdfMode={pdfMode}>
//             <EditableInput
//               className="bg-transparent w-3"
//               value={invoice.currency}
//               onChange={(value) => handleChange('currency', value)}
//               pdfMode={pdfMode}
//             />
//             <Text className="right bold dark w-auto" pdfMode={pdfMode}>
//               {(typeof subTotal !== 'undefined'
//                 ? totalTax + subTotal
//                 : 0
//               ).toFixed(2)}
//             </Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   </Page>
//   <Button
//   text='PDF Mode'
//   icon={FaCloudDownloadAlt}
//   clickEvent={handlePDFMode}
//   />

// </Document>
}

export default CreateReceipt