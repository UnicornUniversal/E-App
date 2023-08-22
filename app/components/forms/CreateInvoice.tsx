// 'use client'

// import { IconBaseProps } from "react-icons"
// import { Button, Input, InvoiceItem, Select, TextArea } from ".."
// import { Fa500Px } from "react-icons/fa"
// import { IoAddCircle, IoNavigate } from "react-icons/io5"
// import { useInvoice } from "@/app/hooks"
// import { InvoiceItem as InvoiceItemType } from "@/app/hooks/useInvoice"
// import { ChangeEvent } from "react"

// const CreateInvoice: React.FC = () => {

//   const {    invoiceData,
//     lineItems,
//     handleAddItem, 
//     handleRemoveItem,
//     handleInvoiceChange, initialInvoiceItemData, setLineItems } = useInvoice()

//           console.log(invoiceData);
          

//   return <div className=" space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <h1>From</h1>
//                 <TextArea 
//                 type={"text"} 
//                 name={"For"} 
//                 value={undefined}          
//                 placeholder={""} 
                
//                 icon={Fa500Px}   
//                 modifier="textarea w-full outline-none border-none "         
//                 />
//               </div>
//               <div className="space-y-2">
//                 <h1>To</h1>
//                 <TextArea 
//                 type={""} 
//                 name={""} 
//                 value={undefined}  
//                 placeholder={""} 
//                 icon={Fa500Px}    
//                 modifier="textarea w-full outline-none border-none"           
//                 />
//               </div>
              
//             </div>
//             <div className="flex items-center gap-2 ">
//               <Input 
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInvoiceChange(null, 'issueDate', e.target.value)}
//               icon={IoNavigate} 
//               onIcon={false} 
//               modifier="input" 
//               type={"text"} 
//               name={"invoiceNumber"} 
//               value={undefined} 
//               placeholder={"Invoice number"}              
//               />
//               <Select 
//               title="Status" 
//               value={invoiceData.status} 
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInvoiceChange(null, 'status', e.target.value)}
//               name="status">

//                   <option value="draft">Draft</option>
//                   <option value="paid">Paid</option>
//                   <option value="pending">Pending</option>
//                   <option value="overdue">Overdue</option>

//               </Select>
//               <Input 
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInvoiceChange(null, 'issueDate', e.target.value)}
//               modifier="input" 
//               type={"text"} 
//               name={"issueDate"} 
//               value={invoiceData.issueDate} 
//               placeholder={"Issue date"} 
//               icon={IoNavigate }              
//               />
//               <Input 
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInvoiceChange(null, 'dueDate', e.target.value)}
//               onIcon={false} 
//               modifier="input"  
//               type={"text"} 
//               name={"dueDate"} 
//               value={invoiceData.dueDate} 
//               placeholder={"Due date"} 
//               icon={IoNavigate}              
//               />
//               <Input 
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInvoiceChange(null, 'items', e.target.value)}
//               modifier="input"  
//               type={""} 
//               name={""} 
//               value={undefined} 
//               placeholder={lineItems.length.toString()} 
//               icon={IoNavigate}    
//               disabled          
//               />
                  
//             </div>
       
//             <div className="w-full">
//               <h1>Details</h1>
//             <div className="divider"></div>
//             <div className="w-full flex justify-end">
//             <Button
//             icon={IoAddCircle}
//             text="Add"
//             modifier="btn"
//             clickEvent={() => setLineItems([...lineItems, initialInvoiceItemData])}
//             />
//             </div>
//             </div>
//             {/* Line items */}
//             <div className=" space-y-4">
//             {lineItems.map((item: InvoiceItemType, i: number) => (
//               <InvoiceItem     
//                 key={i}
//                 index={i}
//                 clickEvent={() => handleRemoveItem(i)}
//                 item={item}
//                 onChange={(field, value) => handleInvoiceChange(i, field, value, true)} 
//                         />
//             ))}
//             </div>
//             <div className="divider"></div>
//             <div className="flex justify-end">
//               <div>
//                 <h1>Subtotal </h1>
//                 <h1>Taxes </h1>
//                 <h1 className="font-bold">Total </h1>
//                 {<h1>Shipping </h1>}
//                 <h1>Discount </h1>
//                 <h1></h1>
//               </div>
//             </div>
//         </div>
// }

// export default CreateInvoice