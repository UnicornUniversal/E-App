import React from 'react'

const useSteps = () => {


enum FREELANCE_STEPS {
    SELECT_FEATURES = 0,
    DETAILS = 1,
    UPLOAD_IMAGE = 2,
   
  }

enum BI_STEPS {
    SELECT_FEATURES = 0,
    DETAILS = 1,
    UPLOAD_IMAGE = 2,
   
  }
  
  return { FREELANCE_STEPS, BI_STEPS }
}

export default useSteps