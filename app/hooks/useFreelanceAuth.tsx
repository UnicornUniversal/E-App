import { useState } from "react";
import { useSteps } from "."

const useFreelanceAuth = () => {

  const { FREELANCE_STEPS } = useSteps()

  const features = ['Ecommerce', 'Website', 'File manager']

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return { features, FREELANCE_STEPS, selectedOptions, setSelectedOptions }
}

export default useFreelanceAuth