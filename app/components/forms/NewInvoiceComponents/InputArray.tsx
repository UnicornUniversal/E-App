import { ProductLine } from "@/types/interfaces";
import { produce } from "immer"
import { Input } from "../..";
import { Fa500Px } from "react-icons/fa";

interface InputArrayProps {
    invoiceItem: ProductLine[]
    handleAdd: () => void
    handleRemove: (i: number) => void
    setInvoiceItem: (value: React.SetStateAction<ProductLine[]>) => void
    taxOptions: {
        percentage: number;
    }[]
    calculateAmount: (quantity: string, price: string, tax: string) => string
}

const InputArray = ({ invoiceItem, handleAdd, setInvoiceItem, taxOptions, handleRemove, calculateAmount }: InputArrayProps) => {
  return (
    <div>
    <button
    onClick={() => {
      handleAdd() }}
  >
    add
  </button>
  {invoiceItem.map((p: ProductLine, index: number) => {
    return (
      <div className="flex" key={p.id}>

        <input
          onChange={e => {
            const description = e.target.value;
            setInvoiceItem(item =>
              produce(item, v => {
                v[index].description = description;
              })
            );
          }}
          value={p.description}
          placeholder="Description"
        />

        <input
          onChange={e => {
            const quantity = e.target.value;
            setInvoiceItem(item =>
              produce(item, v => {
                v[index].quantity = quantity;
              })
            );
          }}
          value={p.quantity}
          placeholder="Quantity"
        />
        <Input
        type="text"
        icon={Fa500Px}
          onChange={(e: any) => {
            const price = e.target.value;
            setInvoiceItem(item =>
              produce(item, v => {
                v[index].price = price;
              })
            );
          }}
          value={p.price}
          placeholder="Price"
        />

        <input
          onChange={e => {
            const discount = e.target.value;
            setInvoiceItem(item =>
              produce(item, v => {
                v[index].discount = discount;
              })
            );
          }}
          value={p.discount}
          placeholder="Discount"
        />

        <select
        value={p.taxRate}
        onChange={e => {
          const taxRate = e.target.value;
          setInvoiceItem(item =>
            produce(item, v => {
              v[index].taxRate = taxRate;
            })
          );
        }}
        >
          
            {taxOptions.map(option => (
              <option key={option.percentage }>{option.percentage}</option>
            )) }
     
        </select>
        <h1> {calculateAmount(p.quantity, p.price, p.taxRate)}</h1>
        <button
          onClick={() => {
          handleRemove(index)
          }}
        >
          x
        </button>
      </div>
      
    );
  })}
</div>
  )
}

export default InputArray