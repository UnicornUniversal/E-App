"use client";

import { useEffect, useState } from "react";

// RHF
import { FieldArrayWithId, useFormContext, useWatch } from "react-hook-form";

// DnD
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ShadCn
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Components
import { BaseButton, FormInput, FormTextarea, SelectDemo } from "@/app/components";

// Contexts
import { useTranslationContext } from "../../../context/TranslationContext";

// Icons
import { ChevronDown, ChevronUp, GripVertical, Trash2 } from "lucide-react";

// Types
import { ItemType, NameType } from "@/types/types";
import { selectIndustry } from "@/lib/taxes";
import { useChargesContext } from "@/app/context/ChargesContext";

type SingleItemProps = {
    name: NameType;
    index: number;
    fields: ItemType[];
    field: FieldArrayWithId<ItemType>;
    moveFieldUp: (index: number) => void;
    moveFieldDown: (index: number) => void;
    removeField: (index: number) => void;
};

const SingleItem = ({
    name,
    index,
    fields,
    field,
    moveFieldUp,
    moveFieldDown,
    removeField,
}: SingleItemProps) => {
    const { control, setValue } = useFormContext();
    const [selectedState, setSelectedState] = useState("CA");
    const { selectedTax, setSelectedTax } = useChargesContext();

    const { _t } = useTranslationContext();

    // Items
    const itemName = useWatch({
        name: `${name}[${index}].name`,
        control,
    });

    const rate = useWatch({
        name: `${name}[${index}].unitPrice`,
        control,
    });

    const quantity = useWatch({
        name: `${name}[${index}].quantity`,
        control,
    });

    const total = useWatch({
        name: `${name}[${index}].total`,
        control,
    });

    const discount = useWatch({
        name: `${name}[${index}].discount`,
        control,
    });
    
    const tax = useWatch({
        name: `${name}[${index}].tax`,
        control,
    });

    // Currency
    const currency = useWatch({
        name: `details.currency`,
        control,
    });

    // useEffect(() => {
    //     // Calculate total when rate or quantity changes
    //     if (rate != undefined && quantity != undefined) {
    //         const calculatedTotal = (rate * quantity).toFixed(2);
    //         setValue(`${name}[${index}].total`, calculatedTotal);
    //     }
    // }, [rate, quantity, setValue, name, index]);

    useEffect(() => {
        // Calculate total when rate, quantity, discount, or selected state changes
        if (rate != undefined && quantity != undefined && discount != undefined && selectedState != undefined) {
            const numRate = Number(rate);
            const numQuantity = Number(quantity);
            const numDiscount = Number(discount);
            const numTax = Number(tax);

            // Calculate the subtotal (rate * quantity)
            const subtotal = numRate * numQuantity;

            // Calculate the taxed amount (subtotal + tax percentage of subtotal)
            const taxedAmount = subtotal + (subtotal * (numTax / 100));

            // Calculate the final total (taxed amount - discount percentage of taxed amount)
            const finalTotal = taxedAmount - (taxedAmount * (numDiscount / 100));

            // Round the final total to 2 decimal places
            const calculatedTotal = finalTotal.toFixed(2);
            
            setValue(`${name}[${index}].total`, calculatedTotal);
        }
    }, [rate, quantity, discount, selectedState, setValue, name, index, tax]);

    // DnD
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: field.id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const boxDragClasses = isDragging
        ? "border-2 bg-gray-200 border-blue-600 dark:bg-slate-900 z-10"
        : "border";

    const gripDragClasses = isDragging
        ? "opacity-0 group-hover:opacity-100 transition-opacity cursor-grabbing"
        : "cursor-grab";

    return (
        <div
            style={style}
            {...attributes}
            className={`${boxDragClasses} group flex flex-col gap-y-5 p-3 my-2 cursor-default rounded-xl bg-gray-50 dark:bg-slate-800 dark:border-gray-600`}
        >
            {/* {isDragging && <div className="bg-blue-600 h-1 rounded-full"></div>} */}
            <div className="flex flex-wrap justify-between">
                {itemName != "" ? (
                    <p className="font-medium">
                        #{index + 1} - {itemName}
                    </p>
                ) : (
                    <p className="font-medium">#{index + 1} - Empty name</p>
                )}

                <div className="flex gap-3">
                    {/* Drag and Drop Button */}
                    <div
                        className={`${gripDragClasses} flex justify-center items-center`}
                        ref={setNodeRef}
                        {...listeners}
                    >
                        <GripVertical className="hover:text-blue-600" />
                    </div>

                    {/* Up Button */}
                    <BaseButton
                        size={"icon"}
                        tooltipLabel="Move the item up"
                        onClick={() => moveFieldUp(index)}
                        disabled={index === 0}
                    >
                        <ChevronUp />
                    </BaseButton>

                    {/* Down Button */}
                    <BaseButton
                        size={"icon"}
                        tooltipLabel="Move the item down"
                        onClick={() => moveFieldDown(index)}
                        disabled={index === fields.length - 1}
                    >
                        <ChevronDown />
                    </BaseButton>
                </div>
            </div>
            <div
                className="flex flex-wrap justify-between gap-y-5 gap-x-2"
                key={index}
            >
                <FormInput
                    name={`${name}[${index}].name`}
                    label={_t("form.steps.lineItems.name")}
                    placeholder="Item name"
                    vertical
                />

                {/* <SelectDemo
                    name={`${name}[${index}].tax`}
                    label={_t("form.steps.lineItems.tax")}
                    items={selectIndustry()}
                    value={selectIndustry().toString()}
                    placeholder="Taxes" 
                    title={"Taxes"}                    
                    /> */}

                <FormInput
                    name={`${name}[${index}].quantity`}
                    type="number"
                    label={_t("form.steps.lineItems.quantity")}
                    placeholder={_t("form.steps.lineItems.quantity")}
                    className="w-[8rem]"
                    vertical
                />

                <FormInput
                    name={`${name}[${index}].unitPrice`}
                    type="number"
                    label={_t("form.steps.lineItems.rate")}
                    labelHelper={`(${currency})`}
                    placeholder={_t("form.steps.lineItems.rate")}
                    className="w-[8rem]"
                    vertical
                />

                <FormInput
                name={`${name}[${index}].discount`}
                type="number"
                label={_t("Discount")}
                placeholder={_t("form.steps.lineItems.discount")}
                className="w-[8rem]"
                vertical
                />
                  
                <FormInput
                    name={`${name}[${index}].tax`}
                    type="number"
                    label={_t("Tax")}
                    placeholder={_t("form.steps.lineItems.tax")}
                    className="w-[8rem]"
                    vertical
                    />

                <div className="flex flex-col gap-2">
                    <div>
                        <Label>{_t("form.steps.lineItems.total")}</Label>
                    </div>
                    <Input
                        value={`${total} ${currency}`}
                        readOnly
                        placeholder="Item total"
                        className="border-none font-medium text-lg bg-transparent"
                        size={10}
                    />
                </div>
            </div>
            <FormTextarea
                name={`${name}[${index}].description`}
                label={_t("form.steps.lineItems.description")}
                placeholder="Item description"
            />
            <div>
                {/* Not allowing deletion for first item when there is only 1 item */}
                {fields.length > 1 && (
                    <BaseButton
                        variant="destructive"
                        onClick={() => removeField(index)}
                    >
                        <Trash2 />
                        {_t("form.steps.lineItems.removeItem")}
                    </BaseButton>
                )}
            </div>
        </div>
    );
};

export default SingleItem;