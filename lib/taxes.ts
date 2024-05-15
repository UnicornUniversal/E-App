const firstTax = [{tax:'0.05'}, {tax:'0.05'}, ]
const secondTax = [0.03, 0.04, 0.05, 0.06]

export const stateTaxRates = {
    'State1': 0.06, // 6% tax
    'State2': 0.07, // 7% tax
    // Add more states and their tax rates here...
};



const userIndustry = "First"

export const selectIndustry = () => {

    if (userIndustry === "First") {
        return firstTax
    } else {
        return secondTax
    }
}

