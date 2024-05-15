import { useFreelanceAuth } from "@/app/hooks"
import OptionsButton from "../../ui/Input/OptionsButton"
import { Button, ImageUpload, Input } from "../.."
import { AiFillCheckCircle } from "react-icons/ai"
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5"
import { FaAcquisitionsIncorporated } from "react-icons/fa"


const FreelancerSignup = () => {

  const { features, selectedOptions, setSelectedOptions, FREELANCE_STEPS, steps, setSteps, onBack, onNext, freelanceAuthData, setFreelanceAuthData  } = useFreelanceAuth()

  console.log(freelanceAuthData);
  console.log(selectedOptions);
  

  let heading = <></>
  let bodyContent = <></>

  if (steps === FREELANCE_STEPS.SELECT_FEATURES) {

    heading = <div className="lg-flex">
              <h1>Select Options</h1>
              </div> 

    bodyContent = <div className="">  
                    <OptionsButton 
                    options={features} 
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                    />
                  </div>
  }

  if ( steps === FREELANCE_STEPS.DETAILS ) {
    heading = <h1>Add Details</h1>

    bodyContent = <div className="space-y-4">
                  <div className="w-full">
                   <Input 
                  type={""} 
                  value={undefined} 
                  placeholder={"Display name"} 
                  icon={FaAcquisitionsIncorporated}
                  onIcon
                  modifier="input min-w-full"
                    />
                  </div>
                  <div className="lg:flex gap-4 space-y-4 lg:space-y-0">

                  <Input 
                  type={""} 
                  value={undefined} 
                  placeholder={"First name"} 
                  icon={FaAcquisitionsIncorporated}
                  onIcon
                  modifier="input min-w-full"
                    />
                  <Input 
                  type={""} 
                  value={undefined} 
                  placeholder={"Last name"} 
                  icon={FaAcquisitionsIncorporated}
                  onIcon
                  modifier="input min-w-full"
                    />
                  </div>
                  </div> 

  }

  if ( steps === FREELANCE_STEPS.UPLOAD_IMAGE) {
    heading = <h1>Add image</h1>

    bodyContent = <ImageUpload onChange={function (value: string): void {
      throw new Error("Function not implemented.")
    } }    
    />
  }
  
  return <div className="p-4 lg:p-6 space-y-4 flex flex-col justify-between w-[80vw] lg:w-[65vw] lg:min-h-[45vh] ">

  {heading}

    <div className="p-4 lg:min-w-[55vw] grid place-items-center ">

      { bodyContent }

    </div>
    <div className={`flex w-full items-center  ${steps === 0 ? 'justify-end' : 'justify-between'}`}>
     {steps !== 0 && <Button clickEvent={onBack} text="Back" modifier="btn" icon={IoChevronBackCircleSharp}/>}
      <Button 
      disabled={steps === 2 && !freelanceAuthData.name ? true : false}
      clickEvent={() => {
        if(steps === FREELANCE_STEPS.UPLOAD_IMAGE ) {
          // onSendData()
          // setToggleModal(false)
          // setPropertyInfo(initialListingInfo)
          setTimeout(() => {
            setSteps(FREELANCE_STEPS.SELECT_FEATURES)
          }, 1000)
        } else {
          onNext()
        }
      }} 
      text={steps === FREELANCE_STEPS.UPLOAD_IMAGE ? 'Finish' : 'Next'} 
      modifier="btn flex-row-reverse" 
      icon={steps === FREELANCE_STEPS.UPLOAD_IMAGE ? AiFillCheckCircle : IoChevronForwardCircleSharp}/>
    </div>
</div>
}

export default FreelancerSignup