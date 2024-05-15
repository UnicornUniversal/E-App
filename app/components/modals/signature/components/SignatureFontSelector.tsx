// Components
import { BaseButton } from "@/app/components";
import { SignatureFont } from "@/types/types";

// Icons
import { Check } from "lucide-react";

// Types
export type SignatureColor = {
    name: string;
    label: string;
    color: string;
};

type SignatureColorSelectorProps = {
    typedSignatureFonts: SignatureFont[];
    colors: SignatureColor[];
    selectedColor: string;
    selectedFont: SignatureFont
    handleColorButtonClick: (color: string) => void;
    setSelectedFont: (value: SignatureFont) => void
};

const SignatureColorSelector = ({
    colors,
    selectedFont,
    setSelectedFont,
    selectedColor,
    handleColorButtonClick, typedSignatureFonts,
}: SignatureColorSelectorProps) => {
    return (
        <div className="flex gap-2">
            {colors.map((color) => (
                <BaseButton
                    key={color.color}
                    size="icon"
                    tooltipLabel={color.label}
                    style={{
                        backgroundColor: color.color,
                    }}
                    className="flex justify-center items-center h-6 w-6 rounded-full border-2 hover:border-blue-700"
                    onClick={() => handleColorButtonClick(color.color)}
                >
                    {selectedColor === color.color && (
                        <span className="text-white">
                            <Check size={16} />
                        </span>
                    )}
                </BaseButton>
            ))}
        </div>
    );
};

export default SignatureColorSelector;