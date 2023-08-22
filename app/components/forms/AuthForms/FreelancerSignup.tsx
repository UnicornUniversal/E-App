import { useFreelanceAuth } from "@/app/hooks"
import OptionsButton from "../../ui/Input/OptionsButton"


const FreelancerSignup = () => {

  const { features, selectedOptions, setSelectedOptions } = useFreelanceAuth()

  return <>
          <div>
            <OptionsButton 
            options={features} 
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            />
          </div>
        </>
}

export default FreelancerSignup